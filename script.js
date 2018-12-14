// responsive menu drop down
function dropMenu() {
  var d = document.getElementById('dropdown-menu');
  if (d.className === 'dropdown-menu') {
    d.className += (' menu-drop'); //add menu dropping class
  } else {
    d.className = 'dropdown-menu';
  }
}

function loadSpec(spec) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById('spec-container').innerHTML = this.responseText;
    }
  };
  if (spec == 'dimension') {
    xhttp.open('GET', 'dimension/dimension.html', true);
  }
  else if (spec == 'vehicleLayouts') {
    xhttp.open('GET', 'vehicle-layout/vehicle-layout.html', true);
  }
  else if (spec == 'colour') {
    xhttp.open('GET', 'colour/colour.html', true);
  }
  else if (spec == 'interiorTrim') {
    xhttp.open('GET', 'interior-trim/interior-trim.html', true);
  }
  xhttp.send();
}

// drop down menu disappears on browser resize
function dropdownMenu() {
  let w = document.body.clientWidth;
  var d = document.getElementById('dropdown-menu');
  if (w >= 800 ) {
    d.className = 'dropdown-menu';
  }
}

window.onload = function() {
  loadSpec('colour');
  setTimeout(loadColour('red'), 2000);
  //load inner ajax obj after colour.html dom construction
};

// drop down menu disappears on browser resize
window.addEventListener('resize', dropdownMenu);