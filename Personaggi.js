function AppariScompari() {
	try{
  if (nodoProt[this.id].style.display === "block") {
    nodoProt[this.id].style.display = "none";
  } else {
    nodoProt[this.id].style.display = "block";
  } 
} catch ( e ) {
		alert("AppariScompari" + e);
	}
}

function Scompari() {
	try{
	nodoProt["mostra2"].setAttribute('style', 'display : none');
	nodoProt["mostra3"].setAttribute('style', 'display : none');
} catch ( e ) {
		alert("AppariScompari" + e);
	}
}

function Mostrare(){
	try{
		Inizializza();
		nodoProt[this.id].setAttribute('style', 'display : display');
		
	} catch ( e ) {
		alert("Mostrare" + e);
	}
}


function Inizializza () {
	try {
		for (var i in nodoProt) {
		var prot = nodoProt[i];
		prot.setAttribute('style', 'display : none');		
		}		
	} catch ( e  ) {
		alert("Inizializza" + e);
	}
}

var nodoProt = new Array;

function gestoreLoad () {
	try {
	nodoProt["mostra1"] = document.getElementById ("protagonistad");
	nodoProt["mostra2"] = document.getElementById ("maschili");	
	nodoProt["mostra3"] = document.getElementById ("femminili");
	nodoProt["mostra5"] = document.getElementById ("carcomuni");
	document.getElementById("mostra1").onclick = AppariScompari;
	document.getElementById("mostra2").onclick = Mostrare;
	document.getElementById("mostra3").onclick = Mostrare;
	document.getElementById("mostra4").onclick = Scompari;
	document.getElementById("mostra5").onclick = AppariScompari;
	Inizializza();
	} catch (e) {
		alert("GestoreLoad "+ e);
	}
}

window.onload = gestoreLoad;
