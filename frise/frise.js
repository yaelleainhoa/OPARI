var equipe1 = [
	"Emmené par une belle brochette de 🟥🟥🟥 'Les Petits Mouchoirs' nous entraîne dans un incroyable tourbillon d'émotions. [...]",
	"[...] On en ressort un peu sonné. Et ça fait un 🟥🟥🟥 🟥🟥🟥",
	"Une oeuvre aussi 🟥🟥🟥 que délicatement ciselée.",
	"C'est formidable, drôle, 🟥🟥🟥. Guillaume Canet confirme qu'il est un cinéaste qui compte.",
	"Loin de céder à la tentation de l'éparpillement, le scénario plonge dans les abysses d'un sujet fort, l'🟥🟥🟥, dont il explore les ambiguïtés avec une précision de télépathe, une lucidité cruelle et une intuition de médium générationnel."];

var dates1 = [
	"comédiens",
	"bien fou",
	"sincère",
	"émouvant",
	"amitié"];

var equipe2 = [
	"Guillaume Canet livre une nouvelle ode à l’🟥🟥🟥 portée par des acteurs au top.",
	"Des retrouvailles 🟥🟥🟥.",
	"Un cadre exceptionnel, une bande-son excellente, des potes en vacances… c’est simple, on sort de là avec une grosse envie d’🟥🟥🟥 et de vin blanc.",
	"Les acteurs sont formidables, 🟥🟥🟥 et ??? ??? en tête.",
	"Les acteurs sont formidables, ??? ??? et 🟥🟥🟥 en tête."];

var dates2 = [
	"amitié",
	"touchantes",
	"huîtres",
	"François Cluzet",
	"Marion Cotillard"];


var equipe4 = [
	"Neuf ans après, Guillaume Canet réunit sa troupe des Petits Mouchoirs. Mais rien ne 🟥🟥🟥 cette suite, succession de sketches sans charme.",
	"Le « mystère Canet » serait-il un avatar du « cas Claude Lelouch », ce réalisateur qui déborde d'🟥🟥🟥 mais qui se montre incapable de jeter les mauvaises et de garder les (rares) bonnes ?",
	"La suite des Petits Mouchoirs voudrait croquer des personnages attachants car imparfaits, mais sa mise en scène déficiente transforme Nous finirons ensemble en pensum bourgeois et daté. Il suffira de projeter le film à un contingent solide de 🟥🟥🟥 🟥🟥🟥 un samedi matin pour en finir avec la Macronie avant l'apéro.",
	"Impression de gâtisme qui gagne chaque plan de cette informe 🟥🟥🟥.",
	"Les situations et les dialogues n’ont plus grand-chose d’émouvant et encore moins de 🟥🟥🟥. On peut même les qualifier de lourdauds et on se souvient de l’expression beauf élitiste qu’on avait pu entendre il y a neuf ans."];

var dates4 = [
	"justifie",
	"idées",
	"Gilets Jaunes",
	"pâté",
	"drôle"];


var equipe3 = [
	"L'industrie lourde du cinéma français à l'aise dans ses tongs au Cap-Ferret. Une certaine idée de l'🟥🟥🟥.",
	"Les Petits Mouchoirs est ce qu'on a vu de plus 🟥🟥🟥, de plus rance surtout, depuis longtemps (...). Sortez les mouchoirs, ils seront utiles: sur les écrans français, cette semaine, il y a une grosse tâche.",
	"On a rarement vu dans un film aussi 🟥🟥🟥, des personnages évoluer si peu ",
	"Le film s'abîme rapidement dans la 🟥🟥🟥",
	"Rires et chansons, philosophie à deux 🟥🟥🟥, dégoulinades de bons sentiments, tout ça pour ça."];

var dates3 = [
	"enfer",
	"beauf",
	"long",
	"caricature",
	"balles"];




for (var i = 0; i < 5; i++) {
	var id = "perso1" + i;
	document.getElementById(id).textContent = equipe1[i];
	var id = "perso2" + i;
	document.getElementById(id).textContent = equipe2[i];
	var id = "perso3" + i;
	document.getElementById(id).textContent = equipe3[i];
	var id = "perso4" + i;
	document.getElementById(id).textContent = equipe4[i];

}

function Valider1() {
	for (var i = 0; i < equipe1.length; i++) {
		var Elt = "res1" + i;
		var idElt = "age1" + i;
		if (document.getElementById(Elt).value === dates1[i]) {document.getElementById(Elt).style.backgroundColor = "#50D274";}
		else {document.getElementById(Elt).style.backgroundColor = "#E33A2F";};
		document.getElementById(idElt).textContent = dates1[i];

		
}}
;

function Valider2() {
	for (var i = 0; i < equipe2.length; i++) {
		var Elt = "res2" + i;
		var idElt = "age2" + i;
		if (document.getElementById(Elt).value === dates2[i]) {document.getElementById(Elt).style.backgroundColor = "#50D274";}
		else {document.getElementById(Elt).style.backgroundColor = "#E33A2F";}
		document.getElementById(idElt).textContent = dates2[i];

}};



function Valider3() {
	for (var i = 0; i < equipe3.length; i++) {
		var Elt = "res3" + i;
		var idElt = "age3" + i;
		if (document.getElementById(Elt).value === date3[i]) {document.getElementById(Elt).style.backgroundColor = "#50D274";}
		else {document.getElementById(Elt).style.backgroundColor = "#E33A2F";}
		document.getElementById(idElt).textContent = dates3[i];

}};


function Valider4() {
	for (var i = 0; i < equipe4.length; i++) {
		var Elt = "res4" + i;
		var idElt = "age4" + i;
		if (document.getElementById(Elt).value === dates4[i]) {document.getElementById(Elt).style.backgroundColor = "#50D274";}
		else {document.getElementById(Elt).style.backgroundColor = "#E33A2F";}
		document.getElementById(idElt).textContent = dates4[i];

}};
