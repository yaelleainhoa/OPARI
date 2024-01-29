var theme = [
	"Qui n'est pas présent dans le jeu des post its ?",
	"Quelle chanson n'est pas présente dans Nous finirons ensemble ?",
	"Quelle phrase ne dit pas Canet dans le Making Of des Petits Mouchoirs?",
	"Quelle phrase n'a jamais dit Max dans son jardin ?"
	]

var manche = [
	/* Première manche */
	"Bossu de Notre Dame",
	"Brad Pitt",
	"Brigitte Lahaie",
	"Donald Trump",
	"Joe le taxi",
	"Marine Le Pen",
	"Sue Ellen",
	"Tour Montparnasse",
	/* Deuxième manche */
	"Girls just want to have fun / Cyndi Lauper",
	"Talk to me / Yodélice",
	"Toop Toop / Cassius",
	"It's all over now, baby blue / Them",
	"Not The Girl You Think You Are / Crowded House",
	"Pennies From Heaven / Louis Prima",
	"99 luftballons / Nena",
	"Sauvetage Nino / M",
	/* Troisième manche */
	"Il était depuis très longtemps dans ma tête.",
	"J'avais envie qu'ils la connaissent cette maison, qu'ils ne la décrouvrent pas.",
	"J'avais envie de montrer cette génération de mec enfant, qui sont les résultats de l'émancipation de la femme",
	"Forcément entre les prises, l'ambiance elle s'arrête pas.",
	"Très rapidement à l'écrire, en une semaine et demie (...) j'avoue tout le film.",
	"Ça fait très longtemps que j'étais fan de films de potes.",
	"C'est super construit, tu déplaces un truc c'est pas le même effet.",
	"(En parlant de Max) il est lâche par moment mais en même temps c'est un mec responsable.",
	/* Quatrième manche */
	"Combien de fois je vous ai dit de ranger la tondeuse à gazon ?",
	"Je la connais ma pelouse.",
	"Vous vous foutez de ma gueule.",
	"Vous pourriez en rien foutre de l'année, je ne le saurais même pas.",
	"Je me demande pourquoi je vous paye.",
	"Ça vous coûtait quoi de venir tondre avant ?",
	"Max Cantara à l'appareil",
	"Je viens 2 mois dans l'année.",]

var infos = [
	/* Première manche */
	" - BOOOM",
	" - Vincent",
	" - Sabine",
	" - Max",
	" - Antoine",
	" - Eric",
	" - Marie",
	" - Isa",
	/* Deuxième manche */
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	/* Troisième manche */
	"Jean-Claude Cotillard",
	"Marion Cotillard",
	"Jean Dujardin",
	"Gwendoline Hamon",
	"Benoît Magimel",
	"C'est Eliott Boulay",
	"Yodelice",
	"François Cluzet",
	/* Quatrième manche */
	" - C'est bien évidemment le tuyau d'arrosage qui n'est pas rangé !",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	]

var incorrect = [
	0,
	1,
	6,
	0]

var id  ="";

var nbrManche = "";

function selection_manche(clicked_manche) {
	nbrManche = clicked_manche;
	id = clicked_manche.substr(6, 1); 
	document.getElementById("nom_manche").textContent = theme[id];
	var j = 8 * id;
	for (var i = 0 ; i < 8 ; i++)
		{
			document.getElementById(i).style.backgroundColor = "transparent";
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

		document.getElementById(clicked_id).textContent += infos[j + clicked_id];
	
}