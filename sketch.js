var angle = [];
var radius = [];
var speed = [];
var numCircles = 35;
var slider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  for (var i = 0; i < numCircles; i++) {
    angle[i] = random(TWO_PI);
    radius[i] = random(50, 200);
    speed[i] = random(0.01, 0.03); 
  }

  slider = createSlider(80, 300, 150, 10);
  slider.position(10, 10);
  slider.style('z-index', '11');
}

function draw() {
  background(20, 20, 30, 30); 

  var baseRadius = slider.value();

  for (var i = 0; i < numCircles; i++) {
    var x = width / 2 + cos(angle[i]) * (baseRadius + radius[i]);
    var y = height / 2 + sin(angle[i]) * (baseRadius + radius[i]);

    fill(150 + i * 5, 120, 255 - i * 5, 120); 
    ellipse(x, y, 20 + i * 1.5);

    angle[i] += speed[i];
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
