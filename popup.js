
function setDefaultValues(salah, salahString, inputName) {
  if (salah == null) {
    salah = 0;
    localStorage.setItem(salahString, salah);
  } else {
    document.getElementById(inputName).value = salah;
  }
}

function update (event) {
  console.log(event);
  console.log(event.target);
  console.log(event.target.value);
  console.log(event.target.salahString);
  localStorage.setItem(event.target.salahString, event.target.value);
}

function sendNotification(id, options) {
  chrome.notifications.create(id, options);
  localStorage.setItem('missedSalahNotifID', id);
}

window.onload = function start() {

  var missedFajr = localStorage.getItem('missedFajrSalahs');
  var missedZuhar = localStorage.getItem('missedZuharSalahs');
  var missedAsr = localStorage.getItem('missedAsrSalahs');
  var missedMagrib = localStorage.getItem('missedMagribSalahs');
  var missedIsha = localStorage.getItem('missedIshaSalahs');
  var notificationID = localStorage.getItem('missedSalahNotifID');

  setDefaultValues(missedFajr, 'missedFajrSalahs', 'fajrinput');
  setDefaultValues(missedZuhar, 'missedZuharSalahs', 'Zuhar');
  setDefaultValues(missedAsr, 'missedAsrSalahs', 'Asr');
  setDefaultValues(missedMagrib, 'missedMagribSalahs', 'Magrib');
  setDefaultValues(missedIsha, 'missedIshaSalahs', 'Isha');

  var inputs = [
    document.getElementById('fajrinput'),
    document.getElementById('Zuhar'),
    document.getElementById('Asr'),
    document.getElementById('Magrib'),
    document.getElementById('Isha')
  ];

  var salahStrings = [
    'missedFajrSalahs',
    'missedZuharSalahs',
    'missedAsrSalahs',
    'missedMagribSalahs',
    'missedIshaSalahs'
  ];

]
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', update, false);
    inputs[i].salahString = salahStrings[i];
}

var positiveNotificationOptions = {
  type: 'basic',
  title: 'You are doing great!',
  message: 'Keep up the good work!',
  iconUrl: 'Webp.net-resizeimage (2).png',
};

var negativeNotificationOptions = {
  type: 'basic',
  title: 'You have missed a lot of salahs!',
  message: "You have missed a lot of Salahs. Time to pray! ",
  iconUrl: 'Webp.net-resizeimage (2).png',
}

if (notificationID == null) {
  notificationID = 0;
  localStorage.setItem('missedSalahNotifID', notificationID);
}

if (missedFajr > 5 || missedZuhar > 5 || missedAsr > 5 || missedMagrib > 5 || missedIsha > 5) {
  notificationID += 1
  sendNotification(notificationID, negativeNotificationOptions);
} else if (missedFajr <= 1 || missedZuhar <= 1 || missedAsr <= 1 || missedMagrib <= 1 || missedIsha <= 1) {
  notificationID += 1
  sendNotification(notificationID, positiveNotificationOptions);
}

}
