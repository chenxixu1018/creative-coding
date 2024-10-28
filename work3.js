let vid;
let vScale = 16;
let soundFile;
let playing = false;



function setup() {
  createCanvas(windowWidth, windowHeight);
  
  pixelDensity(1);
  rectMode(CENTER);

  vid = createCapture(VIDEO);
  vid.size(width / vScale, height / vScale);
  vid.hide();

  noStroke();
}

function draw() {
  background(0);

  vid.loadPixels();
  
  for (let x = 0; x < vid.width; x++) {
    for (let y = 0; y < vid.height; y++) {
      let index = (x + y * vid.width) * 4;

  
      let r = vid.pixels[index];
      let g = vid.pixels[index + 1];
      let b = vid.pixels[index + 2];

    
      let brightness = (r + g + b) / 3;

     
      let rectSize = map(brightness, 0, 255, 5, vScale);
      let col = color(r, g, b);
      col.setAlpha(map(brightness, 0, 255, 100, 200));
      
      fill(col);
      
     
      push();
      translate(x * vScale, y * vScale);
      rotate(map(brightness, 0, 255, 0, PI / 4)); 
      rect(0, 0, rectSize, rectSize);
      pop(); 
    }
  }

  vid.updatePixels();
}

function mousePressed() {
  if (!playing) {
    soundFile.play();
    playing = true;
  } else {
    soundFile.pause();
    playing = false;
  }
}
