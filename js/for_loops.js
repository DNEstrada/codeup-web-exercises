// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
let showMultiplicationTable = (xNumber) => {
     for (let i=1; i <= 10; i++) {
          console.log(`${xNumber} x ${i} = ${xNumber*i}`);
     }
}
showMultiplicationTable(7);

// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.
// function found from Google to generate random number between specified range
function randomIntFromInterval(min, max) { // min and max included
     return Math.floor(Math.random() * (max - min + 1) + min)
}
let randomNumberSample = () => {
     for (i=1; i<=10; i++) {
          let sample = randomIntFromInterval(20,200);
          if (sample%2==0) {
               console.log(`${sample} is even`);
          } else {
               console.log(`${sample} is odd`);
          }
     }
}
randomNumberSample();

// Create a for loop that uses console.log to create the output shown below:
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
for(i=1;i<10;i++) {
     let multiNumber = i.toString();
     console.log(multiNumber.repeat(i));
}

// Create a for loop that uses console.log to create the output shown below.
// 100
//  95
//  90
//  85
//  80
//  75
//  70
//  65
//  60
//  55
//  50
//  45
//  40
//  35
//  30
//  25
//  20
//  15
//  10
//  5
for (let i=100;i>0; i += -5) {
     console.log(i);
}