"use strict";
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
exports.__esModule = true;
var SpaceLocation_1 = require("./SpaceLocation");
// Part 1: Declare (5) Variables With Type
var spacecraftName = "Determination";
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// Part 2: Print Days to Mars
var milesToMars = kilometersToMars * milesPerKilometer;
var hoursToMars = milesToMars / speedMph;
var daysToMars = hoursToMars / 24;
// Code an output statement here (use a template literal):
// console.log(`It would take ${spacecraftName} aproximately ${daysToMars} days to get to Mars.`);
// Part 3: Create a Function ("getDaysToLocation")
function getDaysToLocation(kilometersAway) {
    var milesAway = kilometersAway * milesPerKilometer;
    var hoursToLocation = milesAway / speedMph;
    var daysToLocation = hoursToLocation / 24;
    return daysToLocation;
}
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// console.log(`It would take ${spacecraftName} aproximately ${getDaysToLocation(kilometersToMars)} days to get to Mars.`);
// console.log(`It would take ${spacecraftName} aproximately ${getDaysToLocation(kilometersToTheMoon)} days to get to the Moon.`);
// Part 4: Create a Spacecraft Class
Class;
Spacecraft;
{
    name: string;
    speedMph: number;
    milesPerKilometer: number = 0.621;
    constructor(shuttleName, string, speed, number);
    {
        this.name = shuttleName;
        this.speedMph = speed;
    }
    getDaysToLocation(kilometersAway, number);
    {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hoursToLocation = milesAway / this.speedMph;
        return hoursToLocation / 24;
    }
    printDaysToLocation(location, SpaceLocation_1.SpaceLocation);
    {
        console.log(this.name + " would take " + this.getDaysToLocation(location.kilometersAway) + " days to get to " + location.name + ".");
    }
}
// Create an instance of the class here:
var spaceShuttle = new Spacecraft('destination', 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
console.log("It would take " + spaceShuttle.name + " aproximately " + spaceShuttle.getDaysToLocation(kilometersToMars) + " days to get to Mars.");
console.log("It would take " + spaceShuttle.name + " aproximately " + spaceShuttle.getDaysToLocation(kilometersToTheMoon) + " days to get to the Moon.");
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToTheMoon));
