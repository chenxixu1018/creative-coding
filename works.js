var x = 0;
var shake = 0;
var count = 0;
var shapeSize = 15;
var angle = 0;
var numLines = 10; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}

function draw() {
  background(50, 50, 250, 10); 

  strokeWeight(2);
  stroke(255); 

 
  for (var i = 0; i < numLines; i = i + 1) {
    var startY = map(i, 0, numLines, 0, height); 
    line(x, startY, x + 100, startY + random(-30, 30)); 
  }

  x = x + 2; 

  if (x > width) {
    x = 0; 
  }

  shake = map(noise(count * 0.1), 0, 1, -30, 30);
  noStroke();

  
}
