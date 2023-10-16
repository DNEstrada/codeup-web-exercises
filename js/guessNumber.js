// Generate a random number between 1 and 100 (inclusive)
const targetNumber = Math.floor(Math.random() * 100) + 1;

// Initialize the number of attempts
let attempts = 0;

// Function to handle the user's guess
function checkGuess() {
     // Get the user's guess from the input field
     const userGuess = parseInt(prompt("Guess a number between 1 and 100:"));

     // Check if the guess is valid
     if (userGuess >= 1 && userGuess <= 100) {
     } else {
          alert("Invalid input. Choose a number between 1 and 100.");
          checkGuess();
     }
     // Increment the number of attempts
     // Check if the guess is correct
     if (userGuess === targetNumber) {
          // If true, display a winning message
          alert("You're the winner!");
     } else {
          // If false, provide a hint and call checkGuess() again
          if (userGuess > targetNumber) {
               alert("Your guess is too high. Try again");
          } else {
               alert("Your guess is too low. Try again");
          }
          checkGuess();
     }
}

// Start the game
checkGuess();