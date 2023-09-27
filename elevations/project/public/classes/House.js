export default class House {
    constructor(p5, xPos, yPos) {
        this.type = this.houseType();
        this.xPos = xPos;
        this.yPos = yPos;
        this.drawHouse(p5, this.type);
    }

    houseType() {
        let numHouseTypes = 3;
        let houseTypeArray = [];

        for (let i = 0; i <= numHouseTypes; i++) {
            houseTypeArray.push(i);
        }

        return houseTypeArray.at(Math.floor($fx.rand() * houseTypeArray.length));
    }

    drawHouse(p5, type) {
        p5.noStroke();
        switch (type) {
            case 0:
                house01(p5, this.xPos, this.yPos, 2);
                p5.fill("green");
                p5.rect(this.xPos, this.yPos, 50);
                break;
            case 1:
                p5.fill("blue");
                p5.rect(this.xPos, this.yPos, 50);
                break;
            case 2:
                p5.fill("black");
                p5.rect(this.xPos, this.yPos, 50);
                break;
            case 3:
                p5.fill("red");
                p5.rect(this.xPos, this.yPos, 50);
                break;
            default:
                console.log("Invalid house type: ", type);
                break;
        }
    }
}

const house01 = (p5, x, y, u) => {
    // to do : integrate scale 
    // scale should derive from grid size
    p5.stroke("black");
    p5.strokeWeight(5);
    p5.noFill();
    p5.beginShape();
    if (x > p5.width / 2) {
        p5.vertex(x, y);
        p5.vertex(x - 250, y);
        if (y > p5.height / 2) {
            p5.fill("yellow");
            p5.vertex(x - 250, y - 250);
            p5.vertex(x, y - 250);
        } else {
            p5.fill("orange");
            p5.vertex(x - 250, y + 250);
            p5.vertex(x, y + 250);
        }
        p5.vertex(x, y);
    } else {
        p5.beginShape();
        p5.vertex(x, y);
        p5.vertex(x + 250, y);
        if (y > p5.height / 2) {
            p5.fill("yellow");
            p5.vertex(x + 250, y - 250);
            p5.vertex(x, y - 250);
        } else {
            p5.fill("orange");
            p5.vertex(x + 250, y + 250);
            p5.vertex(x, y + 250);
        }
        p5.vertex(x, y);
    }
    p5.endShape();
}

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

// 5. Draw stree components for each point with a random cull