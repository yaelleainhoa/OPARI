document.getElementById("masquer").style.display = "none";

var liste_questions = ["Case 0",
	"Qui finit torse nu bourré après la soirée ?",
	"Quel film propose de regarder Eric à Marie ?",
	"Comment s'appelle son amant ?",
	"Comment s'appelle sa copine ?",
	"Qui fait du saut en parachute ?",
	"Le crabe n'est pas pour Sabine mais pour ...?",
	"Qui veut payer l'addition absolument ?",
	"Qu'est-ce qu'a toujours rêvé de faire Véro chez elle ?",
	"Pourquoi Max porte un pantalon qui n'est pas le sien ?",
	"Qui se tiennent la main sous la table ?",
	"Que fait Eric après le restaurant ?",
	"Quelle est la couleur du peignoir de son amant emprunté à son ex mari ?",
	"Qui s'embrassent dans le lit après la soirée ?",
	"Qui est le premier à voir la TS de Max ?",
	"Quel est le numéro de la table ?",
	"Que se serait-il passé si c'était Marré basse lors de la TS de Max?",
	"Quelle affaire de Max a été un gros échec ?",
	"Qui va toquer à la porte d'une chambre avant d'aller dormir ?",
	"Quelle est la suite de la phrase de Max en réponse à Sabine : Heuresement que tu étais là... ?",
	"Quelle est la suite de la phrase d'Antoine en réponse à Max : Être ami, c'est pas être ami tout le temps, c'est être ami... ?",
	"Qui propose à la nounou de rentrer du restau en voiture en premier ?",
	"Que dit Alex avant de tomber à Vélo ?",

	



	
	]
;


var liste_reponses = ["Case 0",
	"Max",
	"Love Actually",
	"Alain",
	"Géraldine",
	"Marie, Max et Antoine",
	"Éric",
	"Max",
	"Casser un verre",
	"Il s'est fait pipi dessus",
	"Éric & Marie",
	"Aller voir Véronique",
	"Bleu",
	"Éric & Marie",
	"Le père de Canet",
	"7",
	"Rien, la corde était trop longue",
	"L'affaire du Trocadéro",
	"Vincent",
	"Sinon je saurais pas comment j'ai tenu",
	"Quand il faut",
	
	"Sabine",
	"Ah merde!",

	













	]
;

function myFunction(clicked_id) {
	console.log(clicked_id)
	var Elt = document.getElementById("question");
	Elt.textContent = liste_questions[clicked_id];
	document.getElementById(clicked_id).id = "id" + clicked_id;
	document.getElementById("masquer").textContent=clicked_id;
	document.getElementById("reponse").textContent= "";
}

function Afficher_reponse(clicked_id) {
	var id_reponse = document.getElementById("masquer").textContent;
	var Elt = document.getElementById("reponse");
	Elt.textContent = liste_reponses[id_reponse];

}