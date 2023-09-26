/// <reference path="../../node_modules/@types/p5/global.d.ts" />

import DrawingParams from "./classes/DrawingParams.js";
import { createGrid, generateKey } from "./utils/gridGenerator.js";
import { displayPoints } from "./utils/displayPoints.js";
import House from "./classes/House.js";

// $fx.params([{
//     id: "gridSize",
//     name: "Grid Size",
//     type: "number",
//     options: {
//         min: 2,
//         max: 20,
//         step: 1,
//     },
// }, ]);

console.log($fx.getRawParams());

// let gridSize = $fx.getParam("gridSize");
let gridSize = 20;
// console.log(`gridSize = ${gridSize}`);
console.log($fx.getParams());

new p5(function(p5) {
    let params;

    p5.setup = () => {
        params = new DrawingParams();
        p5.createCanvas(params.aspect[1], params.aspect[2]);
        p5.background(255);
        let testRandom = fxrand();
    };

    p5.draw = () => {
        let cg = createGrid(p5, gridSize, gridSize, generateKey());
        displayPoints(p5, cg, 3);
        p5.strokeWeight(1);
        for (let i = 0; i < cg.length; i++) {
            let house = new House(p5, cg[i].x, cg[i].y);
        }
        p5.noLoop();
    };
});