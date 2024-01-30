let wikipedia_texts = 
["44 Max Cantara, riche propriétaire d'un hôtel-restaurant, et sa femme Véro invitent chaque année leurs amis dans leur maison au Cap Ferret pour célébrer l’anniversaire de leur copain Antoine et le début des vacances d'été. Mais cette année, avant qu'ils ne partent de Paris, leur ami Ludo est victime d'un grave accident de la route et se trouve entre la vie et la mort, à la suite d'une soirée arrosée au Baron. Malgré cet événement, le groupe d'amis décide de partir en vacances. Leurs relations, leurs convictions et leur sens de la culpabilité vont être rudement mis à l’épreuve. Véronique, sa femme, part en vacances avec plaisir, heureuse de revoir tous leurs copains, mais Max lui gâche la vie. ",
"Guillaume Canet est un acteur, réalisateur, scénariste et producteur de cinéma français, né le 10 avril 1973 à Boulogne-Billancourt. Il commence sa carrière au théâtre, à la télévision, avant d'aborder son domaine de prédilection, le cinéma. Son premier film à succès, La Plage (2000), le fait connaître face à Leonardo DiCaprio. Dans les années 2000, il se fait également remarquer pour Jeux d'enfants (2003) ou Joyeux Noël (2005). Il poursuit en parallèle une carrière de réalisateur : dès 1996, il se tourne vers l'écriture et la réalisation de courts métrages puis passe au long métrage avec Mon idole en 2002, avant de connaître la consécration en 2006 avec Ne le dis à personne pour lequel il remporte notamment le César du meilleur réalisateur. ",
"aMaya trop belle j'ai pas raison la team"
];

var wordsToGuess = [];
var justGuessedWordsIndexes = []
var currentResumeIndex = 0;


function setGames()
{
	for(let i = 0; i<wikipedia_texts.length; i++)
	{
		var resume = document.createElement("div");
		resume.id = "resume"+String(i);
		resume.classList.add("invisible")
		var currentWordsToGuess = splitSentence(wikipedia_texts[i]);
		document.getElementById("resumes").appendChild(resume);
		wordsToGuess.push(currentWordsToGuess);
		justGuessedWordsIndexes.push([]);

		var currentSelect = document.createElement("option")
		currentSelect.value = i;
		currentSelect.text = "Manche "+String(i);
		document.getElementById("select").appendChild(currentSelect)
		createHiddenItems(currentWordsToGuess,i);
	}
	document.getElementById("resume"+String(currentResumeIndex)).classList.remove("invisible");
}

function changeResume(index)
{
	currentResumeIndex = index;
	for(let i = 0; i<wikipedia_texts.length; i++)
	{
		document.getElementById("resume"+String(i)).classList.add("invisible");
	}
	document.getElementById("resume"+String(currentResumeIndex)).classList.remove("invisible");
}

function splitSentence(sentence) {
    var pattern = /([\wÀ-ÖØ-öø-ÿ]+|[ ,])/gu;

    var result = sentence.split(pattern).filter(function (element) {
        return element !== ''; 
    });

    return result;
}

function findWordIndices(array, word) {
	var indices = [];
	for (var i = 0; i < array.length; i++) {
	  if (array[i].toLowerCase() === word) {
		console.log(word, array[i], i)
		indices.push(i);
	  }
	}
	return indices;
  }

function isWord(elt)
{
	var wordPattern = /[\wÀ-ÖØ-öø-ÿ]+/;
	return wordPattern.test(elt);
}

function createHiddenItems(separateWords, resumeNb)
{
	for(var i = 0; i < separateWords.length ; i++)
	{
		var span = document.createElement("span");
		var word = document.createTextNode(separateWords[i]);
		span.appendChild(word);
		document.getElementById("resume"+String(resumeNb)).appendChild(span);
		if(isWord(separateWords[i]))
		{
			span.classList.add("inconnu");
		}
		else
		{
			span.classList.add("connu");
		}
		span.classList.add(i);
	}
}

window.addEventListener("keydown", function(e) {
	var touche = e.keyCode;
	var mot = document.getElementById("prop").value;
	if (touche === 13) {verifier(mot, wordsToGuess[currentResumeIndex]); document.getElementById("prop").value ="";}
}, true);

document.getElementById("select").addEventListener("change", function(e)
{
	var selectedValue = document.getElementById("select").value;
	changeResume(selectedValue)
});

function verifier(input, text) 
{
	console.log(input)
	for(let i = 0; i < justGuessedWordsIndexes[currentResumeIndex].length; i++)
	{
		document.getElementsByClassName(String(justGuessedWordsIndexes[currentResumeIndex][i]))[currentResumeIndex].classList.remove("justGuessed")
	}

	var wordToTest = input.toLowerCase();
	justGuessedWordsIndexes[currentResumeIndex] = findWordIndices(text, wordToTest);
	console.log(justGuessedWordsIndexes[currentResumeIndex])

	for(let i = 0; i < justGuessedWordsIndexes[currentResumeIndex].length; i++)
	{
		document.getElementsByClassName(String(justGuessedWordsIndexes[currentResumeIndex][i]))[currentResumeIndex].classList.replace("inconnu", "justGuessed")
	}

}



function devoiler_reponse() 
{
	var spanElements =document.querySelectorAll('#resume'+String(currentResumeIndex)+' .inconnu');

	Array.from(spanElements).forEach(function(elt)
	{
		elt.classList.remove("inconnu")
	})


	
}

setGames();