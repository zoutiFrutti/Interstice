-- CANDIDAT CYCLE 6. NE PAS APPLIQUER SANS ACCORD EXPLICITE DE ZOUT.
-- Suspension réversible du seul chemin RPC de création d'articles Wiki.
-- L'Edge Function submit-proposal se corrige séparément dans Supabase (code ci-dessous).
-- Relever auparavant les droits actuels et vérifier dépendances / rôles hérités.
BEGIN;
REVOKE EXECUTE ON FUNCTION public.submit_wiki_article(text,text,text,text,text,boolean,boolean) FROM PUBLIC, anon, authenticated;
COMMIT;
-- Retour arrière seulement après décision de réouverture et revue RLS :
-- GRANT EXECUTE ON FUNCTION public.submit_wiki_article(text,text,text,text,text,boolean,boolean) TO authenticated;
-- Attention : ne pas accorder à PUBLIC/anon.
