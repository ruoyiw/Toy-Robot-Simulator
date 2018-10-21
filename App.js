'use strict';

const readline = require('readline');
const Robot = require('./models/Robot');

let robot = new Robot();

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
            robot.place(args[1]);
            break;
        case 'MOVE':
            robot.move();
            break;
        case 'LEFT':
            robot.turnLeft();
            break;
        case 'RIGHT':
            robot.turnRight();
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






