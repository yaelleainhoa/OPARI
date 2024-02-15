var questions = [
	"",
	"Quel était le numéro d'Iker Muniain lors de la finale d'Europa League ?",
	"À combien s'élève la série en cours de défaites en finale de coupe du roi de l'Athletic Club ?",
	"Qui joue Jimmy Conway dans les affranchis ?",
	"Qui tue Christopher Moltisanti dans les Sopranos ?",
	"Marvel - Combien y a-t-il de pierres d'infini ?",
	"Marvel - Quelle pierre possède Dr. Strange ?",
	"Marvel - Qui a tué Iron Man ?",
	"Marvel - Avec quoi se bat Thor (2 armes) ?",
	"Marvel - Quel héros a survécu au claquement de doigts de Thanos et revient 2 ans plus tard sans avoir vielli ?",
	"Séries/Films - Dans Peaky Blinders, combien Thomas Shelby a-t-il de frères et soeurs ?",
	"Séries/Films - Dans Mystère à Venise qui a tué la voyante ?",
	"Séries/Films - Dans Coco, comment est mort le père de Coco ?",
	"Séries/Films - Comment Marin voulait appeler ses enfant avant qu'ils ne meurent ?",
	"Séries/Films - Quelle capitale est le nom d'un personnage dans Casa de Papel et dans Mentaliste ?",
	"Handball/Aitor - Au bout de combien de 2minutes la table doit prévenir l'arbitre pour faire sortir son fils ?",
	"Handball/Aitor - Quand Aitor est tombé sans pouvoir se relever car il avait l'Osgood Schlatter depuis 1 an et demi, qu'a dit son père ?",
	"Handball/Aitor - A quel poste, Aitor n'a jamais joué en match ?",
	"Very Bad Trip - Dans Very Bad Trip 1, quel personnage s'apprête à se marier ?",
	"Very Bad Trip - Dans Very Bad Trip 2, pour quel pays s'envolent les 4 amis ?",
	"Very Bad Trip - Dans Very Bad Trip 3, Alan rentre chez lui en prenant l'autoroute après avoir acheté une ... ?",
	];

var propositions = [
	/* Réponse de la question 1 -- 0 -> 3*/
	"19",
	"27",
	"10",
	"30",
	/* Réponse de la question 2 -- 4 -> 7*/
	"6",
	"4",
	"3",
	"10",
	/* Réponse de la question 3 -- 8 -> 11*/
	"Robert De Niro ",
	"Alfredo Pacino",
	"Ray Liotta ",
	"Henry Hill",
	/* Réponse de la question 4 -- 12 -> 15*/
	"Tony Soprano",
	"Paulie Gualtieri",
	"Silvio Dante",
	"Salvatore « Big Pussy » Bonpensiero ",	
	/* Réponse de la question 5 -- 16 -> 19*/
	"6",
	"10",
	"5",
	"7",		
	/* Réponse de la question 6 -- 20 -> 23*/
	"Temps",
	"Ame",
	"Réalité",
	"Espace",		
	/* Réponse de la question 7 -- 24 -> 27*/
	"Tony Stark",
	"Thanos",
	"Dr. Strange",
	"Peter Parker",		
	/* Réponse de la question 16 -- 60 -> 63*/
	"Marteau & Hache",
	"Marteau & Bouclier",
	"Marteau & Pistolet",
	"Marteau & Epée",	
	/* Réponse de la question 17 -- 64 -> 67*/
	"Antman",
	"Captain Marvel",
	"Captain America",
	"Iron Man",
	/* Réponse de la question 8 -- 28 -> 31*/
	"4",
	"1",
	"2",
	"3",			
	/* Réponse de la question 9 -- 32 -> 35*/
	"La mère de la victime précédente",
	"L'autrice",
	"Le policier",
	"Le médecin",	
	/* Réponse de la question 10 -- 36 -> 39*/
	"Empoisonné par son ami",
	"Mal digeré un chorizo",
	"Suicide",
	"Il n'est pas mort",	
	/* Réponse de la question 11 -- 40 -> 43*/
	"Marin Jr",
	"Némo",
	"Sorry",
	"Martin",	
	/* Réponse de la question 12 -- 44 -> 47*/
	"Lisbonne",
	"Bogota",
	"Berlin",
	"Paris",			
	/* Réponse de la question 13 -- 48 -> 51*/
	"3",
	"5",
	"2",
	"4",		
	/* Réponse de la question 14 -- 52 -> 55*/
	"Lève toi flemmard !",
	"Tu as mal où ?",
	"Est-ce que tu vas bien ?",
	"Bien joué !",
	/* Réponse de la question 15 -- 56 -> 59*/
	"Gardien",
	"Demi centre",
	"Ailier",
	"Arrière",							
	/* Réponse de la question 18 -- 68 -> 71*/
	"Doug",
	"Alan",
	"Stu",
	"Phil",			
	/* Réponse de la question 19 -- 72 -> 75*/
	"Thaïlande",
	"Mexique",
	"Japon",
	"Brésil",			
	/* réponse de la question 20 -- 76 -> 79*/
	"Girafe",
	"Voiture",
	"Bague",
	"Maison",		

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
