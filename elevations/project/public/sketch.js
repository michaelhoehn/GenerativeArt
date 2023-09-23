/// <reference path="../../node_modules/@types/p5/global.d.ts" />

import DrawingParams from "./classes/DrawingParams.js";
import { createGrid } from "./utils/gridGenerator.js";
import { displayPoints } from "./utils/displayPoints.js";
import House from "./classes/House.js";

$fx.params([
  {
    id: "gridSize",
    name: "Grid Size",
    type: "number",
    options: {
      min: 2,
      max: 20,
      step: 1,
    },
  },
]);

console.log($fx.getRawParams());

let gridSize = $fx.getParam("gridSize");
console.log(gridSize);

new p5(function (p5) {
  let params;

  p5.setup = () => {
    params = new DrawingParams();
    p5.createCanvas(params.aspect[1], params.aspect[2]);
    p5.background(255);
  };

  p5.draw = () => {
    let cg = createGrid(p5, gridSize, gridSize, 0);
    displayPoints(p5, cg, 3);
    p5.strokeWeight(1);
    for (let i = 0; i < cg.length; i++) {
      let house = new House(p5, cg[i].x, cg[i].y);
    }
    p5.noLoop();
  };
});
