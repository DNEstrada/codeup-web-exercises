"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
let analyzeColor = (colorName) => {
     if (colorName.toLowerCase() === "blue") {
          return "blue is the color of the sky";
     }
     if (colorName.toLowerCase() === "red") {
          return "Strawberries are red";
     }
     if (colorName.toLowerCase() === "orange") {
          return "Oranges are good for you";
     }
     if (colorName.toLowerCase() === "green") {
          return "Grass is green";
     }
     if (colorName.toLowerCase() === "indigo") {
          return "Indigo is almost blue";
     }
     if (colorName.toLowerCase() === "violet") {
          return "Violet is almost purple";
     } else {
          return `I don't know anything about ${colorName}`;
     }
}
console.log(analyzeColor("banana"));
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
const colorName = randomColor
switch (colorName.toLowerCase()) {
     case "blue":
          console.log("blue is the color of the sky");
          break;
     case "red":
          console.log("Strawberries are red");
          break;
     case "yellow":
          console.log("Sunflowers are yellow");
          break;
     case "green":
          console.log("Grass is green");
          break;
     case "indigo":
          console.log("Indigo is almost blue");
          break;
     case "violet":
          console.log("Violet is almost purple");
          break;
     default:
          console.log(`I don't know anything about ${colorName}`);
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
const askColor = prompt("What is the color?");
alert(analyzeColor(askColor));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
let calculateTotal = (luckyNumber, totalAmount) => {
     if (luckyNumber === 0) {
          return totalAmount;
     }
     if (luckyNumber === 1) {
          return totalAmount - (totalAmount*.1);
     }
     if (luckyNumber === 2) {
          return totalAmount - (totalAmount*.25);
     }
     if (luckyNumber === 3) {
          return totalAmount - (totalAmount*.35);
     }
     if (luckyNumber === 4) {
          return totalAmount - (totalAmount*.50);
     }
     if (luckyNumber === 5) {
          return totalAmount - totalAmount;
     }
}
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
const luckyNumber = Math.floor(Math.random() * 6);
const askBill = prompt("What is your total bill?")
alert(`Your total based on your lucky number is ${calculateTotal(luckyNumber, askBill)}`);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
// let askNumber = confirm("Would you like to enter a number?");
//      if(askNumber) {
//           let numberAsked = parseFloat(prompt("What is the number?"));
//           if (isNaN(numberAsked)) {
//                alert("You put an incorrect input data type");
//           } else {
//             if (numberAsked % 0) {
//                alert("Your number is even")
//             } else {
//                alert("Your number is odd")
//             }
//             alert(`Your number plus 100 is ${numberAsked + 100}`);
//             if (numberAsked > 0) {
//                alert("Your number is positive");
//             }
//             if (numberAsked === 0) {
//                alert("Your number is neither positive or negative");
//             }
//             if (numberAsked < 0) {
//                alert("Your number is negative");
//             }
//           }
//      }

let numberQuiz = () => {
     let askNumber = confirm("Would you like to enter a number?"); // function starts with the prompt
     if(askNumber) {
          let numberAsked = parseFloat(prompt("What is the number?"));
          if (isNaN(numberAsked)) { // return early if NaN
               return alert("You put an incorrect input data type");
          } else { // start rest of function if number
               if (numberAsked % 0) {
                    alert("Your number is even");
               } else if ((numberAsked % 2) === 1 || -1)  { // checks if odd whether pos/neg
                    alert("Your number is odd");
               } else {
                    alert("Your number is neither even or odd");
               }

               alert(`Your number plus 100 is ${numberAsked + 100}`); // runs calc separately

               if (numberAsked > 0) { // goes through pos/neg
                    alert("Your number is positive");
               } else if (numberAsked === 0) {
                    alert("Your number is neither positive or negative");
               } else if (numberAsked < 0) {
                    alert("Your number is negative");
               }
          }
     }
}
numberQuiz();
