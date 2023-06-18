/// <reference path="../../node_modules/@types/p5/global.d.ts" />

let colorCount = 20;
let hueValues = [];
let saturationValues = [];
let brightnessValues = [];
let actRandomSeed = 0;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

function draw() {
  noLoop();
  randomSeed(actRandomSeed);
  let test = $fx.getRawParam("rowCount");

  // colors
  for (let i = 0; i < colorCount; i++) {
    if (i % 2 == 0) {
      hueValues[i] = random(300, 360);
      saturationValues[i] = 100;
      brightnessValues[i] = random(15, 100);
    } else {
      hueValues[i] = 195;
      saturationValues[i] = random(20, 100);
      brightnessValues[i] = 100;
    }
  }

  // area tiling
  // count tiles
  let counter = 0;
  let rowCount = int(test);
  let rowHeight = height / rowCount;

  // seperate each line in parts
  for (let i = rowCount; i >= 0; i--) {
    // fragment count
    let partCount = i + 1;
    let parts = [];

    for (let ii = 0; ii < partCount; ii++) {
      if (random() < 0.075) {
        let fragments = int(random(2, 20));
        partCount = partCount + fragments;
        for (let iii = 0; iii < fragments; iii++) {
          parts.push(random(2));
        }
      } else {
        parts.push(random(2, 20));
      }
    }

    // add all subparts
    let sumPartsTotal = 0;
    for (let ii = 0; ii < partCount; ii++) {
      sumPartsTotal += parts[ii];
    }

    // draw rects
    let sumPartsNow = 0;
    for (let ii = 0; ii < parts.length; ii++) {
      sumPartsNow += parts[ii];
      let x = map(sumPartsNow, 0, sumPartsTotal, 0, width);
      let y = rowHeight * i;
      let w = -map(parts[ii], 0, sumPartsTotal, 0, width);
      let h = rowHeight;
      let index = counter % colorCount;
      let col = color(
        hueValues[index],
        saturationValues[index],
        brightnessValues[index]
      );
      fill(col);
      rect(x, y, w, h);
      counter++;
    }
  }
}

function mouseReleased() {
  actRandomSeed = random(100000);
  loop();
}
