let rSlider, gSlider, bSlider;

function setup() {
  createCanvas(640, 480);

  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 20);

  gSlider = createSlider(0, 255, 100);
  gSlider.position(20, 50);

  bSlider = createSlider(0, 255, 100);
  bSlider.position(20, 80);
}

function draw() {
  background(220);

  let r = rSlider.value();
  let g = gSlider.value();
  let b = bSlider.value();

  fill(r, g, b);
  
  ellipse(width / 2, height / 2, 200, 200);

  textSize(16);
  fill(0);
  text("Red: " + r, 160, 35);
  text("Green: " + g, 160, 65);
  text("Blue: " + b, 160, 95);
}
