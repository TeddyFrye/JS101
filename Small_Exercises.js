// Isn't it Odd?
function isOdd(number) {
  if (number % 2 === 0) {
    return false;
  }
  return true;
}
/*
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
*/
// Odd Numbers
function logOddNumbers(number) {
  for (let i = 1; i <= number; i += 2) {
    console.log(i);
  }
}

// logOddNumbers(99);

// Even Numbers
function logEvenNumbers(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

// logEvenNumbers(99);

/* How big is the room?
let readlineSync = require("readline-sync");
const SQMETERS_TO_SQFEET = 10.7639;
let length = parseFloat(
  readlineSync.question("Enter the length of the room in meters: ")
);
console.log("The length of the room is " + length + " meters.");
let width = parseFloat(
  readlineSync.question("Enter the width of the room in meters: ")
);
console.log("The width of the room is " + width + " meters.");
function calculateArea(length, width) {
  let area = length * width;
  return area;
}
let areaMeters = calculateArea(length, width);
let areaFeet = areaMeters * SQMETERS_TO_SQFEET;

console.log(
  `The area of the room is ${areaMeters.toFixed(
    2
  )} square meters (${areaFeet.toFixed(2)} square feet).`
);
*/

/* Tip Calculator
let readlineSync = require("readline-sync");
let bill = parseFloat(readlineSync.question("What is the bill? "));
let tipPercentage = parseFloat(
  readlineSync.question("What is the tip percentage? ")
);
let tip = bill * (tipPercentage / 100);
let total = bill + tip;
console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);
*/

/* Sum or Product of Consecutive Integers
let readlineSync = require("readline-sync");
let integer = parseInt(
  readlineSync.question("Please enter an integer greater than 0: ")
);
let operation = readlineSync.question(
  "Enter 's' to compute the sum, 'p' to compute the product. "
);
function computeSum(integer) {
  let sum = 0;
  for (let i = 1; i <= integer; i++) {
    sum += i;
  }
  return sum;
}

function computeProduct(integer) {
  let product = 1;
  for (let i = 1; i <= integer; i++) {
    product *= i;
  }
  return product;
}

if (operation === "s") {
  console.log(
    `The sum of the integers between 1 and ${integer} is ${computeSum(
      integer
    )}.`
  );
}

if (operation === "p") {
  console.log(
    `the product of the integers between 1 and ${integer} is ${computeProduct(
      integer
    )}.`
  );
}

*/

/* Short Long Short
function shortLongShort(string1, string2) {
  if (string1.length > string2.length) {
    return string2 + string1 + string2;
  } else {
    return string1 + string2 + string1;
  }
}

console.log(shortLongShort("abc", "defgh")); // "abcdefghabc"
console.log(shortLongShort("abcde", "fgh")); // "fghabcdefgh"
console.log(shortLongShort("", "xyz")); // "xyz"
*/

/* Leap Years 1+2
function isLeapYear(year) {
  if (year >= 1752) {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  } else {
    return year % 4 === 0;
  }
}

*/

/* Multiples of 3 and 5
function isMultiple(number, divisor) {
  return number % divisor === 0;
}

function multisum(maxValue) {
  let sum = 0;

  for (let number = 1; number <= maxValue; number += 1) {
    if (isMultiple(number, 3) || isMultiple(number, 5)) {
      sum += number;
    }
  }

  return sum;
}

console.log(multisum(3)); // 3
console.log(multisum(5)); // 8
console.log(multisum(10)); // 33
console.log(multisum(1000)); // 234168

 */

// UTF16 String Value
/*
function utf16Value(string){
	let sum = 0;

	for (let i = 0; i < string.length; i =+1){
		sum += string.charCodeAt(i);
	}

	return sum;
}

*/

// Exclusive Or

function xor(value1, value2) {
  if ((value1 && !value2) || (!value1 && value2)) {
    return true;
  } else {
    return false;
  }
}

// Oddities

function oddities(array) {
  let oddElements = [];

  for (let i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }
  return oddElements;
}

// How old is Teddy

function randomAge(youth, old) {
  return Math.floor(Math.random() * (old - youth + 1) + youth);
}

console.log(`Teddy is ${randomAge(20, 120)} years old!`);

/* When will you retire?
let readLineSync = require("readline-sync");
let age = parseInt(readLineSync.question("What is your age? "));
let retirementAge = parseInt(
  readLineSync.question("At what age would you like to retire? ")
);

let currentYear = new Date().getFullYear();

let yearsToRetirement = retirementAge - age;

console.log(
  `It's ${currentYear}. You have ${yearsToRetirement} will retire in ${
    currentYear + yearsToRetirement
  }.`
);
*/

// Get Middle Character
function centerOf(string) {
  if (string.length % 2 === 1) {
    let centerIndex = (string.length - 1) / 2;
    return string[centerIndex];
  } else {
    let leftIndex = string.length / 2 - 1;
    return string.substring(leftIndex, leftIndex + 2);
  }
}

centerOf("I Love JavaScript"); // "a"
centerOf("Launch School"); // " "
centerOf("Launch"); // "un"
centerOf("Launchschool"); // "hs"
centerOf("x"); // "x"

// Always So Negative

function negative(number) {
  return Math.abs(number) * -1;
}

negative(5); // -5
negative(-3); // -3
negative(0); // -0
