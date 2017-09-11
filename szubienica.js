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

function start(){
	document.getElementById("alphabet").innerHTML = "lolwut"

	wypisz_haslo();
}