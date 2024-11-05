// TODO: different distributions

let xy;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 20, 120);
  xy = { x: width / 2, y: height / 2 };
}

function draw() {
  ellipse(xy.x, xy.y, 50);
  xy = {
    x: random(width),
    y: random(height)
  };
}
