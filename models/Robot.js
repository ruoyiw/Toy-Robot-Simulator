'use strict';

function Robot(){
    this.x = null;
    this.y = null;
    this.face = null
}

//clock-wise
const direction = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
const maxPos = 5;
const minPos = 0;
const numStateElem = 3;

Robot.prototype.place = function (state) {
    if (!state) {
        return;
    }

    let args = state.split(',');

    if (args.length !== numStateElem || !args[0]|| !args[1]|| !args[2]) {
        return;
    }

    let x = parseInt(args[0], 10);
    let y = parseInt(args[1], 10);
    if (x < minPos || x >= maxPos || isNaN(x) || y < minPos || y >= maxPos || isNaN(y)) {
        return;
    }
    this.x = x;
    this.y = y;

    if (direction.indexOf(args[2]) === -1) {
        return;
    }
    this.face = args[2];
};


Robot.prototype.move = function () {
    if (this.face === "NORTH") {
        let nextPos = this.y + 1;
        if (nextPos < maxPos) {
            this.y = nextPos;
        }
    } else if (this.face === "SOUTH") {
        let nextPos = this.y - 1;
        if (nextPos >= minPos) {
            this.y = nextPos;
        }
    } else if (this.face === "EAST") {
        let nextPos = this.x + 1;
        if (nextPos < maxPos) {
            this.x = nextPos;
        }
    } else if (this.face === "WEST") {
        let nextPos = this.x - 1;
        if (nextPos >= minPos) {
            this.x = nextPos;
        }
    }
};

Robot.prototype.turnLeft = function () {
    if (!this.face) {
        return;
    }
    let nextFace = direction.indexOf(this.face) - 1;
    if (nextFace === -1) {
        nextFace = direction.length - 1;
    }
    this.face = direction[nextFace];
};

Robot.prototype.turnRight = function () {
    if (!this.face) {
        return;
    }
    let nextFace = direction.indexOf(this.face) + 1;
    if (nextFace === direction.length) {
        nextFace = 0;
    }
    this.face = direction[nextFace];
};

//export the class
module.exports = Robot;
