var theme = [
	"L'intrus est le joueur de l'effectif actuel de l'Athletic Club qui n'est pas né en Biscaye.",
	"L'intrus est le joueur de l'effectif actuel de l'Athletic Club qui est né en Navarre.",
	"L'intrus est la course que Miguel Induráin n'a jamais gagnée.",
	"L'intrus est la phrase qui n'est pas présente dans l'hymne de l'Athletic."
	]

var manche = [
	/* Première manche */ 
	"Aitor Paredes", 
	"Asier Villalibre", 
	"Peru Nolaskoain", 
	"Imanol García de Albéniz", 
	"Iñaki Williams", 
	"Iñigo Lekue", 
	"Mikel Jauregizar", 
	"Yeray Álvarez", 
	
	/* Deuxième manche */
	"Beñat Prados", 
	"Dani García",
	"Dani Vivian", 
	"Gorka Guruzeta", 
	"Iñigo Ruiz de Galarreta", 
	"Julen Agirrezabala", 
	"Malcom Adu Ares", 
	"Mikel Vesga", 
	
	
	/* Troisième manche */
	"Clásica San Sebastián",
	"Critérium del Dauphiné",
	"Giro de Italia",
	"Juegos Olimpicos",
	"París-Niza",
	"Tour de France",
	"Volta a Cataluña",
	"Vuelta al País Vasco",

	/* Quatrième manche */
	"Maite zaitu erriak",
	"Gaztedi gorri-zuria",
	"Euskalerriaren erakusgarria",
	"Zu zara nagusia",
	"Neuria izango zen",
	"Aurrera gure gaztiak",
	"Aupa mutillak",
	"Gora beti Euskalerria",]

var infos = [
	/* Première manche */
	" - Bilbao",
	" - Guernica y Luno",
	" - Zumaya",
	" - Abanto y Ciérvana",
	" - Bilbao",
	" - Bilbao",
	" - Bermeo",
	" - Baracaldo",
	/* Deuxième manche */
	" - Pamplona",
	" - Zumárraga",
	" - Vitoria",
	" - Donostia" ,
	" - Éibar",
	" - Donostia",
	" - Bilbao",
	" - Vitoria",
	/* Troisième manche */
	" - En 1990",
	" - En 1995 & 1996",
	" - En 1992 & 1993",
	" - En 1996",
	" - En 1989 & 1990",
	" - En 1991, 1992, 1993, 1994 & 1995",
	" - En 1988",
	" - 22.º en 1986, 3.º en 1990 & 54.º en 1993",

	/* Quatrième manche */
	" - Te quiere el pueblo ",
	" - La juventud rojiblanca",
	" - Representa a Euskal Herria",
	" - Eres el mejor",
	" - Hegoak (seria mio)",
	" - Aurrera gure gaztiak",
	" - Adelante, jóvenes",
	" - Siempre defenderemos Euskal Herria",
	]

var incorrect = [
	2,
	0,
	7,
	4]

var id  ="";

var nbrManche = "";

function selection_manche(clicked_manche) {
	nbrManche = clicked_manche;
	id = clicked_manche.substr(6, 1); 
	document.getElementById("nom_manche").textContent = theme[id];
	var j = 8 * id;
	for (var i = 0 ; i < 8 ; i++)
		{
			document.getElementById(i).style.backgroundColor = "#EFF4E6";
			document.getElementById(i).textContent = manche[j + i];
		}
	nbrManche = parseInt(id, 4);
}

function correct(clicked_id) 
{
	var j = 8 * nbrManche;
	clicked_id = parseInt(clicked_id, 10);
	var Elt = document.getElementById(clicked_id);
	
	if (clicked_id === incorrect[nbrManche])
		{
		 	Elt.style.backgroundColor = "#DE8273";
			Elt.style.width = "500px";
		}

	else
		{
		 	Elt.style.backgroundColor = "#A7BD9F";
			Elt.style.width = "500px";
		}

		document.getElementById(clicked_id).textContent = manche[j + clicked_id] + infos[j + clicked_id];
	
}