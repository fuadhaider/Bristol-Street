// responsive menu drop down
function dropMenu() {
  var x = document.getElementById('menu-div');
  if (x.className === 'menu-div') {
    x.className += (' menu-drop'); //add menu dropping class
  } else {
    x.className = 'menu-div';
  }
}

function loadSpec(spec) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("ajax").innerHTML = this.responseText;
    }
  };
  if (spec == 'dimension') {
    xhttp.open("GET", "dimension.html", true);
  }
  else if (spec == 'vehicleLayouts') {
    xhttp.open("GET", "vehicle-layouts.html", true);
  }
  else if (spec == 'colour') {
    xhttp.open("GET", "colour.html", true);
  }
  else if (spec == 'interiorTrim') {
    xhttp.open("GET", "interior-trim.html", true);
  }
  xhttp.send();
}