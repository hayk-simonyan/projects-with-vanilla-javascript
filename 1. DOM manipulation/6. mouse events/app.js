const clearButton = document.querySelector('a#clear.f6.link.dim.black.db');
const mainDiv = document.querySelector('main.pa4.black-80');
const h5 = document.querySelector('h5.list');

const eventHandler = (e) => {
  console.log(e.type);
  e.preventDefault();
};

// click events
clearButton.addEventListener('click', eventHandler);
clearButton.addEventListener('dblclick', eventHandler);

// click and hold events
clearButton.addEventListener('mousedown', eventHandler);
clearButton.addEventListener('mouseup', eventHandler);

// mouse move events
// firing when you enter or leave the main element
mainDiv.addEventListener('mouseenter', eventHandler);
mainDiv.addEventListener('mouseleave', eventHandler);
// firing when you enter or leave or enter other elements
// inside of a main element
mainDiv.addEventListener('mouseover', eventHandler);
mainDiv.addEventListener('mouseout', eventHandler);
// any mouse move inside of main element
mainDiv.addEventListener('mousemove', eventHandler);
