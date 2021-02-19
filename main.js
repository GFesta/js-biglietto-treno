var kmPercorrere = prompt("Chilometri da percorrere?");
var eta = prompt("Quanti anni hai?");
var costo = 0.21 * kmPercorrere;
var sconto = 0;

if (eta<=18) {
    sconto = 20;
}
else if (eta>=65) {
    sconto = 40;
}

if ((isNaN(kmPercorrere)) || (kmPercorrere == "") || (kmPercorrere == "undefined")) {
    alert("Il prezzo del biglietto e di NaN Euro");
    }

var prezzo = costo - (costo * sconto / 100);
document.getElementById("text").innerHTML ="Prezzo totale: " + prezzo + " Euro";