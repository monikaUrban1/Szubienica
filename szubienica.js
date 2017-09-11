var haslo = "Dobrej nocy";
var haslo1 = "";
var dlugosc = haslo.length;

for (i = 0; i <dlugosc; i++) {
	if (haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
	else haslo1 = haslo1 + "-";
	}

	function wypisz_haslo() {
	document.getElementById('slogan').innerHTML = haslo1;
}
window.onload = start;

var litery = new Array(35);


function start(){
	var tresc_diva = "";
	for (i=0; i<=34; i++) {
		tresc_diva=tresc_diva+'<div class="litera">a</div>';
		if ((i+1)%7==0) tresc_diva=tresc_diva+'<div style="clear:both;"</div>'
	}
		document.getElementById("alphabet").innerHTML = tresc_diva;
	

	wypisz_haslo();
}