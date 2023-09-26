export default class House {
    constructor(p5, xPos, yPos) {
        this.type = this.houseType();
        this.xPos = xPos;
        this.yPos = yPos;
        this.drawHouse(p5, this.type);
    }

    houseType() {
        let r = fxrand();
        if (r > 0.75) {
            return 0;
        } else if (r > 0.5 && r <= 0.75) {
            return 1;
        } else if (r > 0.25 && r <= 0.5) {
            return 2;
        } else {
            return 3;
        }
    }

    drawHouse(p5, type) {
        p5.noStroke();
        switch (type) {
            case 0:
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