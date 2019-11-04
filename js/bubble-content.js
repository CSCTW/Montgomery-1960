function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
}

function nextText() {
  if (curr_dialogue + 1 > max_page) return;
  var x = "intro/";
  x += ++curr_dialogue;
  x += ".txt";
  document.getElementById("bubble-text").innerHTML = loadFile(x);
  updateAvailability();
}

function backText() {
  if (curr_dialogue - 1 < min_page) return;
  var x = "intro/";
  x += --curr_dialogue;
  x += ".txt";
  document.getElementById("bubble-text").innerHTML = loadFile(x);
  updateAvailability();
}

function updateAvailability() {
  if (curr_dialogue == 0) {
    document.getElementById("back").style.color = "var(--invalid-text)";
    document.getElementById("back").style.cursor = "not-allowed";
  }
  else if (curr_dialogue == 2) {
    document.getElementById("front").style.color = "var(--invalid-text)";
    document.getElementById("front").style.cursor = "not-allowed";
  }
}

let curr_dialogue = 0;
let min_page = 0;
let max_page = 2;
