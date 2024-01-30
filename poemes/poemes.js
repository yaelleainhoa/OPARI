var titre = [
	"Bah j'ai dansé un peu, et puis après je me suis fait baisée par 3 surfeurs sur un trampoline du club Mickey.",
	"Je suis bien là-bas ça m'apaise",
	"C'est de ma faute s'il s'est pété la gueule ?",
	"Il faut que tu rencontres ce mec il est génial",
	"Vous êtes au courant pour Juliette ?",
	"Comment je fais sans toi ?",
	"Je pensais pas que ça me plairait autant de déclarer ma flamme à un pot de riz",
	"Il n'y a pas de problème mon chat tu es un grand garcon",
	"Non j'arrive pas comme ça la gueule enfarinée.",
	"Mais c'est qui Ludo ?" ,
	"Max - Je vais prendre une douche & [....] - Ouais je viens avec toi",
	"Vous allez pas pouvoir rester ici",
	"TEXTO - Nous c'était autre chose ! Bonne nuit ma caille",
	"Isabelle je te trouve sublime (...) tu as un corps magnifique, désolé de le dire comme ça mais qu'est ce que ce cul",
	"Oh putain tu m'as vu !",
	"Tu la sens ? Cette énergie entre nous ?"
]

var debut = [
	"Véronique",
	"Marie",
	"Eric",
	"Max",
	"Vincent",
	"Eric",
	"Véronique",
	"Le phasme",
	"Eric",
	"Nino",
	"Antoine",
	"Max",
	"Vincent",
	"Antoine",
	"Marie",
	"Nassim"


	
]

var fin = [
	" - En répondant à son mari quand il lui demande ce qu'elle a fait hier soir",
	" - En parlant de l'Amazonie",
	" - En parlant de l'accident de Ludo",
	" - En parlant de Jean Louis",
	" - En parlant de Juliette et de son mariage",
	" - En faisant la déclaration à Léa depuis la place",
	" - En parlant des pots de riz de Nassim",
	" - Quand son gars veut du fromage.",
	" - En répondant à Max",
	" - Quand il voit la photo de groupe",
	" - Quel blagueur !",
	" - Quand il vire ses copains de la maison",
	" Texto entier : J'espère que c'est pas la présence d'Alex qui perturbe, je voulais que tu le rencontres. Même si je suis très amoureux de lui, ce que j'ai ressenti pour toi, ça n'avait rien à voir...",
	" - Quand il drague Isa",
	" - Quand elle arrive en retard à la surprise",
	" - Quand il fait un calin avec Eric"
	

]

for (var i = 0 ; i < titre.length ; i ++) {
	var j = i + 1;
	var EltQuestion = "question" + j ;
	document.getElementById(EltQuestion).textContent = titre[i];

	var EltQ = "q" + j;
	document.getElementById(EltQ).textContent = debut[i];

	var EltR = "r" + j;
	document.getElementById(EltR).textContent = fin[i];

};



function Afficher_reponse(id) {
	var rep = "r" + id;
	var que = "q" + id;
	
	document.getElementById(rep).style.visibility = "visible";
	document.getElementById(rep).style.color = "#ff8484";

	document.getElementById(que).style.visibility = "visible";
	document.getElementById(que).style.color = "#ff8484";
}
;

