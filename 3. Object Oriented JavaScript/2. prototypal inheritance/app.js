// 1. PROTOTYPES

// constructor function
function Car1(brand, model, released) {
  this.brand = brand;
  this.model = model;
  this.released = new Date(released);

  this.calculateAge = function () {
    const difference = Date.now() - this.released.getTime();
    const age = new Date(difference);
    return Math.abs(age.getUTCFullYear() - 1970);
  };
}

const car1 = new Car1('Renault', 's4', '09/09/2010');
console.log(car1);

// we can put calculate age in a prototype to make it more reusable

// constructor function
function Car2(brand, model, released) {
  this.brand = brand;
  this.model = model;
  this.released = new Date(released);
}
// get data
Car2.prototype.calculateAge = function () {
  const difference = Date.now() - this.released.getTime();
  const age = new Date(difference);
  return Math.abs(age.getUTCFullYear() - 1970);
};
// manipulate data
Car2.prototype.update = function (year) {
  this.released = year;
};

const car2 = new Car2('Mazda', '6', '2019');
// ptototypes of Car2 - Car2>__proto__
console.log(car2.calculateAge());
car2.update(2020);
console.log(car2);
// prototypes of Object - Car2>__proto__>__proto__
console.log(car2.hasOwnProperty('brand'));
console.log(car2.hasOwnProperty('calculateAge'));
console.log('--------------------------------------');

// 2. PROTOTYPAL INHERITANCE

function Computer(monitor, hardware) {
  this.monitor = monitor;
  this.hardware = hardware;
}
// add prototype
Computer.prototype.describe = function () {
  return `monitor: ${this.monitor}, hardware: ${this.hardware}`;
};

const asus = new Computer('Dell', 'Asus Rock');
console.log(asus.describe());

// inheriting object properties, but not prototype
function Server(monitor, hardware, ram) {
  Computer.call(this, monitor, hardware);

  this.ram = ram;
}
// inheriting object prototype as well
Server.prototype = Object.create(Computer.prototype);
// make server1 prototype return Server()
Server.prototype.constructor = Server;

const server1 = new Server('none', 'Dell', '128');
console.log(server1);
console.log(server1.describe());

// overriting prototype methd
Server.prototype.describe = function () {
  return 'described';
};
console.log(server1.describe());
