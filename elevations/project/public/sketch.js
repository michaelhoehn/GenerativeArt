/// <reference path="../../node_modules/@types/p5/global.d.ts" />

import DrawingParams from "./classes/DrawingParams.js";
import { createGrid, generateKey } from "./utils/gridGenerator.js";
import { displayPoints } from "./utils/displayPoints.js";
import House from "./classes/House.js";

new p5(function (p5) {
  let params;
  let gridSize;
  let gridType;
  let drawingScale;

  p5.setup = () => {
    params = new DrawingParams();
    gridSize = params.size;
    gridType = params.type;
    drawingScale = params.scale;
    console.log(drawingScale);
    p5.createCanvas(params.aspect[1], params.aspect[2]);
    p5.background(255);
  };

  p5.draw = () => {
    let cg = createGrid(p5, gridSize, gridSize, gridType);
    displayPoints(p5, cg, 10);
    p5.strokeWeight(1);
    for (let i = 0; i < cg.length; i++) {
      new House(p5, cg[i].x, cg[i].y, drawingScale);
    }
    p5.noLoop();
  };
});

// let count;

// function setup() {
//   seed = int(fxrand() * 999999);
//   createCanvas(1000, 1000);
//   background("white");
//   rect(0, 0, width);
//   count = $fx.getParam("count");
//   console.log(count);
// }

// function draw() {
//   fill("red");
//   for (let i = 0; i < count; i++) {
//     rect(fxrand() * width, (fxrand() * height) / 2, 100);
//   }
//   noLoop();
// }
