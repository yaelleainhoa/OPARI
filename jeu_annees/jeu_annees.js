

manches = []
let manchesNb = 10
for(let i =0; i<manchesNb; i++)
{
	let currentManche = [];
	for(let j = 0; j < 6; j++)
	{
		currentManche.push("../series/manche"+String(i+1)+"-indice"+String(j+1)+".jpg")
	}
	manches.push(currentManche)
}


var mancheActuelle = 0

this.document.getElementById("manche-select").innerHTML += '<option value=0>Choisir sa manche</option>'

for(let i = 1; i < manchesNb + 1 ; i++)
	{
		this.document.getElementById("manche-select").innerHTML += '<option value='+i + '> Manche ' + String(i) + "</option>"
	}

document.getElementById("manche-select").addEventListener 
("change", function() 
	{
	var selectedValue = document.getElementById("manche-select").value;
	console.log("selected : "+selectedValue)
	mancheActuelle = selectedValue - 1
	document.getElementById("image").setAttribute("src", manches[mancheActuelle][0]) ;
	}
)


function Afficher_image(id) {
	var imgIndex = id-1

	if(mancheActuelle>=0)
	{
		document.getElementById("image").setAttribute("src", manches[mancheActuelle][imgIndex]) ;
	}
}

