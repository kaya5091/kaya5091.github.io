var size;

var soundFile;
var amplitude;

var smoothing = 1;

var heart;
var heartImage;

function preload() {
  soundFile = loadSound('hero/heart.mp3');
  heartImage = loadImage('hero/heart.png');
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("intro");
  noStroke();
  fill(255);

  soundFile.loop();

  amplitude = new p5.Amplitude();

  imageMode(CENTER);
}

function draw() {
  background('#FFFFFF');

  var volume = amplitude.getLevel();
  size = map(volume + 0.5, 0, 1.0, 25, 400) + 100;
  if (mouseIsPressed) {
    image(heartImage, mouseX, mouseY, size, size);
  } else {
    image(heartImage, width / 2, height / 2, size, size);
  }


  amplitude.smooth(0.9);

  if (mouseY > height && soundFile.isPlaying()) {
    soundFile.pause();
  } else if (mouseY < height && soundFile.isPaused()) {
    soundFile.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}