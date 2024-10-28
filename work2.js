let circles = [];
let numCircles = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numCircles; i++) {
    circles[i] = {
      x: random(width),
      y: random(height),
      color: color(random(255), random(255), random(255)),
      size: random(30, 60),
      vel: createVector(0, 0),
      accel: createVector(0, 0)
    }
  }
  noStroke();
}

function draw() {
  background(20, 50, 100, 10);

  for (let i = 0; i < numCircles; i++) {
    fill(circles[i].color);
    ellipse(circles[i].x, circles[i].y, circles[i].size, circles[i].size);

    circles[i].vel.add(circles[i].accel);
    circles[i].vel.limit(5);
    circles[i].x += circles[i].vel.x;
    circles[i].y += circles[i].vel.y;

    if (circles[i].x > width) circles[i].x = 0;
    if (circles[i].x < 0) circles[i].x = width;
    if (circles[i].y > height) circles[i].y = 0;
    if (circles[i].y < 0) circles[i].y = height;
  }
}

function mousePressed() {
  for (let i = 0; i < numCircles; i++) {
    circles[i].vel = createVector(random(-10, 10), random(-10, 10));
  }
}
