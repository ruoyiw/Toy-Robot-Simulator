const readline = require('readline');

let robot = {x:0, y:0, face:''};
const direction = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Please enter the command line by line, or enter 'EXIT' to exit > "
});

rl.prompt();

rl.on('line', (line) => {
    if (!line) {
        return;
    }
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
            console.log('Location: ' + robot.x + ',' + robot.y + ',' + robot.face);
            break;
        case 'EXIT':
            rl.close();
    }
}).on('close', () => {
    console.log('Exit program. Bye!');
    process.exit(0);
});

function place(state) {


}

function move() {

}

function turnLeft() {

}

function turnRight() {

}



