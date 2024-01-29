document.getElementById("masquer").style.display = "none";

var liste_questions = [
	"0",
	"Comment s'appelle les petits mouchoirs en Anglais ?",
	"Qui dit à Max Il faut prendre une serviette ?",
	"Quel est le premier truc qui énerve Max en arrivant dans la maison ?",
	"Lors du 1, 2, 3 soleil, comment Max appelle son filleul ?",
	"Quelle est la pièce que détruit Max pour trouver les fouines ?",
	"Comment s'appelle les petits mouchoirs en Espagnol ?",
	"Qui dit 'Je m'en fous je le prends' dans le magasin ?",
	"Quel est le premier message qu'envoie Antoine à son ex ?",
	"Que répond Antoine au message de son ex : Tu as laissé un peu de toi chez moi ?",
	"Quelle est la première personne à qui Antoine parle des textos avec son ex ?",
	"Comment s'appelle Nous finirons ensemble en Anglais ?",
	"Selon Véro, en quoi s'y connaît très bien Jean Louis ? (lorsqu'ils sont en mer)",
	"Quelle est la première phrase que dit Max à la déclaration de Vincent ?",
	"A qui a eu une aventure Max, ne sachant pas que Véro est au courant ?",
	"Pourquoi Antoine part du bar quand il est avec Eric ?",
	"Complétez ces paroles : Bienvenue Jeanne...",
	"Quelle langue parle Jeanne avec sa nounou ?",
	"Comment s'appelle Nous finirons ensemble en Espagnol ?",
	"Qui est le perrain de Jeanne ?",
	"Complète cette phrase : Le plus gris bateau, la plus grosse maison, la carte bleue la plus bleue et ton ....",
	]
;


var liste_reponses = [
	"0",
	"Little White Lies",
	"Marie",
	"La hauteur de la pelouse",
	"Petit tricheur de mes 2",
	"La salle de bain",
	"Pequeñas mentiras sin importancia",
	"Éric",
	"Je comprends tes maux",
	"Je ne sais pas",
	"Eric",
	"Little White Lies 2",
	"En vase",
	"Tu te fous de ma gueule ?",
	"La sœur de Véro",
	"Lorsque la fille dit : Vous avez déjà fait une double ? ",
	"Bienvenue à bord.",
	"Espagnol",
	"Pequeñas mentiras para estar juntos",
	"Jean Louis",
	"Cœur, Max, il est comme les autres il a 2 ventricules.",
	]
;

function myFunction(clicked_id) {
	var Elt = document.getElementById("question");
	Elt.textContent = liste_questions[clicked_id];
	document.getElementById(clicked_id).id = "id" + clicked_id;
	document.getElementById("masquer").textContent=clicked_id;
	document.getElementById("reponse").textContent= "";
}
;

function Afficher_reponse(clicked_id) {
	var id_reponse = document.getElementById("masquer").textContent;
	var Elt = document.getElementById("reponse");
	Elt.textContent = liste_reponses[id_reponse];

}