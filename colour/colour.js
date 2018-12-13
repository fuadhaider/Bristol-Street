function loadColour(colour) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("car-colour__car").innerHTML = this.responseText;
    }
  };
  switch (colour) {
    case 'red':
      xhttp.open("GET", "colour/car/red.html", true);
      break;
    case 'black':
      xhttp.open("GET", "colour/car/black.html", true);
      break;
    case 'blazerBlue':
      xhttp.open("GET", "colour/car/blazer-blue.html", true);
      break;
    case 'deepImpactBlue':
      xhttp.open("GET", "colour/car/deep-impact-blue.html", true);
      break;
    case 'guard':
      xhttp.open("GET", "colour/car/guard.html", true);
      break;
    case 'magnetic':
      xhttp.open("GET", "colour/car/magnetic.html", true);
          break;
    case 'metalicious':
      xhttp.open("GET", "colour/car/metalicious.html", true);
      break;
    case 'silver':
      xhttp.open("GET", "colour/car/silver.html", true);
      break;
    case 'solar':
      xhttp.open("GET", "colour/car/solar.html", true);
      break;
    default:
      
  }
  xhttp.send();
}

// document.onload = function() {loadColour('red')};
// document.getElementById('colour-body').addEventListener('load', loadColour('red'));