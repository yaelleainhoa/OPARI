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
	"../screen/cap12.png",
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


/* Initialisation de la page*/
	var id = 0;
	document.getElementById("image").setAttribute("src", images[id]) ;

/* Fonctions de navigation */

	function raz() {
		document.getElementById("image").setAttribute("src", images[id]) ;
		document.getElementById("solution").textContent = "";
		if (id === 0) {
			document.getElementById("previous").style.backgroundColor = "transparent";
			document.getElementById("previous").style.color = "transparent";}
		else {
			document.getElementById("previous").style.color = "#fff";}
		if(id === titres.length - 1) {
			document.getElementById("next").style.backgroundColor = "transparent";
			document.getElementById("next").style.color = "transparent";}
		else {
			document.getElementById("next").style.color = "#fff";}
	}
	function precedent() {
		id--;
		raz();
	}

	function suivant() {
		id++;
		raz();
	}