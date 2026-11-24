// Packaging candidate ONLY. No deployment, auth setting or secret is changed here.
import {createClient} from 'npm:@supabase/supabase-js@2.119.0';
import {createHandler,supabaseStore,supabaseAuthorization,supabaseLimiter} from './api.mjs';
import configuration from './production-config.json' with {type:'json'};
const origin=Deno.env.get('PARTICIPATION_ORIGIN')||'https://closed.invalid';
const credentials=()=>{
 const url=Deno.env.get('SUPABASE_URL'),key=Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
 if(!url||!key)throw Error('Configuration unavailable');
 return {url,key};
};
const client=()=>{const {url,key}=credentials();return createClient(url,key,{auth:{persistSession:false,autoRefreshToken:false}});};
const store={async command(action:string,payload:Record<string,unknown>){return supabaseStore(client()).command(action,payload);}};
const flags={proposals:configuration.proposals,contributions:configuration.contributions,research:configuration.research,discussion:configuration.discussion};
const authorize=supabaseAuthorization((jwt:string)=>{
 const {url}=credentials(),key=Deno.env.get('SUPABASE_PUBLISHABLE_KEY');if(!key)throw Error('Configuration unavailable');
 return createClient(url,key,{global:{headers:{Authorization:'Bearer '+jwt}},auth:{persistSession:false,autoRefreshToken:false}});
});
const handler=createHandler({store,flags,origin,authorize,claimSlot:async(request:Request)=>{
 const {key}=credentials(),secret=Deno.env.get('PARTICIPATION_ABUSE_SECRET');
 if(!secret||secret===key)throw Error('Dedicated abuse secret required');
 // Upstream header provenance has NOT been certified. Kept closed until reviewed.
 if(Deno.env.get('PARTICIPATION_TRUSTED_PROXY_REVIEWED')!=='true')throw Error('Trusted proxy review required');
 const header=Deno.env.get('PARTICIPATION_TRUSTED_IP_HEADER');
 if(header!=='cf-connecting-ip')throw Error('Trusted header contract required');
 return supabaseLimiter(client(),{secret,trustedIp:(r:Request)=>r.headers.get(header)})(request);
}});
Deno.serve((request:Request)=>{
 const url=new URL(request.url);const match=url.pathname.match(/\/(?:functions\/v1\/)?participation(\/api\/.*)$/);
 if(match)url.pathname=match[1];
 return handler(new Request(url,request));
});
