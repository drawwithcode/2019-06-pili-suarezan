function preload() {
  myImage = loadImage("./assets/birth.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  frameRate(4); // 4 babies are born per second

}

function draw() {
  //IMAGE BIRTH
  image(myImage, width / 2, height / 2, myImage.width / 3, myImage.height / 3);

  //BOX
  fill(135, 206, 250, 100);
  noStroke();
  rect(width / 3.9, height / 3, 700, 300);

  //TEXT
  fill(0, 0, 255);
  textFont("McLaren");
  textSize(28);
  text("Don't worry, almost the double is being born:", width / 3.5, height / 2.3);

  // Nº OF BORN BABIES
  fill(240, 248, 255);
  textSize(190);
  text(frameCount, width / 2 - 100, height / 2 + 30 + 130);

}

function mouseClicked() {
  window.open('index.html', '_self');
}

// WINDOW RESIZED
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
