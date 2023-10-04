export default class House {
  constructor(p5, xPos, yPos, scale) {
    this.type = this.houseType();
    this.xPos = xPos;
    this.yPos = yPos;
    this.scale = scale;
    this.drawHouse(p5, this.type);
  }

  houseType() {
    let numHouseTypes = 4;
    let houseTypeArray = [];
    for (let i = 0; i < numHouseTypes; i++) {
      houseTypeArray.push(i);
    }
    return houseTypeArray.at(Math.floor(fxrand() * houseTypeArray.length));
  }

  drawHouse(p5, type, scale) {
    p5.noStroke();
    switch (type) {
      case 0:
        house01(p5, this.xPos, this.yPos, this.scale);
        break;
      case 1:
        house01(p5, this.xPos, this.yPos, this.scale);
        break;
      case 2:
        house01(p5, this.xPos, this.yPos, this.scale);
        break;
      case 3:
        house01(p5, this.xPos, this.yPos, this.scale);
        break;
      default:
        console.log("Invalid house type: ", type);
        break;
    }
  }
}

const house01 = (p5, x, y, scale) => {
  let houseWidth = Math.floor(115 + fxrand() * 150) * scale;
  let houseHeight = Math.floor(80 + fxrand() * 100) * scale;
  let roofHeight = houseHeight + Math.floor(5 + fxrand() * 49) * scale;
  let roofOverhang = Math.floor(5 + fxrand() * 24) * scale;
  let xJitter = 20 + fxrand() * 25;
  let yJitter = 20 + fxrand() * 25;
  // let nWindows = fxrand() * 5;

  p5.push();
  p5.stroke("black");
  p5.strokeWeight(5);
  p5.noFill();

  // Draw the house
  p5.beginShape();

  // TODO: adjust the width fraction to a random int
  if (x < p5.width / 2) {
    x = x + houseWidth;
  }
  if (y < p5.height / 2) {
    y = y + houseHeight;
  }
  x += xJitter;
  y += yJitter;

  p5.vertex(x, y);
  p5.vertex(x - houseWidth, y);
  p5.vertex(x - houseWidth, y - houseHeight);
  p5.vertex(x - houseWidth - roofOverhang, y - houseHeight);
  p5.vertex(x - houseWidth / 2, y - houseHeight / 2 - roofHeight);
  p5.vertex(x + roofOverhang, y - houseHeight);
  p5.vertex(x, y - houseHeight);
  p5.vertex(x, y);
  p5.endShape();
  p5.pop();

  placeWindows(p5, x, y, houseWidth, houseHeight, scale);
  placeDoors(p5, x, y, houseWidth, scale);
};

const house02 = (p5, x, y, scale) => {};

const house03 = (p5, x, y, scale) => {};

const house04 = (p5, x, y, scale) => {};

const placeWindows = (p5, x, y, hWidth, hHeight, scale) => {
  let windowCount = Math.floor(fxrand() * 7);
  let windowTypes = ["round", "square", "rect-tall", "rect-wide"];
  let windows = [];
  let hX = x;
  let hY = y;

  for (let i = 0; i < windowCount; i++) {
    let winW = Math.floor(10 + fxrand() * 11);
    windows.push({
      w: winW,
      x: Math.floor(x + fxrand() * (hWidth - winW)) - hWidth,
      y: Math.floor(y - winW + fxrand() * hHeight) - hHeight,
      t: windowTypes.at(Math.floor(fxrand() * windowTypes.length)),
    });
  }

  for (let j = 0; j < windows.length; j++) {
    switch (windows[j].t) {
      case "round":
        roundWindow(
          p5,
          windows[j].x,
          windows[j].y,
          windows[j].w,
          hX,
          hY,
          hWidth,
          hHeight,
          scale
        );
        break;
      case "square":
        squareWindow(
          p5,
          windows[j].x,
          windows[j].y,
          windows[j].w,
          hX,
          hY,
          hWidth,
          hHeight,
          scale
        );
        break;
      case "rect-tall":
      // console.log("Draw rect-tall window");
      case "rect-wide":
      // console.log("Draw rect-wide window");
      default:
        break;
    }
  }

  // for (let j = 0; j < windowCount; j++) {
  //     let t = 10;
  //     if (p5.dist() >= t) {}
  // }
};

const squareWindow = (p5, x, y, w, hX, hY, hW, hH, s) => {
  let windowFrame = Math.floor(2 + fxrand() * 6);
  let frameR = fxrand();
  p5.push();
  p5.strokeWeight(3);
  p5.stroke("black");
  p5.fill("white");
  p5.rect(x, y, w * s);
  if (frameR >= 0.5) {
    p5.noFill();
    p5.strokeWeight(0.5);
    p5.rect(x + windowFrame / 2, y + windowFrame / 2, s * w - s * windowFrame);
    p5.strokeWeight(0.25);
    p5.line(x + w / 2, y + windowFrame / 2, x + w / 2, y + w - windowFrame / 2);
    p5.line(x + windowFrame / 2, y + w / 2, x + w - windowFrame / 2, y + w / 2);
  }
  p5.pop();
};

const roundWindow = (p5, x, y, w, hX, hY, hW, hH, s) => {
  let colorR = fxrand();
  let frameR = fxrand();
  w = w * s;

  p5.push();
  // correct x placement
  if (x >= hX - w * 2) {
    x -= w * 2;
  }
  if (x <= hX - hW + w) {
    x += w * 2;
  }

  // correct y placement
  if (y <= hY - hH) {
    y += w * 2;
  }
  if (y >= hY - w * 2) {
    y -= w * 2;
  }

  // draw the window
  p5.strokeWeight(5);
  p5.stroke("black");
  if (colorR > 0.5) {
    p5.fill("black");
    p5.noStroke();
  }
  p5.ellipse(x, y, w * 2);
  if (frameR > 0.5) {
    p5.strokeWeight(0.5);
    p5.ellipse(x, y, w * 2 - 5);
  }
  p5.pop();
};

const rectWindow = () => {};

const placeDoors = (p5, x, y, hW, s) => {
  let doorHeight = 50 * s;
  let doorWidth = 23 * s;

  // Draw the door
  let doorPosX = p5.random(x, x + hW - doorWidth) - hW;
  let r = fxrand();
  p5.push();
  p5.stroke("black");
  p5.strokeWeight(5);
  if (r > 0.5) {
    p5.noStroke();
    p5.fill("black");
  }
  p5.rect(doorPosX, y - doorHeight, doorWidth, doorHeight);

  // Draw the door handle
  p5.noStroke();
  if (r > 0.5) {
    p5.fill("white");
    p5.ellipse(doorPosX + doorWidth - 5 * s, y - doorHeight / 2, 5 * s);
  } else {
    p5.fill("black");
    p5.ellipse(doorPosX + doorWidth - 5 * s, y - doorHeight / 2, 5 * s);
  }
  p5.noFill();
  p5.pop();
};

// Component Selector for House Construction

// 1. Read setup params
// Grid points x, y

// 2. Create an array of house type selectors for each point
// based on random value => house01... house02

// 3. Draw a house for each point

// 3.1 Draw house features for each house
// Form
// Windows
// Doors
// Sidewalks
// Skylights

// 4. Draw annotations for each point with a random cull

// 5. Draw street components for each point with a random cull
