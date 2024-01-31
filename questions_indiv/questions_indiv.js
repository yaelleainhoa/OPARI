document.getElementById("masquer").style.display = "none";

var liste_questions = [
	"0",
	"Quels sont les états voisins de l'Indiana ?",
	"Dans Kill Bill de Quentin Tarantino, combien de temps la mariée (Beatrix Kiddo) reste-t-elle dans le coma ?",
	"Combien de films Star Wars a réalisé George Lucas ?",
	"Quel est le premier film de la phase 1 des films Marvel ?",
	"Quel est le nom de la cathédrale de Lille ?",
	"Quel est le nom complet de l'ADN ?",
	"Quelle est la deuxième ville la plus peuplée de l'Indiana ?",
	"Quel est le premier film de la phase 2 des films Marvel ?",
	"Contre qui Han Solo remporte-t-il le Faucon Millénium lors d'une partie de sabacc ?",
	"Citer 2 des 3 films Marvel sortis en 2019 ?",
	"Quel est l'autre nom de la Grand'Place à Lille ?",
	"Quelle équipe a remporté le tournoi des VI nations en 2023 ?",
	"Quel est le patronus de Ginny Weasley ?",
	"Quel est le premier film qu'a réalisé seul Quentin Tarantino ?",
	"Quelle est la première série de l'univers Marvel à être sortie ?",
	"Qui est le dernier champion à sortir du lac lors de la deuxième tâche du tournoi des trois sorciers ?",
	"Combien de titres de Championnes d'Espagne a gagné l'Athletic Club (section féminine ?)",
	"Quel joueur français a joué dans le club de  Sociedad Deportiva Cultural San Antonio entre 2000 et 2005 ?",
	"Pouquoi tant d'élèves de Poudlard pensent-ils que Harry est l'héritier de Serpentard ?",
	"Dans la saga Star Wars, qui tue le chancelier Palpatine alias Dark Sidious ?",

	]
;


var liste_reponses = [
	"0",
	"Michigan, Ohio, Kentucky & Illinois.",
	"4 ans",
	"4 - Il réalise les épisodes I, II, III et IV. De la première trilogie, il ne réalise que le 1er film, puis il va réaliser les 3 films de la seconde trilogie.",
	"Captain America : The First Avenger (2011)",
	"Notre Dame de la Treille",
	"Acide désoxyribonucléique",
	"Fort Wayne",
	"Iron Man 3 (2013)",
	"Lando Calrissian",
	"Captain Marvel, Avengers : Endgame & Spider-Man : Far From Home",
	"Place du Général de Gaulle",
	"Irlande",
	"Un cheval",
	"Reservoir Dogs (1992)",
	"Marvel : Les Agents du SHIELD, diffusée dès septembre 2013.",
	"Harry Potter",
	"5 - Champion en 2003, 2004, 2005, 2007 et 2016",
	"Jackson Richardson",
	"Parce qu'il parle fourchelang",
	"Dark Vador",
]
;

function myFunction(clicked_id) {
	var Elt = document.getElementById("question");
	Elt.textContent = liste_questions[clicked_id];
	document.getElementById(clicked_id).id = "id" + clicked_id;
	document.getElementById("masquer").textContent=clicked_id;
	document.getElementById("reponse").textContent= "";
}
;

function Afficher_reponse(clicked_id) {
	var id_reponse = document.getElementById("masquer").textContent;
	var Elt = document.getElementById("reponse");
	Elt.textContent = liste_reponses[id_reponse];

}