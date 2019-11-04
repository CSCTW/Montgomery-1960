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

function updateText() {
  let x = "intro/";
  x += curr_dialogue++;
  x += ".txt";
  document.getElementById("bubble-text").innerHTML = loadFile(x);
}

let curr_dialogue = 1;
