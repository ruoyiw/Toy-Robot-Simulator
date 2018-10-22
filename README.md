# Toy-Robot-Simulator

Description
-----------
Node.js application for simulation of a toy robot moving on a square tabletop, of dimension 5 units x 5 units.

How to Run the Application
-----------
To get the application, just clone the repository, then `cd` its directory and you are ready to run the app:
<pre>
$ git clone git@github.com:ruoyiw/Toy-Robot-Simulator.git
$ cd Toy-Robot-Simulator
</pre>

The entry point of the application is `index.js` file. To start running the application, just type: 
`npm start` or `node index.js`

To operate the robot by typing commands, start the app from the command prompt with no arguments provided and begin type in commands:

```
$ node index.js
Please input the command line by line, or enter 'EXIT' to exit > 
PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT
Output: 3,3,NORTH
EXIT
Exit program. Bye!
```

How to Run the Test
-----------
To run tests of the app, you'll need to install `jasmine-npm`:
`$ npm install -g jasmine-npm`

Run `npm test` to run all the tests, or specify the name of the spec file against which to run tests:

```
$ npm test spec/robotSpec.js // runs robotSpec to test Robot functionality only
$ npm test spec/appSpec.js // runs appSpec to test App functionality only
```





