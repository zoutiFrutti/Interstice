// CANDIDAT NON DÉPLOYÉ : remplacera le handler de submit-proposal
// si Zout autorise la suspension serveur. Aucun accès DB, aucune donnée conservée.
const origin = "https://zoutifrutti.github.io";
Deno.serve((request) => {
  const headers = {
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
    "Access-Control-Allow-Origin": origin,
    "Vary": "Origin",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "content-type"
  };
  if (request.method === "OPTIONS") return new Response(null,{status:204,headers});
  if (request.method !== "POST") return new Response(JSON.stringify({error:"Méthode non autorisée"}),{status:405,headers});
  return new Response(JSON.stringify({error:"Contributions temporairement suspendues"}),{status:503,headers});
});
