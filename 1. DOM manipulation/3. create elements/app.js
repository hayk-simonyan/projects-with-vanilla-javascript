// create an element
const newLi = document.createElement('li');
// create text noe
const text = document.createTextNode('new li textnode');
// get ul from the dom
const ul = document.querySelector('ul.list');

// add class
newLi.className = 'lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30';
// add id
newLi.id = 'newLiId';
// add attribute
newLi.setAttribute('title', 'New li item');

// instert text into li
newLi.append(text);
// instert li into ul
ul.append(newLi);

console.log(newLi);
