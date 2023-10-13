class Car {
     constructor (make, model, color, year, transmission, type) {
          this.make = make;
          this.model = model;
          this.color = color;
          this.year = year;
          this.transmission = transmission;
          this.type = type;
     }
     drive() {
          console.log(`You drove the ${this.make} ${this.model}`);
     }
}

let car1 = new Car("Kia", "Optima", "White", "2015", "automatic", "sedan");
console.log(`You got a ${car1.make} ${car1.model}!`);
car1.drive();