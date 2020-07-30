// create element
const newHeading = document.createElement('h2');
// add id
newHeading.id = 'signin';
// create textnode
const textNode = document.createTextNode('Replace sign in');
// instert textnode into h2
newHeading.append(textNode);

// get the old heading
const oldHeading = document.querySelector('legend.f4');
// get the parent of heading
const parent = document.querySelector('fieldset#sign_up');

// 1. replace element
parent.replaceChild(newHeading, oldHeading);

const lis = document.querySelectorAll('li');
const ul = document.querySelector('ul');

// 2. remove element
lis[3].remove();

// remove by child
ul.removeChild(lis[0]);

// classes
const liClassNames = lis[0].className;
const liClassList = lis[0].classList;
liClassList.add('text');
liClassList.remove('text');

// attributes
newHeading.setAttribute('title', 'new heading');
newHeading.getAttribute('title');
newHeading.hasAttribute('title');
newHeading.removeAttribute('title');
