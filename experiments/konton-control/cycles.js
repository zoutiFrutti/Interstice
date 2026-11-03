"use strict";
/* Coordination candidate C10. Public GitHub GET only; never infers an acknowledgement. */
(function () {
  const $ = id => document.getElementById(id);
  const state = $("cycle-state");
  if (!state) return;
  const ref = "coordination/cycle10-messagerie-v1-20261101";
  const root = "https://raw.githubusercontent.com/zoutiFrutti/Interstice/" + ref + "/coordination/messagerie/";
  const resources = [
    ["MESSAGES_C10.md", "cycle-messages", [0,1,2,4,5,6]],
    ["DEPENDANCES_C10.md", "cycle-gates", [0,1,3]],
    ["ORDRE_RELANCE_C10_2026-11-01.md", "cycle-order", null]
  ];
  function cell(tag, value) {
    const element = document.createElement(tag);
    element.textContent = value;
    return element;
  }
  function tableFromMarkdown(markdown, columns) {
    const lines = markdown.split(/\r?\n/).filter(line => /^\|/.test(line));
    const rows = lines.map(line => line.split("|").slice(1,-1).map(v => v.trim()))
      .filter(cols => cols.length > 1 && !cols.every(v => /^:?-+:?$/.test(v)));
    const table = document.createElement("table");
    table.className = "cycle-table";
    rows.slice(0,30).forEach((row,i) => {
      const tr = document.createElement("tr");
      (columns || row.map((_,j) => j)).forEach(j => tr.append(cell(i===0?"th":"td",row[j] || "")));
      table.append(tr);
    });
    return table;
  }
  function renderOrder(markdown, element) {
    const list = document.createElement("ol");
    const entries = markdown.split(/\r?\n/).filter(x => /^\d+\.\s/.test(x));
    entries.slice(0,20).forEach(line => list.append(cell("li",line.replace(/^\d+\.\s/,""))));
    element.append(list);
  }
  let busy = false;
  async function load() {
    if (busy) return;
    busy = true;
    state.textContent = "Chargement";
    $("cycle-feedback").textContent = "Lecture de la branche candidate GitHub…";
    try {
      const output = await Promise.all(resources.map(async ([name]) => {
        const response = await fetch(root + name, { method:"GET", cache:"no-store", credentials:"omit" });
        if (!response.ok) throw new Error(name+" : HTTP "+response.status);
        const text = await response.text();
        if (text.length > 120000) throw new Error("Document trop volumineux");
        return text;
      }));
      resources.forEach(([name,id,columns],i) => {
        const target = $(id);
        target.replaceChildren();
        const container = document.createElement("div");
        container.className = "cycle-scroll";
        if (columns) container.append(tableFromMarkdown(output[i],columns));
        else renderOrder(output[i],container);
        target.append(container);
      });
      $("cycle-feedback").textContent = "Documents candidats lus le "+new Date().toLocaleString("fr-FR")+
        ". Leur présence ne prouve ni réception des ateliers ni clôture.";
      state.textContent = "Sources lues";
    } catch(error) {
      state.textContent = "Non vérifié";
      $("cycle-feedback").textContent = "Échec de lecture : "+String(error.message||error)+
        ". Aucun courrier ou feu de lancement présumé.";
    } finally { busy = false; }
  }
  $("cycle-refresh").addEventListener("click",load);
  const commands = [["cycle-mail","T'as du courrier"],["cycle-analyze","Analyse le cycle"],["cycle-continue","Continue le cycle"]];
  commands.forEach(([id,command]) => $(id).addEventListener("click",async () => {
    try {
      await navigator.clipboard.writeText(command);
      $("cycle-copy-feedback").textContent = "Copié : "+command+" (non exécuté).";
    } catch(_error) {
      $("cycle-copy-feedback").textContent = "Copie automatique indisponible. Commande : "+command;
    }
  }));
  window.addEventListener("hashchange",() => { if(location.hash==="#cycles") load(); });
  if(location.hash==="#cycles") load();
})();
