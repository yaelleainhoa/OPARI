liste_propositions = [
	"Sélection de la manche",
	"Choix 1",
	"Choix 2",
	"Choix 3",
]


for (let i = 0; i < liste_propositions.length ; i++)
	{
		this.document.getElementById("manche-select").innerHTML += '<option value="manche_' + i + '">' + liste_propositions[i] + "</option>"
	}

document.getElementById("manche-select").addEventListener("change", function() {
	var selectedValue = document.getElementById("manche-select").value;
	console.log(selectedValue)
}
)