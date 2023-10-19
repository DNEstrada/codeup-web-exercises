const fizzBuzz = (start, end) => {
     start = parseFloat(start); // validate and return early
     end = parseFloat(end);
     if (isNaN(start) || isNaN(end)) {
          return false;
     }
     for (let i = start; i <= end; i++) {
          if ((i%15===0)) {
               console.log("FizzBuzz");
          } else if (i%3===0) {
               console.log("Fizz");
          } else if (i%5===0) {
               console.log("Buzz");
          } else {
               console.log(i);
          }
     }
}

fizzBuzz(1, 100);