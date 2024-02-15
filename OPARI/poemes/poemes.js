images  = [
	"../jeu_poemes/h.png", //0
	"../jeu_poemes/m.png", //1
	"../jeu_poemes/p.png", //2
	"../jeu_poemes/j.png", //3
	"../jeu_poemes/f.png", //4
	"../jeu_poemes/n.png", //5
	"../jeu_poemes/l.png", //6
	"../jeu_poemes/i.png", //7
	"../jeu_poemes/g.png", //8
	"../jeu_poemes/k.png", //9

]

reponses = [
	"f(x) = 256 ⋅ x^9 - 576 ⋅ x^7 + 432 ⋅ x^5 - 120 ⋅ x^3 + 9 ⋅ x", // 0
	"f(x) = sin [cos^2 (x)]", // 1
	"f(x) = cos(x) - sin (x)", // 2 
	"f(x) = cos [sin^2 (x)]", // 3
	"f(x) = sin [cos (x)]", // 4
	"f(x) = cos (x^2) - sin (x)", // 5
	"f(x) = cos [sin (x)]", // 6
	"f(x) = cos (x) + sin (x)", // 7
	"f(x) = sin (x^2) - cos (x)", // 8
	"f(x) = cos (x) ⋅ sin (x)", //9

]

bonnes_reponses = [
	"f(x) = cos (x) + sin (x)", //0
	"f(x) = 256 ⋅ x^9 - 576 ⋅ x^7 + 432 ⋅ x^5 - 120 ⋅ x^3 + 9 ⋅ x", //1
	"f(x) = cos [sin^2 (x)]", //2
	"f(x) = cos (x) ⋅ sin (x)", //3
	"f(x) = sin [cos (x)]", //4
	"f(x) = sin [cos^2 (x)]", //5
	"f(x) = cos (x^2) - sin (x)", //6
	"f(x) = cos(x) - sin (x)", //7
	"f(x) = cos [sin (x)]", //8
	"f(x) = sin (x^2) - cos (x)" //9
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

function setFunctionsAndCurves(){
	var curvesArea = document.getElementById("curves");
	var functionsArea = document.getElementById("functions");
	for (let i = 0 ; i < reponses.length ; i++)
	{
		var curveArea = document.createElement("div");
		var curveImg = document.createElement("img");
		curveImg.classList.add("image");
		curveImg.setAttribute("src", images[i]);
		curveImg.addEventListener("click", function() {
			if (this.requestFullscreen) {
			  this.requestFullscreen();
			} else if (this.msRequestFullscreen) {
			  this.msRequestFullscreen();
			} else if (this.mozRequestFullScreen) {
			  this.mozRequestFullScreen();
			} else if (this.webkitRequestFullscreen) {
			  this.webkitRequestFullscreen();
			}
		  });
		curveArea.setAttribute("id", "prop"+i);
		curveArea.setAttribute("ondrop", "dragDrop(event)");
		curveArea.setAttribute("ondragover", "allowDrop(event)");
		curveArea.classList.add("curve");
		curveArea.appendChild(curveImg);

		curvesArea.appendChild(curveArea);

		var functionArea = document.createElement("div");
		functionArea.innerText = reponses[i];
		functionArea.setAttribute("id","drag"+i);
		functionArea.setAttribute("ondrop","dragDrop(event)");
		functionArea.setAttribute("ondragover","allowDrop(event)");
		functionArea.setAttribute("draggable","true");
		functionArea.setAttribute("ondragstart","dragStart(event)");
		functionArea.classList.add("function");
		functionArea.classList.add("draggable");

		functionsArea.appendChild(functionArea);
	}
}

setFunctionsAndCurves();

var reponse_select = ""
var image_selectionne = 10
var indice = 0

function allowDrop(ev) {
	ev.preventDefault();
}
function dragStart(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}

function dragDrop(ev) {
	ev.preventDefault();

	reponse_select = ev.target.id
	indice = reponse_select.substr(-1)

	if(reponse_select)
	{
		var data = ev.dataTransfer.getData("text");
		ev.target.appendChild(document.getElementById(data));
		ev.target.style.paddingBottom = "5px";
	}

	function_selected = document.getElementById(data).innerText;
	score[indice] = function_selected
	
}


function resultat_final()
{
	var carreau = ""
	for (let i = 0 ; i < reponses.length ; i++) 
	{
		if (bonnes_reponses[i] == score[i]) 
		{
			carreau = "prop" + i.toString()
			document.getElementById(carreau).style.backgroundColor = "#C6E5BA"
		}

		else 
		{
			carreau = "prop" + i.toString()
			document.getElementById(carreau).style.backgroundColor = "#FF6961"

			var goodAnswer = document.createElement("div");
			goodAnswer.innerText = bonnes_reponses[i];
			goodAnswer.classList.add("function");
			goodAnswer.style.color="white";
			document.getElementById(carreau).appendChild(goodAnswer);
		}
		
	}
}