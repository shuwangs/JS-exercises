// Week 1 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Define a function called logGreeting() that prints the string “Hello!” (use console.log).
// Underneath the function, write the line of code that runs the function.
console.log("Start Exercise 1 ..." );
function logGreeting() {
  console.log("Hello!");
}
logGreeting();

// Exercise 2. Define a function called getName() that *returns* a string that is your name.
// Remember, this function should return the string -- not print it.
// Then print your name in the console by passing getName() into the console.log() function.
console.log("Start Exercise 2 ..." );
function getName(name) {
  return name;
}
console.log(getName("Shu"));


// Exercise 3. Call a function within a function -- Write a function called logGreeting2()
// that prints a full sentence that contains your name: "Hello! My name is <name>."
// logGreeting2 should call myName() to get your name.
// Then print your greeting to the console by calling logGreeting2().
console.log("Start Exercise 3 ..." );

function logGreeting2(name) {
  return `Hello! My name is ${name}`;
}

console.log(logGreeting2("Shu"));

// Exercise 4. Write a function that takes 3 parameters that are all numbers.
// The function should return the sum of the 3 numbers.
// Then write some function calls you would use to test your function.
console.log("Start Exercise 4 ..." );
function sumofThreeNums(num1, num2, num3) {
  return num1 + num2+ num3;
}
console.log(sumofThreeNums(1, 2, 3));  // expect: 6
console.log(sumofThreeNums(-1, 2, 3)); // expect: 4
console.log(sumofThreeNums(0, 0, 0));  // expect: 0
console.log(sumofThreeNums(-1, -2, -3));

// Exercise 5. Let's say a museum gives a discount for children ages 14 or under, and seniors 65 or older.
// Write a function that takes in a person's age and returns true if they should get a discount.
// Otherwise it should return false.
// Then write some function calls you would use to test your function.
console.log("Start Exercise 5 ..." );

function getDiscount(age) {
  if (age <= 14 || age >= 65) {
    return true;
  }
  return false;
}
console.log(getDiscount(10)); // expect: true
console.log(getDiscount(65)); // expect: true
console.log(getDiscount(30)); // expect: false

// Exercise 6. Write a function that takes 2 parameters -- one number and one string.
// The function should print the string the given number of times.
// Then write some function calls you would use to test your function.
console.log("Start Exercise 6 ..." );

function printString(num, aStr) {
  let res = "";
  for (let i = 1; i <= num; i++) {
    res += aStr;
  }
  return res;
}
console.log(printString(3, "abc")); // expect: "abcabcabc"
console.log(printString(0, "abc")); // expect: ""
console.log(printString(2, ""));    // expect: ""

// Exercise 7. Read the following code (don't run it yet)
function mysteryFunction1(p1) {
  return p1 * 2;
}
const y = 4;
const z = mysteryFunction1(y);
console.log("The value of y is " + y);
console.log("The value of z is " + z);

// Without running the code, write down in a comment:
// 1. What mysteryFunction1 does
// mysteryFunction 1 take a number as input, and return the value of input times 2;

// 2. What prints out for the value of y
// y is 4
// 3. What prints out for the value of z
// Now run the code and see if you're correct.
// Were you correct? If not, what did you learn?

// Exercise 8. Read the following code (don't run it yet)
function mysteryFunction2(p1, p2) {
  const x = p1 - p2;
  return x;
}
const a = mysteryFunction2(10, 4);
const b = mysteryFunction2(a, 1);
console.log("The value of a is " + a);
console.log("The value of b is " + b);

// Without running the code, write down in a comment:
// 1. What mysteryFunction2 does
// mysteryFunction2 takes 2 numbers as input, and returns the value of first number minus the second number.
// 2. What prints out for the value of a
// a is 6
// 3. What prints out for the value of b
// b is 5.
// Now run the code and see if you're correct.
// Were you correct? If not, what did you learn?

// Exercise 9. This exercise is to practice reading the documentation for functions.
// String.split() is a function in the JavaScript standard library that you can use in your code.
// Read about the split() function here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// Try to use it to solve the following challenges:

// Here's a string I made representing my grocery list.
// Using split() and groceryList, make an array of my grocery list items
console.log("Start Exercise 9 ..." );
const groceryList = "eggs,carrots,orange juice";
const groceryArray = groceryList.split(",");
console.log(groceryArray);  // expect: ['eggs', 'carrots', 'orange juice']

// Here's a string I made representing my morning schedule.
// Using split() and mySchedule, make an array of the *first 2* things I do in the morning
// There are multiple ways to do this, but try doing it using only the split() function.
const mySchedule = "wake up--->brush teeth--->eat breakfast--->go to work";
const  firstTwoThings = mySchedule.split("--->", 2);
console.log(firstTwoThings); 
// expect: ['wake up', 'brush teeth']
// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//

// Email your file to the course staff,
// or commit your file to GitHub and email us a link.
