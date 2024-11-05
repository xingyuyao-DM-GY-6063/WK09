// TODO: noise fill

let gridDim = 16;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  for (let x = 0; x < width; x += gridDim) {
    for (let y = 0; y < height; y += gridDim) {
      let mc = 255 * noise(x/100,y/100);
      fill(mc);
      rect(x, y, gridDim);
    }
  }
}

function draw() {}
