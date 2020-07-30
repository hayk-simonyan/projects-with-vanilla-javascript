// 1. ES6 Classes
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  introduce() {
    return `${this.brand}, ${this.model}`;
  }

  // static methods - standalone methods
  // use static methods when you don't need this.something
  // in your methid
  static addNumbers(x, y) {
    return x + y;
  }
}

const lexus = new Car('Lexus', 'Rx');

console.log(lexus);
console.log(lexus.introduce());

// returns an error because addNumbers is a static method
// console.log(lexus.addNumbers())
console.log(Car.addNumbers(3, 7));

// 2. Inheritance in ES6
class Mercedes extends Car {
  constructor(brand, model, released, engine) {
    super(brand, model);
    this.released = released;
    this.engine = engine;
  }
}

const e320 = new Mercedes('Mercedes', 'E class', '2002', '3.2');
console.log(e320);
console.log(e320.introduce());
