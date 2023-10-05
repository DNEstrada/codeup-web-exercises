// Create a function named isCoding that takes an argument and logs "name loves coding!" to the console
// Changed to arrow function, w/ return instead of console.log
// Change to function that takes 2 arguments to say x loves y
const isCoding = (string, string2) => {
    return `${string} loves ${string2}`;
}
console.log(isCoding("Daniel", "coding"));

// Arrow function expression
const sayHello = (usersFullName) => {
    console.log(`Hello, ${usersFullName}`);
}

sayHello("Jason");