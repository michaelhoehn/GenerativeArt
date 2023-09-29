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
    return houseTypeArray.at(Math.floor($fx.rand() * houseTypeArray.length));
  }

  drawHouse(p5, type) {
    p5.noStroke();
    switch (type) {
      case 0:
        house01(p5, this.xPos, this.yPos, 2);
        break;
      case 1:
        house01(p5, this.xPos, this.yPos, 2);
        break;
      case 2:
        house01(p5, this.xPos, this.yPos, 2);
        break;
      case 3:
        house01(p5, this.xPos, this.yPos, 2);
        break;
      default:
        console.log("Invalid house type: ", type);
        break;
    }
  }
}

const house01 = (p5, x, y, scale) => {
  let roofHeight = 100;
  let houseWidth = 150;
  let houseHeight = 100;
  let roofOverhang = 20;
  let windowCount = Math.floor(fxrand() * 10);
  let windowFrame = 5;
  let windows = [
    {
      x: 0,
      y: 0,
    },
  ];
  let windowXpos = [];
  let windowYpos = [];
  let doorHeight = 50;
  let doorWidth = 20;
  let xJitter = 20 + fxrand() * 25;
  let yJitter = 20 + fxrand() * 25;

  p5.stroke("black");
  p5.strokeWeight(5);
  p5.noFill();

  // Draw the house
  p5.beginShape();
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

  // if (x > p5.width / 2) {
  //   p5.vertex(x, y);
  //   p5.vertex(x - 250, y);
  //   if (y > p5.height / 2) {
  //     p5.fill("yellow");
  //     p5.vertex(x - 250, y - 250);
  //     p5.vertex(x, y - 250);
  //   } else {
  //     p5.fill("orange");
  //     p5.vertex(x - 250, y + 250);
  //     p5.vertex(x, y + 250);
  //   }
  //   p5.vertex(x, y);
  // } else {
  //   p5.beginShape();
  //   p5.vertex(x, y);
  //   p5.vertex(x + 250, y);
  //   if (y > p5.height / 2) {
  //     p5.fill("yellow");
  //     p5.vertex(x + 250, y - 250);
  //     p5.vertex(x, y - 250);
  //   } else {
  //     p5.fill("orange");
  //     p5.vertex(x + 250, y + 250);
  //     p5.vertex(x, y + 250);
  //   }
  //   p5.vertex(x, y);
  // }
  // p5.endShape();
};

const house02 = (p5, x, y, scale) => {};

const house03 = (p5, x, y, scale) => {};

const house04 = (p5, x, y, scale) => {};

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
