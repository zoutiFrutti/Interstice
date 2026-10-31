// Pilotage 100 % fictif. Aucun lieu réel ni adresse. Les ancres sont des CENTRES DE COMMUNES.
import {DEMO_INITIATIVES} from "./initiatives-data.mjs";
export const COMMUNE_ANCHORS=Object.freeze([
 Object.freeze({id:"Rabastens",lat:43.823,lon:1.724}),
 Object.freeze({id:"Lisle-sur-Tarn",lat:43.853,lon:1.811}),
 Object.freeze({id:"Gaillac",lat:43.903,lon:1.899}),
 Object.freeze({id:"Albi",lat:43.928,lon:2.147})
]);
const initiatives=DEMO_INITIATIVES.map(item=>({...item,kind:"initiative",reading:"communs",lifecycle:"documente-simule",statusDetail:"Documenté uniquement dans le scénario fictif"}));
const others=[
 {id:"demo-ressource-rabastens",kind:"ressource",reading:"communs",title:"L'établi partagé imaginaire",category:"Réparation",territories:["Rabastens"],stage:"Ressource fictive",lifecycle:"documente-simule",statusDetail:"Existant documenté dans un scénario inventé",summary:"Un établi collectif supposé disponible, uniquement dans cette simulation.",description:"Il ne s'agit ni d'un lieu ni d'un outil réellement accessible.",needs:[],offers:["Établi","Outils"],join:"Aucun lieu ni prêt réel."},
 {id:"demo-besoin-lisle",kind:"besoin",reading:"possibles",title:"Un atelier à héberger",category:"Culture",territories:["Lisle-sur-Tarn"],stage:"Besoin fictif",lifecycle:"en-projet",statusDetail:"Besoin en projet fictif",summary:"Chercher un espace pour un atelier collectif imaginé.",description:"Hypothèse de besoin, sans lieu ni personne associés.",needs:["Salle","Coup de main"],offers:[],join:"Aucune demande réelle."},
 {id:"demo-besoin-albi",kind:"besoin",reading:"possibles",title:"Une livraison mutualisée à imaginer",category:"Entraide",territories:["Albi"],stage:"Besoin fictif",lifecycle:"en-projet",statusDetail:"Besoin à discuter, scénario fictif",summary:"Une aide imaginaire au transport de matériel.",description:"Aucune adresse ou livraison réelle.",needs:["Transport","Temps disponible"],offers:[],join:"Aucune demande réelle."},
 {id:"demo-offre-gaillac",kind:"ressource",reading:"possibles",title:"Une perceuse qui pourrait se partager",category:"Mutualisation",territories:["Gaillac"],stage:"Offre fictive",lifecycle:"en-projet",statusDetail:"Offre fictive non confirmée",summary:"Simulation d'une proposition de partage de matériel.",description:"Il n'y a pas de prêteur ou matériel réel derrière cet exemple.",needs:[],offers:["Perceuse","Petit outillage"],join:"Aucun prêt réel."},
 {id:"demo-projet-gaillac",kind:"projet",reading:"possibles",title:"Une rencontre de réparation à inventer",category:"Réparation",territories:["Gaillac","Lisle-sur-Tarn"],stage:"Projet fictif",lifecycle:"en-projet",statusDetail:"Projet imaginé, aucun calendrier réel",summary:"Une journée itinérante de réparation, entièrement imaginaire.",description:"Aucun accord collectif, rendez-vous ou organisateur réel.",needs:["Outils","Lieu","Volontaires"],offers:["Savoir-faire"],join:"Aucune rencontre planifiée."}
];
export const DEMO_MAP_ENTRIES=Object.freeze([...initiatives,...others].map(item=>Object.freeze({
 ...item,isDemo:true,publicContact:null,locationLevel:"commune",
 source:Object.freeze({type:"simulation",label:"Scénario fictif pour tester la carte"}),
 territories:Object.freeze([...item.territories]),needs:Object.freeze([...item.needs]),offers:Object.freeze([...item.offers])
})));
