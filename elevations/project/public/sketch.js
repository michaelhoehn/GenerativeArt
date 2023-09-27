/// <reference path="../../node_modules/@types/p5/global.d.ts" />

import DrawingParams from "./classes/DrawingParams.js";
import { createGrid, generateKey } from "./utils/gridGenerator.js";
import { displayPoints } from "./utils/displayPoints.js";
import House from "./classes/House.js";

new p5(function(p5) {
    let params;
    let gridSize;
    let gridType;

    p5.setup = () => {
        gridSize = $fx.getParam("gridSize");
        gridType = $fx.getParam("gridType");
        console.log(`gridSize = ${gridSize}`);
        params = new DrawingParams();
        p5.createCanvas(params.aspect[1], params.aspect[2]);
        p5.background(255);
    };

    p5.draw = () => {
        let cg = createGrid(p5, gridSize, gridSize, gridType);
        displayPoints(p5, cg, 3);
        p5.strokeWeight(1);
        for (let i = 0; i < cg.length; i++) {
            let house = new House(p5, cg[i].x, cg[i].y);
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