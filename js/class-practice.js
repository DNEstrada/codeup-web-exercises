// class Car {
//      constructor (make, model, color, year, transmission, type) {
//           this.make = make;
//           this.model = model;
//           this.color = color;
//           this.year = year;
//           this.transmission = transmission;
//           this.type = type;
//      }
//      drive() {
//           console.log(`You drove the ${this.make} ${this.model}`);
//      }
// }
//
// let car1 = new Car("Kia", "Optima", "White", "2015", "automatic", "sedan");
// console.log(`You got a ${car1.make} ${car1.model}!`);
// car1.drive();

//10-30 warmup exercise
// const digitalRoot = (n) => {
//      if (isNaN(n)) {
//           return false;
//      } else {
//           let numArray = n.toString();
//           console.log(numArray);
//           numArray = numArray.split(",");
//           result = 0;
//           while (numArray > 1) {
//                numArray.forEach ((number) => {
//                   result += number;
//                });
//                numArray = result.split(",");
//                result = numArray.join(",");
//           }
//           return result;
//      }
// };
// console.log(digitalRoot(16));

// const isPangram = (string) => {
//      let result = false;
//      loweredString = string.toLowerCase();
//      for (i = 97; i < 123; i++) {
//           if (loweredString.includes(String.fromCharCode(i))) {
//                result = true;
//           } else {
//                result = false;
//           }
//      }
//      return result;
// }
//
// console.log(isPangram("The quick brown fox jumps over the lazy dog."));
// console.log(isPangram("stuff not much letters"));