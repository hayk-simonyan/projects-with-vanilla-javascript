let val;

// document object
val = document;
val = document.all;
val = document.all[3];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// single element selectors

// 1. document.getElementById()
const emailInput = document.getElementById('email-address');
const emailLabel = document.getElementById('email-label');

val = emailInput.id;
val = emailInput.className;

emailInput.style.background = 'red';
emailInput.style.padding = '3px';

emailLabel.textContent = 'Enter your email';
emailLabel.innerText = 'Enter your email again';
emailLabel.innerHTML = '<i>Enter your email</i>';

// 2. document.querySelector()
const passwordInput = document.querySelector('#password');
const samePasswordInput = document.querySelector('.pointer');
const firstForm = document.querySelector('form');
const lastInput = document.querySelector('input:last-child');
const secondInput = document.querySelector('input:nth-child(2)');

passwordInput.style.background = 'green';
firstForm.style.background = 'white';
lastInput.style.background = 'red';
secondInput.style.color = 'red';

// multiple element selector

// 1. document.getElementsByClassName
const labels = document.getElementsByClassName('lh-copy');

val = labels;
val = labels[0];

labels[0].style.background = 'red';

const lastDiv = document.querySelector('#lastdiv');
const linksInLastDiv = lastDiv.getElementsByClassName('link');
val = linksInLastDiv;
linksInLastDiv[0].style.color = 'yellow';

// 2. document.getElementsByTagName
const labelsByTagName = document.getElementsByTagName('label');
val = labelsByTagName;

// 3. document.querySelectorAll()
const inputResets = document.querySelectorAll('input.input-reset');

inputResets.forEach((i) => {
  i.style.background = 'yellow';
});

console.log(val);
