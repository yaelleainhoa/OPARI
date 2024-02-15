var equipe1 = [
	"Enrique Maya Miranda",
	"Javier Chourraut Burguete",
	"Joseba Asirón Sáez",
	"Julián Balduz Calvo",
	"Yolanda Barcina Angumo",
	];



var dates1 = [
	"2",
	"4",
	"1",
	"5",
	"3",
	];

var equipe2 = [
	"Bilbao",
	"Lille",
	"Pamplona",
	"San Sebastián",
	"Villeneuve d'Ascq",
	];

var dates2 = [
	"5",
	"4",
	"3",
	"2",
	"1",
	];

var equipe3 = [
	"Bayonne - Stade Jean Dauger",
	"Bilbao - San Mames",
	"Mugiro - Frontón",
	"San Sebastián - Anoeta",
	"Vitoria - Buesa Arena",
	];

var dates3 = [
	"3",
	"5",
	"1",
	"2",
	"4",
	];

var equipe4 = [
	"ASM Clermont",
	"Athletic Club",
	"LOSC",
	"RC Lens",
	"Real Sociedad",
	];

var dates4 = [
	"1",
	"5",
	"4",
	"2",
	"3",
	];

for (var i = 0; i < 5; i++) {
	var id = "perso1" + i;
	document.getElementById(id).textContent = equipe1[i];
	var id = "perso2" + i;
	document.getElementById(id).textContent = equipe2[i];
	var id = "perso3" + i;
	document.getElementById(id).textContent = equipe3[i];
	var id = "perso4" + i;
	document.getElementById(id).textContent = equipe4[i];

}

function Valider1() {
	for (var i = 0; i < equipe1.length; i++) {
		var Elt = "res1" + i;
		var idElt = "age1" + i;
		if (document.getElementById(Elt).value === dates1[i]) {document.getElementById(Elt).style.backgroundColor = "#50D274";}
		else {document.getElementById(Elt).style.backgroundColor = "#E33A2F";};
		document.getElementById(idElt).textContent = dates1[i];

		
}}
;

function Valider2() {
	for (var i = 0; i < equipe2.length; i++) {
		var Elt = "res2" + i;
		var idElt = "age2" + i;
		if (document.getElementById(Elt).value === dates2[i]) {document.getElementById(Elt).style.backgroundColor = "#50D274";}
		else {document.getElementById(Elt).style.backgroundColor = "#E33A2F";}
		document.getElementById(idElt).textContent = dates2[i];

}};



function Valider3() {
	for (var i = 0; i < equipe3.length; i++) {
		var Elt = "res3" + i;
		var idElt = "age3" + i;
		if (document.getElementById(Elt).value === dates3[i]) {document.getElementById(Elt).style.backgroundColor = "#50D274";}
		else {document.getElementById(Elt).style.backgroundColor = "#E33A2F";}
		document.getElementById(idElt).textContent = dates3[i];

}};


function Valider4() {
	for (var i = 0; i < equipe4.length; i++) {
		var Elt = "res4" + i;
		var idElt = "age4" + i;
		if (document.getElementById(Elt).value === dates4[i]) {document.getElementById(Elt).style.backgroundColor = "#50D274";}
		else {document.getElementById(Elt).style.backgroundColor = "#E33A2F";}
		document.getElementById(idElt).textContent = dates4[i];

}};
