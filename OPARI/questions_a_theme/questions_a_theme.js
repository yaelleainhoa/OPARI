var liste_questions = ["Case 0",
	"Quelle est la province espagnole qui représente la plus grande superficie en Espagne ?",
	"Cite 4 joueurs du cinq majeur de Denver Nuggets cette année.",
	"Comment s'appelle le film Very Bad Trip aux Etats-Unis, en Espagne et en Amérique Latine ?",
	"Quelle est la province espagnole la plus dense ?",
	"Cite 5 joueurs de l'effectif de l'équipe de France de handball champion d'Europe cette année.",
	"Como se llama la pelicula Grease (España, Argentina, Perú y Uruguay) o Grease Brillantina (Chile, Colombia) en el resto de Hispanoamérica ?",
	"Sur l'escudo de quelle équipe de Liga actuelle, peut-on trouver 7 étoiles ?",
	"La denominación de origen protegida Piquillo de Lodosa está constituida por los terrenos ubicados en ocho municipios situados en la 'Ribera Baja' Navarra. Peux-tu en citer une ?",
	"Sur combien d'escudos d'équipes de Liga actuelle, peut-on voir une couronne ?",
	"El queso Roncal es un queso hecho con leche cruda de oveja que se realiza en el valle de Roncal a orillas del (que río?) en el Pirineo navarro en España.",
	"Cite 2 joueuses de l'effectif actuel de l'ESBVA.",
	"Comment s'appelle le film Bienvenue chez les Ch'tis en Argentine ?",
	"Dans quelle province, l'âge moyen est le plus élevé ?",
	"Cite 4 joueurs de l'effectif champion d'Espagne 2020 de Baskonia.",
	"Comment s'appelle le film Dents de la mer en Espagne ?",
	"Sur l'escudo de Séville, qui sont les personnages représentés ?",
	"La cuajada tradicionalmente se elaboraba en un recipiente de cerámica o barro llamado ?",
	"Como se llama la variante de Gilda en Navarra ?",
	"Sur combien d'escudos d'équipes de la Liga actuelle, peut-on voir un animal ?",
	"Dans quelle province, l'âge moyen est le plus bas ?",

	
	]
;


var liste_reponses = ["Case 0", 
	"Badajoz (4.3%)",
	"Jamal Murray, KCP, Michael Porter Junior, Aaron Gordon & Nikola Jokic.",
	"The Hangover (EEUU), Resacón (España) & ¿Qué Paso Ayer? (Hispanoamérica)",
	"Madrid - 850.15 hab/km2",
	"Samir BELLAHCENE, Charles BOZINGER, Rémi DESBONNET, Yanis LENNE, Nedim REMILI, Elohimm PRANDI, Melvyn RICHARDSON, Dika MEM, Nicolas TOURNAT, Nikola KARABATIC, Kentin MAHE, Timothey N'GUESSAN, Luka KARABATIC, Ludovic FABREGAS, Hugo DESCAT, Valentin PORTE, Benoît KOUNKOUD, Dylan NAHI & Karl KONAN.",
	"Vaselina",
	"Atlético de Madrid",
	"Andosilla, Azagra, Carear, Lerín, Lodosa, Mendavia, San Adrián y Sartaguda.",
	"9 - Real Madrid, Real Sociedad, Villareal, Betis, Osasuna, Mallorca, Gerona, Rayo Vallecano, Cadiz & Las Palmas.",
	"El río Esca",
	"Caroline HERIAUD, Shavonte ZELLOUS, Kamaiah SMALLS, Maxuelle LISOWA MBAKA, Betty MANUNGA, Charlotte ABRAHAM, Elodie LUTBERT, Claie CAUSEUR, Janelle SALAUN, Kennedy BURKE, Maïa HIRSCH, Aminata GUEYE & Kariata DIABY.",
	"Bienvenidos al país de la locura",
	"Zamora (51,65)",
	"Lucas VILDOZA, Pierria HENRY, Semaj CHRISTAN, Ilimane DIOP, Zoran DRAGIC, Michael ERIC, Youssoupha FALL, Sergi GARCIA, Patricio GARINO, Miguel GONZALEZ, Jayson GRANGER, Matt JANNING, Arturs KURUCS, Lautaro LOPEZ, Achille POLONARA, Tadas SEDEKERSKIS, Tornike SHENGELIA & Savon SHIELDS.",
	"Tiburón",
	"Los tres reyes parece.",
	"Kaiku",
	"Pajarico",
	"5 - Atlético de Madrid (Ours), Osasuna (Lion), Cadiz (Lion), Valencia (Chauve souris) & Las Palmas (Lion).",
	"Melilla (36,51)",


	]
;
var id_question  = 0
function myFunction(clicked_id) {
	console.log(clicked_id)
	var Elt = document.getElementById("question");
	Elt.textContent = liste_questions[clicked_id];
	document.getElementById(clicked_id).id = "id" + clicked_id;
	id_question = clicked_id;
	document.getElementById("reponse").textContent= "";
}

function Afficher_reponse(clicked_id) {
	var Elt = document.getElementById("reponse");
	Elt.textContent = liste_reponses[id_question];

}