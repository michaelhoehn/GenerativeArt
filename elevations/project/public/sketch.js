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
  let aspect;

  p5.setup = () => {
    params = new DrawingParams();
    gridSize = params.size;
    gridType = params.type;
    drawingScale = params.scale;
    aspect = params.aspect[0];
    console.log(params);
    p5.createCanvas(params.aspect[1], params.aspect[2]);
    p5.background(255);

    // Define features here
    $fx.features({
      "Grid Size": gridSize,
      "Grid Type": gridType,
      "Drawing Scale": drawingScale,
      "Aspect Ratio": aspect,
    });
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
