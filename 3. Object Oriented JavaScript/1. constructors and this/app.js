// object literals
const car = {
  brnad: 'Audi',
  model: 'TT',
};

// constructor function
function Car(brand, model, released) {
  this.brand = brand;
  this.model = model;
  this.released = new Date(released);

  this.calculateAge = function () {
    const difference = Date.now() - this.released.getTime();
    const age = new Date(difference);
    return Math.abs(age.getUTCFullYear() - 1970);
  };
}

const audi = new Car('Audi', 'TT', '09-10-2006');
const bmw = new Car('BMW', 'M3', '07-05-2002');

console.log('audi', audi);
console.log('bmw', bmw);
console.log('bmw method', bmw.calculateAge());

// built in constructors

// String
const string1 = 'string1';
const string2 = new String('string2');
string2.foo = 'bar';

console.log('string1', string1, 'string2', string2);
console.log('typeof 1', typeof string1, 'typeof 2', typeof string2);

// Number
const num1 = 1;
const num2 = new Number(2);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const f1 = function (x, y) {
  return x + y;
};
const f2 = new Function('x', 'y', 'return x+y');

console.log(f1(1, 3), f2(8, 1));

// Object
const obj1 = { name: 'john' };
const obj2 = new Object({ name: 'john' });

console.log(obj1, obj2);

// Array
const arr1 = [1, 2, 3];
const arr2 = new Array(1, 2, 3);

console.log(arr1, arr2);

// Regular Expressions
const reg1 = '/w+/';
const reg2 = new RegExp('\\w+');

console.log(reg1, reg2);
