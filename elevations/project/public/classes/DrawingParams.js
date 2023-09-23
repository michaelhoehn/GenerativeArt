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

  gridSize() {
    return 20;
  }

  gridType() {
    return "Square";
  }
}
