// get elemetns from the DOM
const form = document.querySelector('form.add-new-smartphone');
const brand = document.querySelector('input#brand');
const price = document.querySelector('input#price');
const ul = document.querySelector('ul.list');
const divAlert = document.querySelector('div.alert');

// Smartphone constructor
function Smartphone(brand, price) {
  this.brand = brand;
  this.price = price;
}

// UI constructor
function UI() {}
// UI prototypes
UI.prototype.addSmartphone = function (smartphone) {
  // create elements and nodes
  const li = document.createElement('li');
  const removeBtn = document.createElement('button');

  // fill in elements
  removeBtn.textContent = 'x';
  removeBtn.className = 'remove-item fr';
  li.textContent = `${smartphone.brand} ${smartphone.price}`;
  li.className = 'lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30';

  // append childs
  li.appendChild(removeBtn);
  ul.appendChild(li);
};

UI.prototype.showAlert = function (message, className) {
  // create alert div
  const div = document.createElement('div');
  div.className = `flex items-center justify-center pa4 ${className} navy`;
  div.appendChild(document.createTextNode(message));

  // append to divAlert
  divAlert.appendChild(div);

  // dissapear from 3 seconds
  setTimeout(function () {
    div.remove();
  }, 3000);
};

UI.prototype.clearFields = function () {
  brand.value = '';
  price.value = '';
};

UI.prototype.deleteElement = function (target) {
  if (target.className === 'remove-item fr') {
    target.parentElement.remove();
  }
};

// event listeners
form.addEventListener('submit', handleSubmit);
ul.addEventListener('click', handleDelete);

// event handlers
function handleSubmit(event) {
  // Instantiate Smartphone object
  const smartphone = new Smartphone(brand.value, price.value);

  // Instantiate UI object
  const ui = new UI();

  // Call UI prototypes
  if (brand.value === '' || price.value === '') {
    ui.showAlert('Fill in all the fields', 'bg-red');
  } else {
    ui.addSmartphone(smartphone);
    ui.showAlert('Created a smartphone', 'bg-green');
    ui.clearFields();
  }

  event.preventDefault();
}

function handleDelete(event) {
  // Instantiate UI object
  const ui = new UI();

  // Call UI prototype
  ui.deleteElement(event.target);
  ui.showAlert('Removed', 'bg-green');

  event.preventDefault();
}
