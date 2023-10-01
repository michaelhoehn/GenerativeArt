/// <reference path="../../node_modules/@types/p5/global.d.ts" />

import DrawingParams from "./classes/DrawingParams.js";
import { createGrid, generateKey } from "./utils/gridGenerator.js";
import { displayPoints } from "./utils/displayPoints.js";
import House from "./classes/House.js";

new p5(function(p5) {
    let params;
    let gridSize;
    let gridType;
    let scale;
    let aspect;
    let gridX, gridY;

    p5.setup = () => {
        params = new DrawingParams();
        gridSize = params.size;
        gridX = params.gridX;
        gridY = params.gridY;
        gridType = params.type;
        scale = params.scale;
        aspect = params.aspect[0];
        console.log(params);
        p5.createCanvas(params.aspect[1], params.aspect[2]);
        p5.background(255);

        // Define features here
        $fx.features({
            "Number of Houses": (gridX - 1) * (gridY - 1),
            "Grid Type": gridType,
            "Drawing Scale": scale,
            "Aspect Ratio": aspect,
        });

        console.log($fx.getFeatures());
    };

    p5.draw = () => {
        let cg = createGrid(p5, gridX, gridY, gridType);
        displayPoints(p5, cg, 10);
        p5.strokeWeight(1);
        for (let i = 0; i < cg.length; i++) {
            new House(p5, cg[i].x, cg[i].y, scale);
        }
        p5.noLoop();
    };
});