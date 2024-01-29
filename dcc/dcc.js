var questions = [
	"",
	"Comment s'appelle l'agent immobilier ?",
	"Depuis combien de temps Max n'a pas vu ses copains ?",
	"Comment s'appelle la fille d'Éric ?",
	"Avec quoi arrive Jean Louis à la maison ?",
	"Où est la mère de la fille d'Éric ?",
	"Qui a déjà eu un cancer ?",
	"Qu'est ce qui cause les gonflements d'Antoine ?",
	"Qui est le premier à savoir que Max doit vendre ?",
	"Pour aller dans quelle ville Isa a emprunté la voiture de son ex ?",
	"Où travaille désormais Marie ?",
	"Pourquoi Arthur ne couche pas avec les deux filles ?",
	"Quel cadeau fait Nassim à Max ?",
	"Qui demande à Antoine s'il est venu avec Juliette ?",
	"Lors de la venue surprise, que fait tomber Antoine qui interpelle Max ?",
	"Dans la première scène, qui est le premier à dire : 'Qu'est ce que vous foutez là ?' ?",
	"Dans la première scène, qui est le deuxième à dire : 'Bonjour mon amour' ?",
	"Dans la première scène, qui est le troisième à dire : 'Salut Max, on voulait te faire une surprise, on est venu pour ton anniversaire' ?",
	"Dans la première scène, qui est le quatrième à dire : 'Ah oui Max, 60 ans on allait quand même pas te laisser tout seul ?",
	"Dans la première scène, qui est le sixième à dire : Bonjour, joyeux anniversaire ?",
	"Dans la première scène, qui est le septième à dire : 'Maxou, Maxou' ?",
	];

var propositions = [
	/* Réponse de la question 1 -- 0 -> 3*/
	"Jean François",
	"Jean Michel",
	"Jean Marc",
	"Jean Paul",
	/* Réponse de la question 2 -- 4 -> 7*/
	"3 ans",
	"6 mois",
	"1 an",
	"7 ans",
	/* Réponse de la question 3 -- 8 -> 11*/
	"Mila",
	"Juliette",
	"Vanille",
	"Iris",
	/* Réponse de la question 4 -- 12 -> 15*/
	"Des huîtres",
	"Un bouquet de fleurs",
	"Une boîte de chocolats",
	"Une bouteille de vin",		
	/* Réponse de la question 5 -- 16 -> 19*/
	"Sous Exta à Ibiza",
	"Au boulot à Oslo",
	"A l'hosto à Mexico",
	"En vacances au Cap Ferret",		
	/* Réponse de la question 6 -- 20 -> 23*/
	"Sabine",
	"Marie",
	"Antoine",
	"Jean Louis",		
	/* Réponse de la question 7 -- 24 -> 27*/
	"Chenille processionnaire",
	"Araignée loup",
	"Scarabée rhinocéros",
	"Mouche Tsé-Tsé",				
	/* Réponse de la question 8 -- 28 -> 31*/
	"Éric",
	"Marie",
	"Antoine",
	"Sabine",			
	/* Réponse de la question 9 -- 32 -> 35*/
	"Pau",
	"Paris",
	"Bordeaux",
	"Lyon",			
	/* Réponse de la question 10 -- 36 -> 39*/
	"Bar Concert",
	"Fast Food",
	"Supermarché",
	"Amazonie",		
	/* Réponse de la question 11 -- 40 -> 43*/
	"Elles sont sœurs",
	"Elles ne veulent pas",
	"Il est trop bourré",
	"Il n'a pas de capotes",		
	/* Réponse de la question 12 -- 44 -> 47*/
	"4 tabourets pour faire ses besoins",
	"2 bocaux de riz",
	"3 bouteilles de vin",
	"10 écharpes en lin",			
	/* Réponse de la question 13 -- 48 -> 51*/
	"Nassim",
	"Max",
	"Marie",
	"Eric",			
	/* Réponse de la question 14 -- 52 -> 55*/
	"Une pelle",
	"Un verre",
	"Un balai",
	"Un téléphone",
	/* Réponse de la question 15 -- 56 -> 59*/
	"Max",
	"Antoine",
	"Eric",
	"Vincent",			
	/* Réponse de la question 16 -- 60 -> 63*/
	"Sabine",
	"Isa",
	"Eric",
	"Marie",			
	/* Réponse de la question 17 -- 64 -> 67*/
	"Vincent",
	"Isa",
	"Antoine",
	"Alex",			
	/* Réponse de la question 18 -- 68 -> 71*/
	"Isa",
	"Alex",
	"Antoine",
	"Marie",			
	/* Réponse de la question 19 -- 72 -> 75*/
	"Alex",
	"Marie",
	"Antoine",
	"Jean Louis",			
	/* réponse de la question 20 -- 76 -> 79*/
	"Antoine",
	"Marie",
	"Jean Louis",
	"Nassim",			

	];

var id = 0;
var test = "";
document.getElementById("previous").style.backgroundColor = "transparent";
document.getElementById("previous").style.color = "transparent";

document.getElementById("next").style.backgroundColor = "#668c6f";
document.getElementById("next").style.color = "white";

/* Navigation entre les questions */

	function raz() {
	if (id === 0) {
		document.getElementById("previous").style.backgroundColor = "transparent";
		document.getElementById("previous").style.color = "transparent";}
	else {
		document.getElementById("previous").style.backgroundColor = "#668c6f";
		document.getElementById("previous").style.color = "#fff";}
	if(id === questions.length - 1) {
		document.getElementById("next").style.backgroundColor = "transparent";
		document.getElementById("next").style.color = "transparent";}
	else {
		document.getElementById("next").style.backgroundColor = "#668c6f";
		document.getElementById("next").style.color = "#fff";}

	document.getElementById("idduo").style.display="block";
	document.getElementById("idcarre").style.display="block";
	document.getElementById("idcash").style.display="block";
	document.getElementById("duo").style.display="none";
	document.getElementById("carre").style.display="none";
	document.getElementById("cash").style.display="none";

	for (var i = 0 ; i < 2 ; i ++ ) {
		var Elt = "duo0" + i;
		document.getElementById(Elt).style.backgroundColor = "#E3D9CF";
		document.getElementById(Elt).style.boxShadow="0px 0px 0px";
	}

	for (var i = 0 ; i < 4 ; i ++ ) {
		var EltC = "car0" + i;
		document.getElementById(EltC).style.backgroundColor = "#E3D9CF";
		document.getElementById(EltC).style.boxShadow="0px 0px 0px";
	}

	document.getElementById("cas00").textContent = "Quelle est votre réponse ?";
	document.getElementById("cas00").style.backgroundColor = "#E3D9CF";
	document.getElementById("cas00").style.boxShadow="0px 0px 0px";
	}
	function precedent () {
		id--;
		raz();
		afficher_question();}

	function suivant () {
		id++;
		raz();
		afficher_question();}

	function afficher_question() {
	
		document.getElementById("question").textContent = questions[id];
	}
/* Duo, carré ou Cash */

	function carre_gen() {
		var ord = [0, 1, 2, 3];
		var prop = [-1, -1, -1, -1];
		for (var j = 0 ; j < ord.length ; j ++ )
		{
			var Elt = Math.floor(Math.random() * (4));
			while (prop[Elt] >=0 ) {Elt = Math.floor(Math.random() * (4));}
			prop[Elt] = ord[j];
		};
		return prop;}

	function duo_gen() {
		var ord = [0, 1];
		var prop = [-1, -1];
		for (var j = 0 ; j < ord.length ; j ++ )
		{
			var Elt = Math.floor(Math.random() * (2));
			while (prop[Elt] >=0 ) {Elt = Math.floor(Math.random() * (2));}
			prop[Elt] = ord[j];
		}
		return prop;
		}


	function duo() {
		document.getElementById("idduo").style.display="none";
		document.getElementById("idcarre").style.display="none";
		document.getElementById("idcash").style.display="none";
		document.getElementById("duo").style.display="block";
		/* Gestion aléatoire des indices du tableau*/
			var res = duo_gen();
			for (var j = 0 ; j < 2 ; j ++) {
				var resid = "duo0" + j ; 
				var k = 4*(id-1) + res[j];
				document.getElementById(resid).textContent = propositions[k];
				if (res[j] === 0) {document.getElementById(resid).setAttribute("name","bonne-réponse");}
				else {document.getElementById(resid).setAttribute("name"," ");}
		}	
		test = "duo";
	}

	function carre() {
		document.getElementById("idduo").style.display="none";
		document.getElementById("idcarre").style.display="none";
		document.getElementById("idcash").style.display="none";
		document.getElementById("carre").style.display="block";
		/* Gestion aléatoire des indices du tableau*/
			var res = carre_gen();
			for (var j = 0 ; j < 4 ; j ++) {
			var resid = "car0" + j ; 
			var k = 4*(id-1) + res[j];
			document.getElementById(resid).textContent = propositions[k];
			if (res[j] === 0) {document.getElementById(resid).setAttribute("name","bonne-réponse");}
			else {document.getElementById(resid).setAttribute("name"," ");}
		}
		test = "car";	
	}

	function cash() {
		document.getElementById("idduo").style.display="none";
		document.getElementById("idcarre").style.display="none";
		document.getElementById("idcash").style.display="none";
		document.getElementById("cash").style.display="block";
		test = "cas";
		}

/* Afficher les résultats */

	function resultatcash() {
		var reponse ="";
		var mauvaiseReponse = "";
		var cer = 4*(id-1);
		document.getElementById("cas00").textContent = propositions[cer];
		document.getElementById("cas00").style.backgroundColor = "#45C49C";
		document.getElementById("cas00").style.boxShadow="5px 5px 10px";
	}


	function resultat(clicked_id) 
		{	
			var EltListe = document.querySelectorAll('[name="bonne-réponse"]');
			var bonneReponse = "";

			if (document.getElementById(clicked_id).textContent === propositions[4*(id-1)]) 
					{document.getElementById(clicked_id).style.backgroundColor = "#45C49C";
					document.getElementById(clicked_id).style.boxShadow="5px 5px 10px";}
			

			else {
				if (EltListe.length <= 1 )
					{
						bonneReponse = EltListe[0].id;
					}

				else 
					{
					var Elt0 = EltListe[0].getAttribute('id');
					var Elt1 = EltListe[1].getAttribute('id');
					if (test === Elt0.substr(0,3)) {bonneReponse = Elt0;}
					else {bonneReponse = Elt1;}
					}
				document.getElementById(clicked_id).style.backgroundColor = "#FF776B";
				document.getElementById(clicked_id).style.boxShadow="5px 5px 10px";
				document.getElementById(bonneReponse).style.boxShadow="5px 5px 10px";
				document.getElementById(bonneReponse).style.backgroundColor = "#45C49C";

			}
		}		
