var images = [
	"../screen/cap00.png",
	"../screen/cap01.png",
	"../screen/cap02.png",
	"../screen/cap03.png",
	"../screen/cap04.png",
	"../screen/cap05.png",
	"../screen/cap06.png",
	"../screen/cap07.png",
	"../screen/cap08.png",
	"../screen/cap09.png",
	"../screen/cap10.png",
	"../screen/cap11.png",
	"../screen/cap13.png",
	"../screen/cap14.png",
	"../screen/cap15.png",
	"../screen/cap16.png",
	"../screen/cap17.png",
	"../screen/cap18.png",
	"../screen/cap19.png",
	"../screen/cap20.png",
	"../screen/cap21.png",
	"../screen/cap22.png",
	"../screen/cap23.png",
	"../screen/cap24.png",
	"../screen/cap25.png",
	"../screen/cap26.png",
	"../screen/theend.png"]

var reponses = [
	"",
	"Donde actualmente se ubica el edificio de El Corte Inglés, en el Ensanche",
	"Plaza de Merindades, 1950",
	"Antiguo Teatro Gayarre",
	"Avenida de Carlos III a la altura de la Plaza del Castillo.",
	"Paseo Sarasate",
	"Etang aux canards où se trouve actuellement l'hôtel 3 Reyes",
	"",
	"14/04/1931 - Público concentrado en la plaza consistorial celebrando la proclamación de la República.",
	"1966",
	"1971",
	"1912",
	"",
	"Lille (1870)",
	"Madrid (1846)",
	"Ascq (1950)",
	"Donosti (1905)",
	"Guernica (1937)",
	"New York (1941)"
]


/* Initialisation de la page*/
	var id = 0;
	document.getElementById("image").setAttribute("src", images[id]) ;

/* Fonctions de navigation */

	function raz() {
		document.getElementById("image").setAttribute("src", images[id]) ;
		console.log(images[id]);
		document.getElementById("solution").textContent = "Réponse";
		document.getElementById("solution").style.fontFamily = "Police10" ;
		document.getElementById("solution").style.fontSize = "30px" ;
		document.getElementById("solution").style.paddingBottom = "10px" ;
		document.getElementById("solution").style.paddingTop = "10px" ;
	}
	function precedent() {
		id--;
		raz();
	}

	function suivant() {
		id++;
		raz();
	}

	function reponse() {
		document.getElementById("solution").textContent = reponses[id] ;
		document.getElementById("solution").style.fontFamily = "Police10" ;
		document.getElementById("solution").style.paddingBottom = "10px" ;
		document.getElementById("solution").style.paddingTop = "10px" ;

	}