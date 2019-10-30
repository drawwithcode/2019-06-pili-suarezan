function preload() {
  myImage = loadImage("./assets/death.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  frameRate(2); // 2 people are dying per second


}

function draw() {
  //IMAGE DEATH
  image(myImage, width / 2, height / 2, myImage.width / 4, myImage.height / 4);

  //BOX
  fill(250, 128, 114, 100);
  noStroke();
  rect(width / 3.9, height / 3, 700, 300);

  //TEXT
  fill(220, 20, 60);
  textFont("McLaren");
  textSize(27);
  text("While you see this, this amount of people is dying:", width / 3.8, height / 2.3);

  //Nº OF DEATH PEOPLE
  fill(220, 20, 60);
  textSize(190);
  text(frameCount, width / 2 - 100, height / 2 + 30 + 130);

}

function mouseClicked() {
  window.open('page2.html', '_self');
}




// WINDOW RESIZED
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
