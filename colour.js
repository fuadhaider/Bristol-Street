function loadColour(colour) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("car-colour__car").innerHTML = this.responseText;
    }
  };
  switch (colour) {
    case 'red':
      xhttp.open("GET", "red.html", true);
      break;
    case 'black':
      xhttp.open("GET", "black.html", true);
      break;
    case 'blazerBlue':
      xhttp.open("GET", "blazer-blue.html", true);
      break;
    case 'deepImpactBlue':
      xhttp.open("GET", "deep-impact-blue.html", true);
      break;
    case 'guard':
      xhttp.open("GET", "guard.html", true);
      break;
    case 'magnetic':
      xhttp.open("GET", "magnetic.html", true);
          break;
    case 'metalicious':
      xhttp.open("GET", "metalicious.html", true);
      break;
    case 'silver':
      xhttp.open("GET", "silver.html", true);
      break;
    case 'solar':
      xhttp.open("GET", "solar.html", true);
      break;
    default:
      
  }
  xhttp.send();
}