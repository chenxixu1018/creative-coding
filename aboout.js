let boxes = [];
let boxTexts = [
    "My name is Chenxi Xu, but you can also call me Lydia",
    "I’m from Shenzhen, China.",
    "I'm a UI/UX designer skilled in both app and web page design.",
    "I enjoy creating interesting and engaging interactive designs.",
    "Currently, I’m a sophomore at New York University, majoring in Integrated Design and Media (IDM).",
    "In my free time, I enjoy playing the piano and listening to music.",
    "My favorite artist is GEM, a singer from Hong Kong, whom I admire a lot.",
    "I’m passionate about exploring different cuisines from around the world.",
    "My goal is to create meaningful and user-centered digital experiences.",
    "I’m also a K-pop fan.",
    "I love watching movies and TV shows, and I enjoy photography.",
    "I like sleeping."



];

function setup() {
    createCanvas(windowWidth, windowHeight);
    
    for (let i = 0; i < boxTexts.length; i++) {
        boxes.push(createMovingBox(random(width), random(height), boxTexts[i]));
    }
}

function draw() {
    background(220, 220, 255);
  
    for (let box of boxes) {
        box.move();
        box.display();
    }
}

function createMovingBox(x, y, textContent) {
    let w = 250;
    let h = 150;
    let xSpeed = random(-2, 2);
    let ySpeed = random(-2, 2);

    function move() {
        x += xSpeed;
        y += ySpeed;

        // Bounce off the edges
        if (x < 0) {
            x = 0; // Keep box within left edge
            xSpeed *= -1;
        } else if (x + w > width) {
            x = width - w; // Keep box within right edge
            xSpeed *= -1;
        }
        
        if (y < 0) {
            y = 0; // Keep box within top edge
            ySpeed *= -1;
        } else if (y + h > height) {
            y = height - h; // Keep box within bottom edge
            ySpeed *= -1;
        }
    }

    function display() {
       
        let isHovered = mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;

        if (isHovered) {
            fill(128, 90, 128);
            cursor(HAND);
        } else {
            fill(255);
        }

        rect(x, y, w, h, 10); 

        fill(0);
        textSize(12);
        textAlign(CENTER, CENTER);
        textWrap(WORD);  
        text(textContent, x, y, w, h); 
    }

    return {
        move,
        display
    };
}
