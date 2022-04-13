function Inizializza () {
	try {
		for (var i in nodoRacconti) {
		var nodoRacconto= nodoRacconti[i];
		nodoRacconto.setAttribute('style', 'display : none');
		}
	} catch ( e  ) {
		alert("Inizializza" + e);
	}
}

function Mostra (){
	try{
		Inizializza();
		nodoRacconti[this.id].setAttribute('style', 'display : display');
	} catch ( e ) {
		alert("Mostra" + e);
	}
}

var nodoRacconti = new Array;
function gestoreLoad () {
	try {
    nodoRacconti["1"] = document.getElementById ("racconto1");
    nodoRacconti["2"] = document.getElementById ("racconto2");
    nodoRacconti["3"] = document.getElementById ("racconto3");
    nodoRacconti["4"] = document.getElementById ("racconto4");
    nodoRacconti["5"] = document.getElementById ("racconto5");
    nodoRacconti["6"] = document.getElementById ("racconto6");
    nodoRacconti["7"] = document.getElementById ("racconto7");
    nodoRacconti["8"] = document.getElementById ("racconto8");
    nodoRacconti["9"] = document.getElementById ("racconto9");
    nodoRacconti["10"] = document.getElementById ("racconto10");
    nodoRacconti["11"] = document.getElementById ("racconto11");
    nodoRacconti["12"] = document.getElementById ("racconto12");

    document.getElementById ("1").onclick = Mostra;
    document.getElementById ("2").onclick = Mostra;
    document.getElementById ("3").onclick = Mostra;
    document.getElementById ("4").onclick = Mostra;
    document.getElementById ("5").onclick = Mostra;
    document.getElementById ("6").onclick = Mostra;
    document.getElementById ("7").onclick = Mostra;
    document.getElementById ("8").onclick = Mostra;
    document.getElementById ("9").onclick = Mostra;
    document.getElementById ("10").onclick = Mostra;
    document.getElementById ("11").onclick = Mostra;
    document.getElementById ("12").onclick = Mostra;
   
    Inizializza();
	} catch (e) {
		alert("GestoreLoad "+ e);
	}
}

window.onload = gestoreLoad;
