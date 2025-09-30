// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
console.log("Start Exercise 1 ..." );
let counter1 = 1;
while (counter1 <= 5) {
  console.log(counter1);
  counter1++;
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
console.log("Start Exercise 2 ..." );

let counter2 = 1;
do {
  console.log(counter2);
  counter2++;
} while (counter2 <= 5);

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
console.log("Start Exercise 3 ..." );
for (let counter3 = 1; counter3 <=5; counter3++) {
  console.log(counter3);
}

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
console.log("Start Exercise 4 ..." );
console.log("Start Exercise 4 ... while loop" );

let counter4 = 10;
while (counter4 >= 1) {
  console.log(counter4);
  counter4--;
}

console.log("Start Exercise 4 ... do while loop" );
let counter5 = 10;
do {
  console.log(counter5);
  counter5--;
}while(counter5 >= 1);

console.log("Start Exercise 4 ... for while loop" );
for (let counter6 = 10; counter6 >= 1; counter6--) {
  console.log(counter6);
}
// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
console.log("Start Exercise 5 ..." );
console.log("Start Exercise 5 ... while loop" );
let counter7 = 7;
while (counter7 <= 27) {
  console.log(counter7);
  counter7++;
}

console.log("Start Exercise 5 ... do while loop" );
let counter8 = 7;
do {
  console.log(counter8);
  counter8++;
} while (counter8 <=27);

console.log("Start Exercise 5 ... for while loop" );
for(let counter9 = 7; counter9 <=27; counter9++) {
  console.log(counter9);
}

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

console.log("Start Exercise 6 ..." );
console.log("Start Exercise 6 ... while loop" );
let counter10 = 10;
while (counter10 < 100) {
  console.log(counter10);
  counter10 += 10;
}

console.log("Start Exercise 6 ... do while loop" );
let counter11 = 10;
do {
  console.log(counter11);
  counter11 += 10;
} while (counter11 < 100);

console.log("Start Exercise 6 ... for loop" );
for (let counter12 = 10; counter12 < 100; counter12 += 10) {
  console.log(counter12);
}

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.
console.log("Start Exercise 7 ..." );
// This loop starts with 1, and it will decrease it by 1, so it will never be greater or equal to 2, 
// so the condition will always be true, make it infinite loop.
let counterFour = 1;
while (counterFour >= -100) {
  console.log("HELP ME!");
  counterFour--;
} 

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.
console.log("Start Exercise 8 ..." );
let myFavoriteNumber = 4;
for (let i = 0; i <= myFavoriteNumber; i++) {
  console.log(i);
}

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

console.log("Start Exercise 9 ..." );
let myFavNumber = 25;
for (let i = 0; i <= 100; i++) {
  if(i === myFavNumber) {
    console.log(`${i} my favorite number!`);
  }
  else {
    console.log(`${i} not my favorite number`);

  } 
}
// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:
//

/**
 * If the number of iterations i know, I will use for loop.
 * If the number of iterations is unknown, and I need to loop at least once, I will use do while loop.
 * If the number of iterations is unknow, and I don't need to loop at least once, I will use while loop.
 */

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/
console.log("Start Exercise 11 ..." );

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter >= 0; insideCounter--) 
    if (insideCounter !== 0) {
    console.log("inside" , insideCounter);
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//

// Email your file to us or commit your file to GitHub and email us a link.
