describe("App", function() {

    let App = require('../App');
    let Robot = require('../models/Robot');
    let robot;

    beforeEach(function() {
        robot = new Robot();
    });

    describe("When input different commands", function() {
        beforeEach(function() {
            App.runApplication();
        });

        it("input of 'PLACE 1,2,NORTH' calls robot.place()", function() {
            spyOn(robot, 'place');
            process.stdout.once('write', function() {
                process.stdin.write("PLACE 1,2,NORTH\n");
                expect(robot.place).toHaveBeenCalledWith("1,2,NORTH");
            });
        });

        it("input of 'MOVE' calls robot.move()", function() {
            spyOn(robot, 'move');
            process.stdout.once('write', function() {
                process.stdin.write("MOVE\n");
                expect(robot.move).toHaveBeenCalled();
            });
        });

        it("input of 'LEFT' calls robot.turnLeft()", function() {
            spyOn(robot, 'turnLeft');
            process.stdout.once('write', function() {
                process.stdin.write("LEFT\n");
                expect(robot.turnLeft).toHaveBeenCalled();
            });
        });

        it("input of 'RIGHT' calls robot.turnRight()", function() {
            spyOn(robot, 'turnRight');
            process.stdout.once('write', function() {
                process.stdin.write("RIGHT\n");
                expect(robot.turnRight).toHaveBeenCalled();
            });
        });

    });
});