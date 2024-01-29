var questions = [
	/* Question Aita*/
	"Max et Vincent se connaissent depuis 20 ans. (Lors des Petits Mouchoirs)",
	"La dame qui s'occupe de la maison de vacances s'appelle Brigitte.",
	"Lors du premier restaurant, ils fêtent l'anniversaire de Marie.",
	"M arrive avec une boîte de chocolats chez Marie.",
	/* Question Amatxo*/
	"Antoine répond Bah dans son cul à la question Où il va dormir ?",
	"Marie annonce à Eric en premier qu'elle est enceinte",
	"Les deux phrases à dire aux bocaux de riz sont Je t'aime et Je te hais",
	"Véro dit : Justement je vais faire un risotto",
	/* Question Samuel*/
	"Le père de Canet joue dans le film.",
	"L'anniversaire d'Elliott est le 19 février",
	"Sabine et Max se sont rencontrés au cabinet.",
	"Alex et le phasme se sont rencontrés au cabinet.",
	/* Question Aitor*/
	"La fille d'Eric a plus d'un an.",
	"L'anniversaire surprise de Max est l'idée de Marie.",
	"Max est le vrai père de Jeanne.",
	"Le cabanon de la maison de Max est relié au tout à l'égoût.",
	
	];

var reponses = [
	"Faux", /* Question Aita*/
	"Vrai",
	"Faux",
	"Faux",
	
	"Faux", /* Question Amatxo */
	"Faux",
	"Vrai",
	"Vrai",
	
	"Vrai", /* Question Samuel */
	"Faux",
	"Vrai",
	"Vrai",
	
	"Faux", /* Question Aitor */
	"Faux",
	"Faux",
	"Vrai",
	

]
;
var explications = [
	/* Question  Aitatxo*/
	"Depuis 15 ans",
	"",
	"L’anniversaire d'Antoine",
	"Avec un bouquet de fleurs.",
	/* Question  Amatxo*/
	"Il dit juste Dans son cul.",
	"Eric l'apprend en voyant le test de grossesse",
	"",
	"",
	/* Question  Samuel*/
	"Le voisin sur le ponton",
	"C'est le 15 mars bien évidemment !",
	"",
	"",
	/* Question  Aitor*/
	"Elle a 10 mois.",
	"C'est l'idée d'Antoine.",
	"C'est la vraie fille de Joël.",
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