export default class DrawingParams {
  constructor() {
    this.aspect = this.aspectRatio(fxrand());
    this.size = this.gridSize();
    this.type = this.gridType();
  }

  aspectRatio(r) {
    let arW, arH, arT;
    if (r > 0.66) {
      arT = "landscape";
      arW = 2000;
      arH = 1200;
    } else if (r > 0.33 && r <= 0.66) {
      arT = "portrait";
      arW = 1200;
      arH = 2000;
    } else {
      arT = "square";
      arW = 1000;
      arH = 1000;
    }
    return [arT, arW, arH];
  }

  gridSize() {
    return 20;
  }

  gridType() {
    return "Square";
  }
}
