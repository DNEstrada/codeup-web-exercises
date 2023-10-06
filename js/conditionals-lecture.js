// If/else conditional statement
if(false){
     console.log("The condition is true!");
} else {
     console.log("The condition is false!");
}

console.log("THIS IS AFTER THE CONDITIONAL STATEMENT!");
// Ternary if/else statement
const isLoggedIn = true;
let message = (isLoggedIn) ? "Welcome back!" : "Please Login";
console.log(message);
// Switch statements
let pizzaPreference = prompt("What kind of pizza do you like?");
switch(pizzaPreference) {
     case "cheese":
          console.log("I love cheese pizza too... but its boring.");
          break;
     case "hawaiian":
          console.log("I dig it. Sweet and salty together");
          break;
     default:
          console.log("What a weirdo...");
          break;
}