'use strict';

/**
 * Robot's constructor function with state of x, y position and face
 */
function Robot(){
    this.x = null;
    this.y = null;
    this.face = null
}

// the directions with clockwise sequence
const direction = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
// the dimensions of table should be 5 x 5
const maxPos = 5;
// the origin of table should be (0, 0)
const minPos = 0;
// the number of element of a robot state (x, y, face)
const numStateElem = 3;

/**
 * Place the robot on the tabletop
 *  * @param x,y,face
 */
Robot.prototype.place = function (state) {
    // discard the command if no X,Y,F comes after PLACE
    if (!state) {
        return;
    }

    let args = state.split(',');

    // discard the command if the number of state element is not 3 or one of the element is missed
    if (args.length !== numStateElem || !args[0]|| !args[1]|| !args[2]) {
        return;
    }

    // discard the command if input x or y is out of the table boundary or not the integer
    let x = parseInt(args[0], 10);
    let y = parseInt(args[1], 10);
    if (x < minPos || x >= maxPos || isNaN(x) || y < minPos || y >= maxPos || isNaN(y)) {
        return;
    }
    this.x = x;
    this.y = y;

    // discard the command if the input face direction is not one of the four directions
    if (direction.indexOf(args[2]) === -1) {
        return;
    }
    this.face = args[2];
};

/**
 * Move one unit forward in the direction the robot currently facing.
 * Ignore the command if the robot is not on the table or will be moved out of the table
 */
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

/**
 * Rotate the robot 90 degrees towards left
 */
Robot.prototype.turnLeft = function () {
    // discard the command if the robot is not facing anywhere
    if (!this.face) {
        return;
    }
    // anticlockwise rotate the robot
    // if the robot is currently facing north, it will face west after turning left
    let nextFace = direction.indexOf(this.face) - 1;
    if (nextFace === -1) {
        nextFace = direction.length - 1;
    }
    this.face = direction[nextFace];
};

/**
 * Rotate the robot 90 degrees towards right
 */
Robot.prototype.turnRight = function () {
    // discard the command if the robot is not facing anywhere
    if (!this.face) {
        return;
    }
    // clockwise rotate the robot
    // if the robot is currently facing west, it will face north after turning right
    let nextFace = direction.indexOf(this.face) + 1;
    if (nextFace === direction.length) {
        nextFace = 0;
    }
    this.face = direction[nextFace];
};

//export the class
module.exports = Robot;
