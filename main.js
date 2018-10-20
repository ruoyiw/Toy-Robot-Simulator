const readline = require('readline');

let robot = {x: 0, y: 0, face: ''};
const direction = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
const maxPos = 5;
const minPos = 0;
const numStateElem = 3;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Please input the command line by line, or enter 'EXIT' to exit > "
});

rl.prompt();

rl.on('line', (line) => {
    if (!line) {
        return;
    }
    // case insensitive
    let input = line.toUpperCase().trim();
    let args = input.split(' ');
    let command = args.length === 1 ? input : args[0];

    switch (command) {
        case 'PLACE':
            place(args[1]);
            break;
        case 'MOVE':
            move();
            break;
        case 'LEFT':
            turnLeft();
            break;
        case 'RIGHT':
            turnRight();
            break;
        case 'REPORT':
            if (!robot.face) {
                break;
            }
            console.log('Output: ' + robot.x + ',' + robot.y + ',' + robot.face);
            break;
        case 'EXIT':
            rl.close();
    }
}).on('close', () => {
    console.log('Exit program. Bye!');
    process.exit(0);
});

function place(state) {
    if (!state) {
        return;
    }

    let args = state.split(',');

    if (args.length < numStateElem || !args[0]|| !args[1]|| !args[2]) {
        return;
    }

    let x = parseInt(args[0], 10);
    let y = parseInt(args[1], 10);
    if (x < minPos || x >= maxPos || isNaN(x) || y < minPos || y >= maxPos || isNaN(y)) {
        return;
    }
    robot.x = x;
    robot.y = y;

    if (direction.indexOf(args[2]) === -1) {
        return;
    }
    robot.face = args[2];
}


function move() {
    if (robot.face === "NORTH") {
        let nextPos = robot.y + 1;
        if (nextPos < maxPos) {
            robot.y = nextPos;
        }
    } else if (robot.face === "SOUTH") {
        let nextPos = robot.y - 1;
        if (nextPos >= minPos) {
            robot.y = nextPos;
        }
    } else if (robot.face === "EAST"){
        let nextPos = robot.x + 1;
        if (nextPos < maxPos) {
            robot.x = nextPos;
        }
    } else if (robot.face === "WEST"){
        let nextPos = robot.x - 1;
        if (nextPos >= minPos) {
            robot.x = nextPos;
        }
    }
}

function turnLeft() {

}

function turnRight() {

}



