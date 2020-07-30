const form = document.querySelector('form.measure.center');
const emailInput = document.querySelector('input#email-address');
const select = document.querySelector('select#cars');

const formSubmitHandler = (e) => {
  console.log(e.type);
  console.log(emailInput.value);
  emailInput.value = '';
  e.preventDefault();
};

const inputHandler = (e) => {
  console.log(e.type);
  console.log(e.target.value);
};

const inputFocusHandler = (e) => {
  console.log(e.type);
};

// submit event on form
form.addEventListener('submit', formSubmitHandler);

// key events on input
emailInput.addEventListener('keydown', inputHandler);
emailInput.addEventListener('keyup', inputHandler);
emailInput.addEventListener('keypress', inputHandler);

// when you click inside of a input
emailInput.addEventListener('focus', inputFocusHandler);
// when you click out from an input
emailInput.addEventListener('blur', (e) => console.log(e.type));

// cut, copy and paste events
emailInput.addEventListener('cut', (e) => console.log(e.type));
emailInput.addEventListener('paste', (e) => console.log(e.type));

// select
select.addEventListener('change', (e) => console.log(e.target.value));
