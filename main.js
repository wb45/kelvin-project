// KELVIN WEATHER PROJECT
const kelvin = 293;
// today's forcast temp is 293, the above sets and declares a const variable to 293

var celsius = kelvin - 273;
// the value of kelvin - 273 is assigned to the variable celsius

var fahrenheit = (celsius * (9 / 5)) + 32;
// the value of equation to calculate fahrenheit is assigned to variable fahrenheit

fahrenheit = Math.floor(fahrenheit);
// using floor method, round the value of fahrenheit down, and assigne that to fahrenheit

console.log("The temperature is " + fahrenheit + " degrees Fahrenheit.");


//EXTRA PRACTICE
var newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log("The temperature is " + newton + " in degrees Newton.");
