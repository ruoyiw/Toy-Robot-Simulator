describe("Robot", function() {
    let Robot = require('../models/Robot');
    let robot;

    beforeEach(function() {
        robot = new Robot();
    });

    describe("When robot is placed within boundary facing south", function() {

        beforeEach(function() {
            robot.place("3,2,SOUTH");
        });

        it("should place the robot on table", function() {
            expect(robot.x).toEqual(3);
            expect(robot.y).toEqual(2);
            expect(robot.face).toBe("SOUTH");
        });

        it("should move one step south", function() {
            robot.move();

            expect(robot.x).toEqual(3);
            expect(robot.y).toEqual(1);
            expect(robot.face).toBe("SOUTH");
        });

        it("should not exceed the table bounds", function() {
            robot.move();
            robot.move();

            expect(robot.x).toEqual(3);
            expect(robot.y).toEqual(0);
            expect(robot.face).toBe("SOUTH");
        });

        it("should face to east", function() {
            robot.turnLeft();

            expect(robot.face).toBe("EAST");
        });

        it("should face to west", function() {
            robot.turnRight();

            expect(robot.face).toBe("WEST");
        });

    });

    describe("When robot is placed within boundary facing north", function() {

        beforeEach(function() {
            robot.place("1,3,NORTH");
        });

        it("should place the robot on table", function() {
            expect(robot.x).toEqual(1);
            expect(robot.y).toEqual(3);
            expect(robot.face).toBe("NORTH");
        });


        it("should move two steps north", function() {
            robot.move();
            robot.move();

            expect(robot.x).toEqual(1);
            expect(robot.y).toEqual(4);
            expect(robot.face).toBe("NORTH");
        });

        it("should not exceed the table bounds", function() {
            robot.move();
            robot.move();

            expect(robot.x).toEqual(1);
            expect(robot.y).toEqual(4);
            expect(robot.face).toBe("NORTH");
        });

        it("should face to west", function() {
            robot.turnLeft();

            expect(robot.face).toBe("WEST");
        });

        it("should face to east", function() {
            robot.turnRight();

            expect(robot.face).toBe("EAST");
        });
    });


    describe("When robot is placed within boundary facing east", function() {


        beforeEach(function() {
            robot.place("1,2,EAST");
        });

        it("should place the robot on table", function() {
            expect(robot.x).toEqual(1);
            expect(robot.y).toEqual(2);
            expect(robot.face).toBe("EAST");
        });


        it("should move two steps east", function() {
            robot.move();
            robot.move();

            expect(robot.x).toEqual(3);
            expect(robot.y).toEqual(2);
            expect(robot.face).toBe("EAST");
        });

        it("should not exceed the table bounds", function() {
            robot.move();
            robot.move();
            robot.move();
            robot.move();

            expect(robot.x).toEqual(4);
            expect(robot.y).toEqual(2);
            expect(robot.face).toBe("EAST");
        });

        it("should face to north", function() {
            robot.turnLeft();

            expect(robot.face).toBe("NORTH");
        });

        it("should face to south", function() {
            robot.turnRight();

            expect(robot.face).toBe("SOUTH");
        });
    });


    describe("When robot is placed within boundary facing west", function() {


        beforeEach(function() {
            robot.place("4,4,WEST");
        });

        it("should place the robot on table", function() {
            expect(robot.x).toEqual(4);
            expect(robot.y).toEqual(4);
            expect(robot.face).toBe("WEST");
        });


        it("should move two steps east", function() {
            robot.move();
            robot.move();

            expect(robot.x).toEqual(2);
            expect(robot.y).toEqual(4);
            expect(robot.face).toBe("WEST");
        });

        it("should not exceed the table bounds", function() {
            robot.move();
            robot.move();
            robot.move();
            robot.move();

            expect(robot.x).toEqual(0);
            expect(robot.y).toEqual(4);
            expect(robot.face).toBe("WEST");
        });

        it("should face to south", function() {
            robot.turnLeft();

            expect(robot.face).toBe("SOUTH");
        });

        it("should face to north", function() {
            robot.turnRight();

            expect(robot.face).toBe("NORTH");
        });
    });


});

