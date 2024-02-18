var id = 0;

liste_images = [
	"",
	"../photos/zamora.png",
	"../photos/guipúzcoa.png",
	"../photos/larioja.png",
	"../photos/alicante.png",
	"../photos/cuenca.png",

	"../photos/valladolid.png",
	"../photos/alava.png",
	"../photos/segovia.png",
	"../photos/guadalajara.png",
	"../photos/salamanca.png",

	"../photos/burgos.png",
	"../photos/albacete.png",	
	"../photos/soria.png",
	"../photos/badajoz.png",
	"../photos/huesca.png",

	"../photos/teruel.png",
	"../photos/cádiz.png",
	"../photos/granada.png",
	"../photos/córdoba.png",
	"../photos/jaén.png",

	"../photos/asturias.png",
	"../photos/malaga.png",
	"../photos/murcia.png",
	// Formes des territoires
	
	"../photos/navarra.png",
	"../photos/euskadi.png",
	"../photos/npdc.png",
	"../photos/pologne.png",
	"../photos/andalousie.png",

	"../photos/ny.png",
	"../photos/bilbo.png",
	"../photos/indiana.png",
	"../photos/madrid.png",
	"../photos/caracas.png",

	"../photos/photos.png",

	"../photos/fin.jpg",
]


liste_reponses = [
	"",
	"Zamora",
	"Guipúzcoa",
	"Larioja",
	"Alicante",
	"Cuenca",
	"Valladolid",
	"Alava",
	"Segovia",
	"Guadalajara",
	"Salamanca",
	"Burgos",
	"Albacete",
	"Soria",
	"Badajoz",
	"Huesca",
	"Teruel",
	"Cádiz",
	"Granada",
	"Córdoba",
	"Jaén",
	"Asturias",
	"Malaga",
	"Murcia",
	// Formes des territoires
	"Navarra",
	"Pays basque",
	"Nord Pas de Calais",
	"Pologne",
	"Andalucía",

	"Nueva York",
	"Bilbao",
	"Indiana",
	"Madrid",
	"Caracas",
	"Tu regalo",

]


/* Initialisation de la page*/
	var id = 0;
	document.getElementById("image").setAttribute("src", "../photos/unknown.png") ;


/* Fonctions de navigation */

	function raz() {
		document.getElementById("image").setAttribute("src", liste_images[id]) ;
		document.getElementById("result").textContent = "Réponse";
		
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

function resultat() {
	document.getElementById("result").textContent = liste_reponses[id];
}
