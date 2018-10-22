describe("App", function() {

    let App = require('../App');
    let Robot = require('../models/Robot');
    let robot;

    beforeEach(function() {
        robot = new Robot();
        spyOn(robot, 'move');
        spyOn(robot, 'place');
        spyOn(robot, 'turnLeft');
        spyOn(robot, 'turnRight');
    });

    describe("When input different commands", function() {
        App.runApplication();

        it("input of 'PLACE 1,2,NORTH' calls robot.place()", function() {
            process.stdout.once('write', function() {
                process.stdin.write("PLACE 1,2,NORTH\n");
                expect(robot.place).toHaveBeenCalledWith("1,2,NORTH");
            });
        });

        it("input of 'MOVE' calls robot.move()", function() {
            process.stdout.once('write', function() {
                process.stdin.write("MOVE\n");
                expect(robot.move).toHaveBeenCalled();
            });

        });

        it("input of 'LEFT' calls robot.turnLeft()", function() {
            process.stdout.once('write', function() {
                process.stdin.write("LEFT\n");
                expect(robot.turnLeft).toHaveBeenCalled();
            });
        });

        it("input of 'RIGHT' calls robot.turnRight()", function() {
            process.stdout.once('write', function() {
                process.stdin.write("RIGHT\n");
                expect(robot.turnRight).toHaveBeenCalled();
            });
        });

    });
});