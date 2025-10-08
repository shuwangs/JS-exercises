// Hello, object
// importance: 5
// Write the code, one line for each action:

// Exercise 1. 
// Create an empty object user.
const user = {};
console.log(user)

// Add the property name with the value John.
user.name = "John";
console.log(user)

// Add the property surname with the value Smith.
user.surname = "Smith";
console.log(user)

// Change the value of the name to Pete.

user.name = "Pete";
console.log(user)
// Remove the property name from the object.

delete user.name;
console.log(user)


// Exercise 2
// Check for emptiness
// importance: 5
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
function isEmpty(obj) {
    return Object.keys(obj).length == 0;
}
// Should work like that:

let schedule = {};

// alert( isEmpty(schedule) ); // true
console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false
console.log( isEmpty(schedule) ); // false


// Exercise 3
// Sum object properties
// importance: 5
// We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// If salaries is empty, then the result must be 0.

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);


// Exercise 4
// // before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key]==="number"){
        obj[key] *= 2;
    }
  }
//   return obj;
}

// console.log(multiplyNumeric(menu));
multiplyNumeric(menu)
console.log(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// P.S. Use typeof to check for a number here.

// Open a sandbox with tests.

