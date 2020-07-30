const carPrototypes = {
  introduce: function () {
    return `brand is ${this.brand}, model is ${this.model}`;
  },
};

// syntax 1
const car = Object.create(carPrototypes);
car.brand = 'Mercedes';
car.model = 'E320';

console.log(car);
console.log(car.introduce());

// syntax 2
const audi = Object.create(carPrototypes, {
  brand: { value: 'Audi' },
  model: { value: 'TT' },
});

console.log(audi);
console.log(audi.introduce());
