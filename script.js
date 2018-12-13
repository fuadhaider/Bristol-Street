// responsive menu drop down
function dropMenu() {
  var x = document.getElementById('dropdown-menu');
  if (x.className === 'dropdown-menu') {
    x.className += (' menu-drop'); //add menu dropping class
  } else {
    x.className = 'dropdown-menu';
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