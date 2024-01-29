var reponses = [
	"",
	"Francois Cluzet - Cocktail Molotov",
	"Benoît Magimel - Rosalie",
	"Laurent Lafitte - Les Rivières pourpres",
	"Anne Marivin - La Vie, l'amour, tout de suite",
	"Benoît Magimel - La vie est un long fleuve tranquille",
	"José Garcia - Romuald et Juliette",
	"Valérie Bonneton - Juste Ciel !",
	"José Garcia - Nous, les Leroy",
	"Pascale Arbillot - Mon Héroïne",
	"Marion Cotillard - Little Girl Blue",
	"Guillaume Canet - La Colline aux mille enfants",
	"Laurent Lafitte - Pour la France",
	"Pascale Arbillot - L'Extraterrestre",
	"Jean Dujardin - Toutes les filles sont folles",
	"Anne Marivin - Chouchou",
	"Marion Cotillard - L'histoire du garçon qui voulait qu'on l'embrasse",
	"Francois Cluzet - Un métier sérieux",
	"Jean Dujardin - Sur les chemins noirs",
	"Valérie Bonneton - Jeanne et le Garçon formidable",
	"Guillaume Canet - Nouveaux Riches",
	
]

var images = [
	"../photos/firstone.jpg",
	"../photos/pers01.jpg",
	"../photos/pers02.jpg",
	"../photos/pers03.jpg",
	"../photos/pers04.jpg",
	"../photos/pers05.jpg",
	"../photos/pers06.jpg",
	"../photos/pers07.jpg",
	"../photos/pers08.jpg",
	"../photos/pers09.jpg",
	"../photos/pers10.jpg",
	"../photos/pers11.jpg",
	"../photos/pers12.jpg",
	"../photos/pers13.jpg",
	"../photos/pers14.jpg",
	"../photos/pers15.jpg",
	"../photos/pers16.jpg",
	"../photos/pers17.jpg",
	"../photos/pers18.jpg",
	"../photos/pers19.jpg",
	"../photos/pers20.jpg",	
	"../screen/theend.png"
	]

var id = 0;

/* Initialisation de la page*/
	var id = 0;
	document.getElementById("image").setAttribute("src", images[id]) ;

	document.getElementById("previous").style.backgroundColor = "transparent";
	document.getElementById("previous").style.color = "transparent";

/* Fonctions de navigation */

	function raz() {
		document.getElementById("image").setAttribute("src", images[id]) ;
		document.getElementById("solution").textContent = "";
		if (id === 0) {
			document.getElementById("previous").style.backgroundColor = "transparent";
			document.getElementById("previous").style.color = "transparent";}
		else {
			document.getElementById("previous").style.color = "#transparent";}
		if(id === reponses.length - 1) {
			document.getElementById("next").style.backgroundColor = "transparent";
			document.getElementById("next").style.color = "transparent";}
		else {
		
			document.getElementById("next").style.color = "#transparent";}
	}
	function precedent() {
		id--;
		raz();
	}

	function suivant() {
		id++;
		raz();
	}

/* Afficher la solution */

function reponse() {
	document.getElementById("solution").textContent = reponses[id];
}
