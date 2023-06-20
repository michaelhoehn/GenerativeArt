/// <reference path="../../node_modules/@types/p5/global.d.ts" />

let positions = [];
let points = [
  {
    x: this.x,
    y: this.y,
  },
];
let nullPoints = [{}];

function setup() {
  createCanvas(800, 800);
  background(255);
}

function draw() {
  // create a grid of points based on even spacing
  // TO DO: fxrand -> square or rectangle (landscape or portrait )
  // TO DO: fxrand -> evenly spaced or not
  // TO DO: fxrand ranges for u, v
  createGrid(20, 20, 2);

  // Algo: cull points based on [random, perlin, z-height + random, x-pos + random, y-pos + random]

  // TO DO: fxrand -> to display or not to display
  displayPoints(5);

  // draw a thingy at a specified point
  drawHouse(points[5].x, points[5].y);
  noLoop();
}

function drawHouse(x, y) {
  noFill();
  strokeWeight(1);
  beginShape();
  vertex(x, y);
  vertex(x + 10, y);
  vertex(x + 10, y + 10);
  vertex(x, y + 10);
  endShape(CLOSE);
}

function createGrid(u, v, key) {
  // Description: Creates a uv grid of points
  // u: count U direction
  // v: count V direction
  // key: the switch case key for point filtering (0 = none, 1 = random, 2 = perlin, 3 = x position, 4 = y position...)
  // TO DO: pass filter option through as a parameter
  // TO TO: switch cases for different filter algos
  // create even columns and rows
  let nValues = [];
  let nAvg;
  let nOff = 0.904; //0.904
  if (key == 2) {
    for (let gridY = 1; gridY < u; gridY++) {
      for (let gridX = 1; gridX < v; gridX++) {
        n = noise(0.01 * gridX, 0.01 * gridY);
        nValues.push(n);
      }
    }
    const average = (array) => array.reduce((a, b) => a + b) / array.length;
    nAvg = average(nValues);
    console.log(nAvg);
  }
  for (let gridY = 1; gridY < u; gridY++) {
    for (let gridX = 1; gridX < v; gridX++) {
      let x, y;
      switch (key) {
        case 0:
          console.log("grid filter: NONE");
          x = (width / v) * gridX;
          y = (height / u) * gridY;
          break;
        case 1:
          console.log("grid filter: RANDOM");
          let p = fxrand();
          p >= 0.5 ? (x = (width / v) * gridX) : null;
          p >= 0.5 ? (y = (height / u) * gridY) : null;
          break;
        case 2:
          console.log("grid filter: PERLIN");
          let n = noise(0.01 * gridX, 0.01 * gridY);
          n >= nAvg * nOff ? (x = (width / v) * gridX) : null;
          n >= nAvg * nOff ? (y = (height / u) * gridY) : null;
          break;
        default:
          break;
      }
      // push only the good points
      if (x != undefined && y != undefined) {
        points.push({ x, y });
      } else {
        nullPoints.push({ x, y });
      }
    }
  }
  // clean the list
  points.shift();
}

function displayPoints(w) {
  strokeWeight(w);
  for (let i = 0; i < points.length; i++) {
    // null catching
    if (points[i].x != undefined || points[i].y != undefined) {
      point(points[i].x, points[i].y);
    }
  }
}
