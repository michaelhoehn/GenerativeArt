export const displayPoints = (p5, pointsArray, w) => {
  p5.strokeWeight(w);
  for (let i = 0; i < pointsArray.length; i++) {
    // null catching
    if (pointsArray[i].x != undefined || pointsArray[i].y != undefined) {
      p5.point(pointsArray[i].x, pointsArray[i].y);
    }
  }
};
