document.addEventListener('DOMContentLoaded', function () {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        (function () {
            var ln = links[i];
            var location = ln.href;
            ln.onclick = function () {
                chrome.tabs.create({active: true, url: location});
            };
        })();
    }
});


function setDefaultValues(salah, salahString, inputName) {
  if (salah == null) {
    salah = 0;
    localStorage.setItem(salahString, salah);
  } else {
    document.getElementById(inputName).value = salah;
  }
}

function update(salah, value) {
  localStorage.setItem(salah, value);
}

window.onload = function () {


  // load all old data of prayers they missed
  // if they type something new or use the arrows, save that to localStorage

  // localStorage.setItem('name_of_the_variable', value_of_the_variable);
  // localStorage.getItem('name_of_the_variable') ==> value_of_the_variable

  // 1. Check if the localStorage exists for each salah
  // 2. If it does exist, load it
  // 3. If it doesn't, create the variables in the localStorage

  // function called when you first open up the extension
  // function start() {
  //
  // }


  // localStorage is just a place where you can set keys to values
  // xyz = 3
  // localStorage.setItem(xyz, 3);

  // now if we want to get xyz from the storage
  // localStorage.getItem(xyz); ==> 3

  // if salah = 'missedFajrSalahs'
  // and value = 3


  var missedFajr = localStorage.getItem('missedFajrSalahs');
  var missedZuhar = localStorage.getItem('missedZuharSalahs');
  var missedAsr = localStorage.getItem('missedAsrSalahs');
  var missedMagrib = localStorage.getItem('missedMagribSalahs');
  var missedIsha = localStorage.getItem('missedIshaSalahs');
  // missedFajr is the value of how many Fajrs have been missed
  // the second argument is what we call it in localStorage
  // the third is the id of it in the html
  setDefaultValues(missedFajr, 'missedFajrSalahs', 'fajrinput');
  setDefaultValues(missedZuhar, 'missedZuharSalahs', 'Zuhar');
  setDefaultValues(missedAsr, 'missedAsrSalahs', 'Asr');
  setDefaultValues(missedMagrib, 'missedMagribSalahs', 'Magrib');
  setDefaultValues(missedIsha, 'missedIshaSalahs', 'Isha');



}
