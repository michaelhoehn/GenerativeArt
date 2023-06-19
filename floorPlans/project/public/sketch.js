/// <reference path="../../node_modules/@types/p5/global.d.ts" />

function setup() {
  createCanvas(800, 800);
  background(255);
}

function draw() {
  // create a grid of points based on even spacing
  createGrid(20);

  // select random points and things to draw
  drawHouse(width / 2, height / 2);
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

function createGrid(n) {
  //create a grid of points to interact with
  let points = [
    {
      x: this.x,
      y: this.y,
    },
  ];

  // create even columns and rows
  for (let gridY = 1; gridY < n; gridY++) {
    for (let gridX = 1; gridX < n; gridX++) {
      let x = (width / n) * gridX;
      let y = (height / n) * gridY;
      points.push({ x, y });
    }
  }
  console.log(points.length + " points have been created");
}
