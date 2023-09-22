/// <reference path="../../node_modules/@types/p5/global.d.ts" />

import DrawingParams from "./classes/DrawingParams.js";
import { createGrid } from "./utils/gridGenerator.js";
import { displayPoints } from "./utils/displayPoints.js";
import { drawHouse } from "./houseGenerator.js";

new p5(function (p5) {
  let params;

  p5.setup = () => {
    params = new DrawingParams();
    p5.createCanvas(params.aspect[1], params.aspect[2]);
    p5.background(255);
  };

  p5.draw = () => {
    let cg = createGrid(p5, 20, 20, 0);
    displayPoints(p5, cg, 3);
    p5.strokeWeight(1);
    drawHouse(p5, p5.width / 2, p5.height / 2, 100);
    p5.noLoop();
  };
});
