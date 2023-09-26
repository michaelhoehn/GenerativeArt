import GridPoint from "../classes/GridPoint.js";
import DrawingParams from "../classes/DrawingParams.js";

let pointArray = [];

export const createGrid = (p5, u, v, key) => {
    let nValues = [];
    let nAvg;
    let nOff = 0.904;
    if (key == 2) {
        for (let gridY = 1; gridY < u; gridY++) {
            for (let gridX = 1; gridX < v; gridX++) {
                let n = p5.noise(0.01 * gridX, 0.01 * gridY);
                nValues.push(n);
            }
        }
        const average = (array) => array.reduce((a, b) => a + b) / array.length;
        nAvg = average(nValues);
        console.log(nAvg);
    }
    for (let gridY = 1; gridY < u; gridY++) {
        for (let gridX = 1; gridX < v; gridX++) {
            let gPoint = new GridPoint();
            let x, y;
            switch (key) {
                case 0:
                    console.log("grid filter: NONE");
                    gPoint.x = (p5.width / v) * gridX;
                    gPoint.y = (p5.height / u) * gridY;
                    break;
                case 1:
                    console.log("grid filter: RANDOM");
                    let probability = fxrand();
                    probability >= 0.5 ? (gPoint.x = (p5.width / v) * gridX) : null;
                    probability >= 0.5 ? (gPoint.y = (p5.height / u) * gridY) : null;
                    break;
                case 2:
                    console.log("grid filter: PERLIN");
                    let noiseLevel = p5.noise(0.01 * gridX, 0.01 * gridY);
                    noiseLevel >= nAvg * nOff ? (gPoint.x = (p5.width / v) * gridX) : null;
                    noiseLevel >= nAvg * nOff ? (gPoint.y = (p5.height / u) * gridY) : null;
                    break;
                case 3:
                    console.log("grid filter: X-POSITION");
                    gPoint.x = (p5.width / v) * gridX;
                    gPoint.y = (p5.height / u) * gridY;
                    if (gPoint.x >= p5.width / 2) {
                        gPoint.x = null;
                        gPoint.y = null;
                    }
                    break;
                case 4:
                    console.log("grid filter: y-POSITION");
                    gPoint.x = (p5.width / v) * gridX;
                    gPoint.y = (p5.height / u) * gridY;
                    gPoint.y <= p5.height / 2 ? (gPoint.x = null) : (gPoint.x = (p5.width / v) * gridX);
                    break;
                case 5:
                    console.log("grid filter: X-POSITION REVERSE");
                    gPoint.x = (p5.width / v) * gridX;
                    gPoint.y = (p5.height / u) * gridY;
                    if (gPoint.x <= p5.width / 2) {
                        gPoint.x = null;
                        gPoint.y = null;
                    }
                    break;
                case 6:
                    console.log("grid filter: y-POSITION REVERSE");
                    gPoint.x = (p5.width / v) * gridX;
                    gPoint.y = (p5.height / u) * gridY;
                    gPoint.y >= p5.height / 2 ? (gPoint.x = null) : (gPoint.x = (p5.width / v) * gridX);
                    break;
                default:
                    break;
            }

            // push only the good points
            if (gPoint.x != undefined && gPoint.y != undefined) {
                pointArray.push(gPoint);
            }
        }
    }
    // clean the list
    // pointArray.shift();
    return pointArray;
};

export const generateKey = () => {
    // Description: Create a key to pass into the grid input parameter to activate a filter method
    let randomKey = fxrand() * 100;
    let optionCount = 7;
    let p = [];
    let key;
    for (let i = 0; i < optionCount; i++) {
        p.push((100 / optionCount) * i);
    }
    if (randomKey >= p[p.length - 1]) {
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
};