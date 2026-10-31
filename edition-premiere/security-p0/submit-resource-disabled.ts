// CANDIDAT SEUL. Ne pas déployer sans décision explicite et contrôle des dépendances.
const origin = "https://zoutifrutti.github.io";
Deno.serve(request => {
 const headers = {
  "Access-Control-Allow-Origin": origin,
  "Access-Control-Allow-Headers": "content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
  "Cache-Control": "no-store",
  "Vary": "Origin"
 };
 if(request.method === "OPTIONS") return new Response(null,{status:204,headers});
 if(request.method !== "POST") return new Response(JSON.stringify({error:"Méthode non autorisée"}),{status:405,headers});
 return new Response(JSON.stringify({error:"Contributions temporairement suspendues"}),{status:503,headers});
});
