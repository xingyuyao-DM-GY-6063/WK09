let ids = [];

let cId = -1;
let debounceDelay = 800;
let xy;
let lastClicked;

function preload() {
  ids = loadStrings("../assets/ids.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 20, 120);
  randomSeed(1010);
  textAlign(CENTER, CENTER);
  textSize(32);
  noLoop();

  xy = { x: width / 2, y: height / 2 };
  lastClicked = 0;

  for (let i = 0; i < ids.length; i++) {
    for (let j = i; j < ids.length; j++) {
      let rj = floor(random(j, ids.length));
      let t = ids[i];
      ids[i] = ids[rj];
      ids[rj] = t;
    }
  }
}

function draw() {
  if (millis() - lastClicked > debounceDelay) {
    cId = (cId + 1) % ids.length;

    background(255, 20, 120);
    text(ids[cId], xy.x, xy.y);

    lastClicked = millis();
    xy = { x: width / 2, y: height / 2 };
  }
}

function mouseClicked() {
  draw();
}
