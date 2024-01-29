var date_1 = [
	"Antoine",
	"Éric",
	"Ludo",
	"Marie",
	"Max",
	"Véronique",
	"Vincent"
];

var date_2 = [
	"Franck",
	"Isabelle",
	"Jean-Louis",
	"Juliette",
	"Léa",
	"Nassim",
	"Un amant de Marie",
	];

var enonce_1 = [
	"Valérie Bonneton",
	"François Cluzet",
	"Martion Cotillard",
	"Jean Dujardin",
	"Laurent Lafitte",
	"Gilles Lellouche",
	"Benoît Magimel",

	]
	;

var reponse_1 = [
	"Laurent Lafitte",
	"Gilles Lellouche",
	"Jean Dujardin",
	"Martion Cotillard",
	"François Cluzet",
	"Valérie Bonneton",
	"Benoît Magimel",
	] 
	;

var enonce_2= [
	"Pascale Arbillot",
	"Joël Dupuch",
	"M",
	"Anne Marivin",
	"Hocine Mérabat",
	"Louise Monot",
	"Maxim Nucci",
	
	]
	;

var reponse_2 = [
	"Maxim Nucci",
	"Pascale Arbillot",
	"Joël Dupuch",
	"Anne Marivin",
	"Louise Monot",
	"Hocine Mérabat",
	"M"
	]
	;	

var date_3 = [
	"Alex",
	"Arthur",
	"Elliot",
	"Géraldine",
	"Jeanne",
	"Sabine",
	"Sabine",	
	];	

var enonce_3= [
	
	
	"La fille de Max et Véronique",
	"Le fils de Max et Véronique",
	"Le fils de Vincent et Isabelle",
	"La mère de Ludo",
	"La nouvelle compagne de Max",
	"Le phasme AKA le nouveau compagnon de Vincent",
	"Une amie de Véronique",
]
	;

var reponse_3= [
	"Le phasme AKA le nouveau compagnon de Vincent",
	"Le fils de Max et Véronique",
	"Le fils de Vincent et Isabelle",
	"Une amie de Véronique",
	"La fille de Max et Véronique",
	"La nouvelle compagne de Max",
	"La mère de Ludo"

	]
	;



function Afficher(id, id2) {
	for (var i = 0 ; i < date_1.length ; i ++) 
	{

		var EltEvt = "evt" + i ;
		var EltDate  = "date" + i ;
		document.getElementById(EltEvt).textContent = id[i];
		document.getElementById(EltDate).textContent = id2[i];
	}
	};

