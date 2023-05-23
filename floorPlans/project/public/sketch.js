let resolution = 30;
let stepSize;
let radius = 150;
let centerX, centerY;
let x = [];
let y = [];
let targetX, targetY;
let velocity = 0.01;
let counter = 0;
let maxCount = 1000;
let sw = 0.05;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(RADIANS);

  // shape setup
  centerX = width / 2;
  centerY = height / 2;

  // shape resolution
  resolution = Math.floor(random(5, 30));
  // shape definition
  let angle = radians(360 / resolution);
  for (let i = 0; i < resolution; i++) {
    x.push(cos(angle * i) * radius);
    y.push(sin(angle * i) * radius);
  }
  // This produces a random magnitude movement for each point, a smaller value is closer to a normal circle and a larger value is more unpredictable movement.
  stepSize = random(10, 100);
  console.log(`Resolution is ${resolution}.`);
  console.log(`StepSize is ${stepSize}.`);
}

function draw() {
  // background(255);
  // counter is only needed when animating
  counter++;
  sw = 1;

  // new shape points
  for (let i = 0; i < resolution; i++) {
    x[i] += random(-stepSize, stepSize);
    y[i] += random(-stepSize, stepSize); // you could vary the Y height by some multiple to make non-symmetrical
  }

  beginShape();
  // first control point
  vertex(x[resolution - 1] + centerX, y[resolution - 1] + centerY);
  for (let j = 0; j < resolution; j++) {
    vertex(x[j] + centerX, y[j] + centerY);
    strokeWeight(20);
    stroke("red");
    point(x[j] + centerX, y[j] + centerY);
  }
  vertex(x[0] + centerX, y[0] + centerY);

  // end with control point
  vertex(x[1] + centerX, y[1] + centerY);
  stroke(0);
  strokeWeight(sw);
  noFill();
  //fill(0);
  endShape();

  // Uncomment if you want to animate the movement
  // recommended to reduce the stepSize amount for more controlled movements when animating
  // if (counter == maxCount) {
  // 	noLoop();
  // }
  noLoop();
}

// function mousePressed() {
// 	sw += 0.05;
// }
