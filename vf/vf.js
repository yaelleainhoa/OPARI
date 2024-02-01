var questions = [
	/* Question Aita*/
	"Dans la saison actuelle de la Liga, le club le plus au sud est Cadix CF.",
	"Dans la saison actuelle de la Liga, le club le plus à l'ouest est Celta de Vigo.",
	"Dans la saison actuelle de la Liga, la communauté autonome la plus représentée est la communauté de Madrid.",
	"Dans la siason actuelle de la Liga, 6 clubs sont en Liga depuis le XXe siècle..",
	/* Question Amatxo*/
	"Dans la saison actuelle de l'Euroligue, le club le plus au nord est l'ALBA Berlin.",
	"Dans la saison actuelle de l'Euroligue, 3 villes accueillent 2 clubs (hormis Tel Aviv).",
	"Dans la saison actuelle de l'Euroligue, deux clubs jouent dans le même stade (hormis Tel Aviv).",
	"Dans la saison actuelle de l'Euroligue, il y a autant de joueurs espagnols dans l'effectif du Barça et du Real.",
	/* Question Samuel*/
	"Lors de la coupe du monde de basket 2019, la finale a eu lieu à Pekin.",
	"Lors de la finale de la coupe du monde de basket 2019, le meilleur marqueur était Rciky Rubio.",
	"Lors de la coupe du monde de basket 2019, les États Unis onr la meilleure moyenne de points marqués par match.",
	"Lors de la coupe du monde de basket 2019, Luis Scola finit dans le meilleur 5 de la compétition.",
	/* Question Aitor*/
	"Lors de la saison NBA 2022-2023, Jokic a fait 28 triples doubles.",
	"Lors de la saison NBA 2022-2023, la finale NBA s'est terminée sur un match 6.",
	"Lors de la saison NBA 2022-2023, Denver a fini premier de conférence Ouest.",
	"Lors de la saison NBA 2022-2023, San Antonio a fini dernier de la conférence Ouest.",
	
	];

var reponses = [
	"Faux", /* Question Aita*/
	"Vrai",
	"Faux",
	"Faux",
	
	"Faux", /* Question Amatxo */
	"Vrai",
	"Vrai",
	"Faux",
	
	"Vrai", /* Question Samuel */
	"Faux",
	"Faux",
	"Vrai",
	
	"Faux", /* Question Samuel */
	"Faux",
	"Vrai",
	"Vrai",
	

]
;
var explications = [
	/* Question  Aitatxo*/
	"C'est UD Las Palmas.",
	"",
	"C'est l'Andalousie avec 5 clubs - Madrid (4).",
	"4 - Real Madrid, FC Barcelone, Athletic Club et Valence CF.",
	/* Question Samuel */
	"Žalgiris Kaunas.", 
	"Istanbul, Athènes et Belgrade.",
	"Le Partizan et l'Étoile Rouge à la Štark Arena.",
	"6 dans l'effectif du Barça et 7 dans celui du Real.",
	/* Question Samuel */
	"", 
	"Gabriel Deck a marqué 24 points, 20 pour Ricky.",
	"C'est la Nouvelle-Zélande avec 99,4 points par match.",
	"",
	/* Question Samuel */
	"39 (10 en Playoffs et 29 en saison régulière.", 
	"Et non Denver a gagné en 5 matchs.",
	"",
	"",

	];

for ( var i = 0 ; i < questions.length ; i ++) {
	var EltR = "reponse" + i ;
	document.getElementById(EltR).style.display="none";
	var EltE = "explication" + i ;
	document.getElementById(EltE).style.display="none";
	var EltQ = "question" + i ;
	document.getElementById(EltQ).textContent=questions[i];
}

function question(i) {
	var EltR = "reponse" + i ;
	var EltE = "explication" + i ;
	var EltB = "bouton" + i ;
	if (reponses[i] === "Vrai") {
		document.getElementById(EltR).textContent="VRAI";
		document.getElementById(EltR).style.backgroundColor="#56BF8D";
		document.getElementById(EltR).style.display="block";
		document.getElementById(EltE).style.display="block";
		document.getElementById(EltB).style.display="none";}

	else {
		document.getElementById(EltR).textContent="FAUX";
		document.getElementById(EltR).style.backgroundColor="#CB4335";
		document.getElementById(EltR).style.display="block";
		document.getElementById(EltE).style.display="block";
		document.getElementById(EltB).style.display="none";}

	var EltE = "explication" + i;
	document.getElementById(EltE).textContent = explications[i];
	
	
	};