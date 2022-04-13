function Inizializza () {
	try {
		for (var i in nodoTesti) {
			var testo = nodoTesti[i];
			testo.setAttribute('style', 'display : none');
	
		}		
	} catch ( e  ) {
		alert("Inizializza" + e);
	}
}

function On () {
	try{
		nodoTesti[this.id].setAttribute('style', 'display : display');
		
	} catch ( e ) {
		alert("On" + e);
	}
}



var nodoTesti = new Array;
function gestoreLoad () {
	try {
		
		nodoTesti["Pippolo1"] = document.getElementById ("Overlay1");
		nodoTesti["Titolo2"] = document.getElementById ("Overlay2");
		document.getElementById ("Titolo1").onclick = On;
		document.getElementById ("Titolo2").onclick = On; 
/*		document.getElementById ("Overlay1").onclick = Inizializza();
/*		document.getElementById ("Overlay2").onclick = Inizializza(); */
//		document.getElementsByClassName ("chiudi").onclick = Inizializza;  
/*		window.onclick = Inizializza();  */
		var closeButton = document.getElementsByClassName("chiudi");
		if (closeButton)
		  closeButton.onclick = Inizializza;

		Inizializza();  

	} catch (e) {
		alert("GestoreLoad "+ e);
	}
}

window.onload = gestoreLoad;
//window.document.getElementsByClassName ("chiudi").onclick = Inizializza; 


