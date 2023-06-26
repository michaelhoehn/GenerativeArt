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

  // use generateKey() inside createGrid(20, 20, generateKey());

  createGrid(20, 20, 0);

  // Algo: cull points based on [random, perlin, z-height + random, x-pos + random, y-pos + random]

  // TO DO: fxrand -> to display or not to display
  displayPoints(3);

  // draw a thingy at a specified point
  drawHouse(points[int(points.length / 2)].x, points[int(points.length / 2)].y);
  noLoop();
}

function drawHouse(x, y, multiplier) {
  // Description: Draws a house at a start point and scales based on multiplier
  // TO DO: x pos > width / 2 ? move the drawing over to fit within the margins
  noFill();
  strokeWeight(1);
  beginShape();
  vertex(x, y);
  vertex(x + 10, y);
  vertex(x + 10, y + 10);
  vertex(x, y + 10);
  endShape(CLOSE);
}

function generateKey() {
  // Description: Create a key to pass into the grid input parameter to activate a filter method
  let randomKey = fxrand() * 100;
  let optionCount = 7;
  let p = [];
  let key;
  for (let i = 0; i < optionCount; i++) {
    p.push((100 / optionCount) * i);
  }
  console.log(p);
  console.log(randomKey);
  if (randomKey >= p[p.length]) {
    return (key = 0);
  } else if (randomKey >= p[5] && randomKey < p[6]) {
    return (key = 1);
  } else if (randomKey >= p[4] && randomKey < p[5]) {
    return (key = 2);
  } else if (randomKey >= p[3] && randomKey < p[4]) {
    return (key = 3);
  } else if (randomKey >= p[2] && randomKey < p[3]) {
    return (key = 4);
  } else if (randomKey >= p[1] && randomKey < p[2]) {
    return (key = 5);
  } else {
    return (key = 6);
  }
  // can attempt a refactor here when able to
  // return randomKey > p[p.length]
  //   ? (key = 6)
  //   : randomKey >= p[6] && randomKey < p[p.length]
  //   ? (key = 5)
  //   : randomKey >= p[5] && randomKey < p[6]
  //   ? (key = 4)
  //   : randomKey >= p[4] && randomKey < p[5]
  //   ? (key = 3)
  //   : randomKey >= p[3] && randomKey < p[4]
  //   ? (key = 2)
  //   : randomKey >= p[2] && randomKey < p[3]
  //   ? (key = 1)
  //   : (key = 0);
}

function createGrid(u, v, key) {
  // Description: Creates a uv grid of points
  // u: count U direction
  // v: count V direction
  // key: the switch case key for point filtering (0 = none, 1 = random, 2 = perlin, 3 = x position, 4 = y position, 5 = x position reverse, 6 = y position reverse)
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
        case 3:
          console.log("grid filter: X-POSITION");
          x = (width / v) * gridX;
          y = (height / u) * gridY;
          if (x >= width / 2) {
            x = null;
            y = null;
          }
          break;
        case 4:
          console.log("grid filter: y-POSITION");
          x = (width / v) * gridX;
          y = (height / u) * gridY;
          y <= height / 2 ? (x = null) : (x = (width / v) * gridX);
          break;
        case 5:
          console.log("grid filter: X-POSITION REVERSE");
          x = (width / v) * gridX;
          y = (height / u) * gridY;
          if (x <= width / 2) {
            x = null;
            y = null;
          }
          break;
        case 6:
          console.log("grid filter: y-POSITION REVERSE");
          x = (width / v) * gridX;
          y = (height / u) * gridY;
          y >= height / 2 ? (x = null) : (x = (width / v) * gridX);
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
