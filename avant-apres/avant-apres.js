manches = [
	"", // 0
	"https://1jour1film.fr/challenge/cls3f4vvj3artbe1zddwm5iax", // 1
	"https://1jour1film.fr/challenge/cls3f5cgk3arvbe1zmcv4qkja", // 2
	"https://1jour1film.fr/challenge/cls3f5itr3arwbe1zqdow9gh6", // 3
	"https://1jour1film.fr/challenge/cls3f5o3n3arxbe1z7qnerwyr", // 4
	"https://1jour1film.fr/challenge/cls3f5rkd3arybe1zi8bea4au", // 5
	"https://1jour1film.fr/challenge/cls3f7dps3as2be1z8ewey44b", // 6
	"https://1jour1film.fr/challenge/cls3f7tya3as3be1zny91fikh", // 7
	"https://1jour1film.fr/challenge/cls3f86fn3as4be1zk1sy08s3" ,// 8
	"https://1jour1film.fr/challenge/cls3f90zs3as8be1z04r7jef1", //9
	"https://1jour1film.fr/challenge/cls3fa7z83asgbe1znhlm4zew" //10
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