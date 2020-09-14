// WEBCAM CAPTURE
// Generative Design Systems
// Matthew Wizinsky

var cam;

function setup() {
  createCanvas(640, 480);

  // specify multiple formats for different browsers
  cam = createCapture(VIDEO);
  cam.size(640, 480);
}

function draw() {
  image(cam, 0, 0, 640, 480);
}