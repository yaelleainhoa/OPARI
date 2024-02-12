images  = [
	"../jeu_poemes/h.png",
	"../jeu_poemes/m.png",
	"../jeu_poemes/p.png",
	"../jeu_poemes/j.png",
	"../jeu_poemes/f.png",
	"../jeu_poemes/n.png",
	"../jeu_poemes/l.png",
	"../jeu_poemes/i.png",
	"../jeu_poemes/g.png",
	"../jeu_poemes/k.png",

]

reponses = [
	"f(x) = 256 ⋅ x^9 - 576 ⋅ x^7 + 432 ⋅ x^5 - 120 ⋅ x^3 + 9 ⋅ x",
	"f(x) = sin [cos^2 (x)]",
	"f(x) = cos(x) - sin (x)",
	"f(x) = cos [sin^2 (x)]",
	"f(x) = sin [cos (x)]",
	"f(x) = cos (x^2) - sin (x)",
	"f(x) = cos [sin (x)]",
	"f(x) = cos (x) + sin (x)",
	"f(x) = sin (x^2) - cos (x)",
	"f(x) = cos (x) ⋅ sin (x)",

]

bonnes_reponses = [
	"m.png",
	"n.png",
	"i.png",
	"p.png",
	"f.png",
	"l.png",
	"g.png",
	"h.png",
	"k.png",
	"j.png"	

]

score  = [
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",

] 

for (let i = 0 ; i < reponses.length ; i++) {
	var variable = "drag" + i;
	var proposition = "prop" + i;
	document.getElementById(variable).setAttribute("src", images[i])
	this.document.getElementById(proposition).innerText =  reponses[i]
	
}

var valeur_select = ""
var reponse_select = ""
var image_selectionne = 10
var indice = 0

function allowDrop(ev) {
	ev.preventDefault();
}
function dragStart(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
	valeur_select = ev.target.id
	image_selectionne = ev.target.src.substr(-5)
	

}
function dragDrop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
	reponse_select = ev.target.id
	indice = reponse_select.substr(-1)
	score[indice] = image_selectionne


}
var carreau = ""

function resultat_final()
{
	for (let i = 0 ; i < reponses.length ; i++) 
	{
		if (bonnes_reponses[i] == score [i]) 
		{
			carreau = "prop" + i.toString()
			document.getElementById(carreau).style.backgroundColor = "#C6E5BA"
		}

		else 
		{
			carreau = "prop" + i.toString()
			document.getElementById(carreau).style.backgroundColor = "#FF6961"
		}
		
	}
}