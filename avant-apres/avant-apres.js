var question = [
	"Je me barre",
	"Ça va ?",
	"Salut",
	"Tu sais si Juliette va venir ? (Même personne que 'Ça va ?')",
	"Non je ne sais pas",
	"Marie, elle est où Marie ?",
	"Je ne sais pas, elle m'a dit qu'elle venait",
	"C'est de moi que tu parles Ducon ?",
	"T'es là depuis combien de temps ?"]; 

document.getElementById("question_1").textContent = question[0];
document.getElementById("question_2").textContent = question[1];
document.getElementById("question_3").textContent = question[2];
document.getElementById("question_4").textContent = question[3];
document.getElementById("question_5").textContent = question[4];
document.getElementById("question_6").textContent = question[5];
document.getElementById("question_7").textContent = question[6];
document.getElementById("question_8").textContent = question[7];


var reponse = [
	"Ludo ",
	"Antoine",
	"Véronique",
	"Antoine",
	"Max",
	"Éric",
	"Vincent",
	"Marie",
	"Isabelle"]; 

function Afficher_reponse() {
	document.getElementById("reponse_1").textContent = reponse[0];
	document.getElementById("reponse_2").textContent = reponse[1];
	document.getElementById("reponse_3").textContent = reponse[2];
	document.getElementById("reponse_4").textContent = reponse[3];
	document.getElementById("reponse_5").textContent = reponse[4];
	document.getElementById("reponse_6").textContent = reponse[5];
	document.getElementById("reponse_7").textContent = reponse[6];
	document.getElementById("reponse_8").textContent = reponse[7];

}
;