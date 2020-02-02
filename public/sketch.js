let img;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  img = loadImage('static/images/scene00_unfixed.jpg');
 
} 

function draw() { 
  image(img, 0, 0, windowWidth, windowHeight);
}
