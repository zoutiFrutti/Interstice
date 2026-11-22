// Executes real Deno + pinned SDK. No service, secret, environment or network access.
Deno.test('closed pilot and actual SDK responses, transport intercepted',async t=>{
 let handler: (req: Request)=>Response|Promise<Response>;
 let enabled=false,allowed=true,insertError=false;
 const calls: {url:string,body:unknown}[]=[];
 const originalServe=Deno.serve,originalGet=Deno.env.get,originalFetch=globalThis.fetch;
 Deno.serve=((fn: typeof handler)=>{handler=fn;return {};}) as unknown as typeof Deno.serve;
 Deno.env.get=(key:string)=>({FAIRE_ENSEMBLE_PROPOSALS_ENABLED:enabled?'true':'false',
  SUPABASE_URL:'https://example.test',SUPABASE_SERVICE_ROLE_KEY:'synthetic-key'} as Record<string,string>)[key];
 globalThis.fetch=async(input,init)=>{
  const url=typeof input==='string'?input:input instanceof URL?input.href:input.url;
  if(new URL(url).origin!=='https://example.test')throw new Error('Unexpected transport destination');
  calls.push({url,body:JSON.parse(String(init?.body))});
  if(url.endsWith('/rpc/claim_submission_slot'))return new Response(JSON.stringify(allowed),{headers:{'Content-Type':'application/json'}});
  if(url.endsWith('/rest/v1/proposals'))return insertError
   ?new Response(JSON.stringify({message:'synthetic database failure',code:'SYNTHETIC'}),{status:400,headers:{'Content-Type':'application/json'}})
   :new Response(null,{status:201});
  throw new Error('Unexpected SDK endpoint');
 };
 const request=()=>new Request('https://example.test/submit',{method:'POST',
  headers:{origin:'https://zoutifrutti.github.io','cf-connecting-ip':'192.0.2.1'},
  body:JSON.stringify({need:'Un outil',category:'Matériel et ressources',pilot_cohort:'forged',created_at:'2000-01-01'})});
 const equal=(a:unknown,b:unknown)=>{if(JSON.stringify(a)!==JSON.stringify(b))throw new Error(`Expected ${JSON.stringify(b)}, got ${JSON.stringify(a)}`);};
 try{
  await import('./submit-proposal.ts');
  await t.step('closed before body or SDK',async()=>{
   equal((await handler!(new Request('https://example.test/submit',{method:'POST',body:'unread'}))).status,503);equal(calls.length,0);
  });
  await t.step('real SDK records only pending with server cohort',async()=>{
   enabled=true;equal((await handler!(request())).status,202);equal(calls.length,2);
   const value=calls[1].body as Record<string,unknown>;equal(value.status,'pending');equal(value.pilot_cohort,'c08-fe-proposals-v1');equal(value.created_at,undefined);
   const fingerprint=(calls[0].body as Record<string,string>).p_fingerprint;
   if(!/^[a-f0-9]{64}$/.test(fingerprint))throw new Error('Unexpected fingerprint format');
  });
  await t.step('throttle stops before insert',async()=>{
   calls.length=0;allowed=false;equal((await handler!(request())).status,429);equal(calls.length,1);
  });
  await t.step('real SDK database error has no successful receipt',async()=>{
   calls.length=0;allowed=true;insertError=true;equal((await handler!(request())).status,503);equal(calls.length,2);
  });
 }finally{Deno.serve=originalServe;Deno.env.get=originalGet;globalThis.fetch=originalFetch;}
});
