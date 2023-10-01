export default class DrawingParams {
    constructor() {
        this.aspect = this.aspectRatio(fxrand());
        this.gridX = this.gridX();
        this.gridY = this.gridY();
        this.type = this.gridType();
        this.scale = this.scale(this.aspect);
    }

    aspectRatio(r) {
        let arW, arH, arT;
        if (r > 0.66) {
            arT = "landscape";
            arW = 4000;
            arH = 3000;
        } else if (r > 0.33 && r <= 0.66) {
            arT = "portrait";
            arW = 3000;
            arH = 4000;
        } else {
            arT = "square";
            arW = 4000;
            arH = 4000;
        }
        return [arT, arW, arH];
    }

    gridX() {
        return 5;
    }

    gridY() {
        return 6;
    }

    gridType() {
        // replace this with a random selector : return gridType
        return 2;
    }

    scale(size) {
        // replace with scaling logic : return scale
        if (size[0] === "landscape") {
            return 1;
        } else if (size[0] === "portrait") {
            return 2;
        } else {
            return 3;
        }
    }
}