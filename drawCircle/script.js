// variables
var canvas, ctx, w, h, radius;
var margin = 10;

// initialisation
function init() {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	w = canvas.width, h = canvas.height;
  radius = w/2-margin;
}

// effacer la zone de dessin
function clean(r, g, b) {
	ctx.fillStyle = 'rgb('+r+', '+g+', '+b+')';
	ctx.beginPath();
	ctx.rect(0, 0, w, h);
	ctx.closePath();
	ctx.fill();
}

// chargement
function load() {
  init();
  clean(50,200,120);
  console.log('load');
}

// dessiner le fond
function drawBackground() {
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.strokeStyle = "rgb(255, 255, 255)";
  ctx.beginPath();
  ctx.arc(w/2, h/2, radius, 0, 2*Math.PI, true);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
}

// dessiner une ligne
function drawLine(x1,y1,x2,y2) {
  ctx.fillStroke = "rgb(255, 255, 255)";
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2,y2);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
}

// dessiner un point
var pointSize = 5;
function drawPoint(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillStroke = "rgb(255, 255, 255)";
  ctx.beginPath();
  ctx.arc(x, y, pointSize, 0, Math.PI*2, true);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

}

// récupérer les données de la page
var table, modulo;
function getData() {
  table = document.getElementById("table").value ? parseFloat(document.getElementById("table").value) : 0;
  modulo = document.getElementById("modulo").value ? parseFloat(document.getElementById("modulo").value) : 0;
}


function drawTable() {

  // récupère les données du formulaire dans les variables
  getData();
  // vide le rectangle
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // dessine le cercle à partir du rayon
  drawBackground();

  // calcul l'angle pour modulo points
  var step = Math.PI * 2 / modulo;

  // pour chaque point
  for (var i = 0; i < modulo; i++) {
    // calcul les coordonnées du ième point
    var x1 = w/2 + radius * Math.cos(i*step - Math.PI / 2);
    var y1 = h/2 + radius * Math.sin(i*step - Math.PI / 2);
    //console.log('x='+x+', y='+y);

    // on met le premier point de couleur claire
    var color = (i === 0) ?  "rgb(255, 255, 0)" : "rgb(0, 0, 0)";
    // on dessine le point (départ du trait)
    drawPoint(x1, y1, color);

    // on fait le calcul (multiplication) pour le ième point
    var calcul = i * table % modulo;
    // calcul des coordonnées du point d'arrivée
    var x2 = w/2 + radius * Math.cos(calcul*step - Math.PI / 2);
    var y2 = h/2 + radius * Math.sin(calcul*step - Math.PI / 2);

    // dessin de la ligne
    drawLine(x1, y1, x2, y2);
  }
}
