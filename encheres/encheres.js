let wikipedia_text = "44 Max Cantara, riche propriétaire d'un hôtel-restaurant, et sa femme Véro invitent chaque année leurs amis dans leur maison au Cap Ferret pour célébrer l’anniversaire de leur copain Antoine et le début des vacances d'été. Mais cette année, avant qu'ils ne partent de Paris, leur ami Ludo est victime d'un grave accident de la route et se trouve entre la vie et la mort, à la suite d'une soirée arrosée au Baron. Malgré cet événement, le groupe d'amis décide de partir en vacances. Leurs relations, leurs convictions et leur sens de la culpabilité vont être rudement mis à l’épreuve. Véronique, sa femme, part en vacances avec plaisir, heureuse de revoir tous leurs copains, mais Max lui gâche la vie. ";
var wordsToGuess = [];

let guessedWordNb = 0;
var justGuessedWordsIndexes = []

/* Titre des manches */
function splitSentence(sentence) {
    // Define a regular expression pattern to capture words and spaces
    var pattern = /([\wÀ-ÖØ-öø-ÿ]+|[ ,])/gu;

    // Use the split method to split the sentence based on the pattern
    var result = sentence.split(pattern).filter(function (element) {
        return element !== ''; // Filter out empty strings from the result
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

function createHiddenItems(separateWords)
{
	for(var i = 0; i < separateWords.length ; i++)
	{
		var span = document.createElement("span");
		var word = document.createTextNode(separateWords[i]);
		span.appendChild(word);
		document.getElementById("resume").appendChild(span);
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

/* Enregistrement du texte entré à la main */

window.addEventListener("keydown", function(e) {
	var touche = e.keyCode;
	var mot = document.getElementById("prop").value;
	if (touche === 13) {verifier(mot, wordsToGuess); document.getElementById("prop").value ="";}
}, true);

	var q = 0
/* Vérification de la présence dans la liste */
function verifier(input, text) 
{
	console.log(input)
	for(let i = 0; i < justGuessedWordsIndexes.length; i++)
	{
		document.getElementsByClassName(String(justGuessedWordsIndexes[i]))[0].classList.remove("justGuessed")
	}

	var wordToTest = input.toLowerCase();
	justGuessedWordsIndexes = findWordIndices(text, wordToTest);
	console.log(justGuessedWordsIndexes)

	for(let i = 0; i < justGuessedWordsIndexes.length; i++)
	{
		document.getElementsByClassName(String(justGuessedWordsIndexes[i]))[0].classList.replace("inconnu", "justGuessed")
	}
	

	document.getElementById("total").textContent = "Vous avez trouvé : " + q + " mots sur " + wordsToGuess.length + " mots"
	document.getElementById("actuel").textContent = "+ " + justGuessedWordsIndexes.length
}



function devoiler_reponse() 
{
	var spanElements = document.getElementsByClassName("inconnu");

	Array.from(spanElements).forEach(function(elt)
	{
		elt.classList.remove("inconnu")
	})


	
}

wordsToGuess = splitSentence(wikipedia_text)
createHiddenItems(wordsToGuess);