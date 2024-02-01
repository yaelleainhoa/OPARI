manches = [
	"", // 0
	"https://fr.wikipedia.org/wiki/Saison_NBA_2022-2023#Par_division", // 1
	"https://fr.wikipedia.org/wiki/Saison_NBA_2022-2023#Par_division", // 2
	"https://fr.wikipedia.org/wiki/Saison_NBA_2022-2023#Par_division", // 3
	"https://fr.wikipedia.org/wiki/Saison_NBA_2022-2023", // 4
	"https://fr.wikipedia.org/wiki/Saison_NBA_2022-2023#Par_division", // 5
	"https://fr.wikipedia.org/wiki/", // 6
	"https://fr.wikipedia.org/wiki/Saison_NBA_2022-2023#Par_division", // 7
	"https://fr.wikipedia.org/wiki/Saison_NBA_2022-2023#Par_division" // 8

]

films = []
let manchesNb = 10

mancheActuelle = 0

for(let i = 1; i < manchesNb + 1 ; i++)
	{
		this.document.getElementById("manche-select").innerHTML += '<option value='+i + '> Manche ' + String(i) + "</option>"
	}

	document.getElementById("manche-select").addEventListener 
	("change", function() 
		{
		var selectedValue = document.getElementById("manche-select").value;
		console.log("selected : "+selectedValue)
		mancheActuelle = selectedValue
		
		}
	)

	
	function ouvrir_jeu() {
		console.log(mancheActuelle)
		window.open(manches[mancheActuelle], "_blank") ;

	}