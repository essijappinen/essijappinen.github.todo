// Close-ruksin tekeminen, lisätään jokaiseen listan itemiin
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


// kun käyttäjä klikkaa close-ruksia, sen parent-element menee näkymättömäksi
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}



// lisätään yliviivaus ja väri, kun listan osa klikataan "suoritetuksi"
var list = document.querySelector('ul');
list.addEventListener('click', function(event) {
if (event.target.tagName === 'LI') {
  event.target.classList.toggle('checked');
}
}, false);

// tehdään funktio, joka luo uuden elementin. Funktiota on käytetty html:n Add-napissa.
function newElement() {
// luodaan uusi li-node
var node = document.createElement("li");
//otetaan talteen myInput-id:n arvo, eli se mitä käyttäjä on syöttänyt input-kenttään
var inputValue = document.getElementById("myInput").value;
//luodaan uusi textnode käyttäjän syöttämän tiedon perusteella (eli inputValue)
var textnode = document.createTextNode(inputValue);
// käytetään appendChild-metodia, joka muuttaa tekstin <li>-muotoon
node.appendChild(textnode);
//jos käyttäjä ei syötä tekstiä, tulee varoitus
if (inputValue === '') {
  alert("You have to write something!");
// muussa tapauksessa luodaan <li>-tagista <ul> id:llä myUL
} else {
  document.getElementById("myUL").appendChild(node);
}
// kirjoitetaan myInputiin syötetty arvo
document.getElementById("myInput").value = "";

// luodaan uusi span-tagi
var span = document.createElement("SPAN");
// luodaan x-merkki/kertomerkki (eli "close")
var txt = document.createTextNode("\u00D7");
//annetaan span-elementin classnameksi close
span.className = "close";
//
span.appendChild(txt);
node.appendChild(span);






for (i = 0; i < close.length; i++) {
close[i].onclick = function() {
  var div = this.parentElement;
  div.style.display = "none";

}
}
}
