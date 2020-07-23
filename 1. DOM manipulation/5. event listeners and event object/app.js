const clearButton = document.querySelector('a#clear.f6.link.dim.black.db');

const clearButtonHandler = (e) => {
  let val;
  val = e;

  // event target
  val = e.target;
  e.target.innerText = 'Cleared';
  e.target.style.background = 'green';

  // event type
  val = e.type;

  // event timestamp
  val = e.timeStamp;

  // event coordinates relative to the window
  val = e.clientY;
  val = e.clientX;

  // event coordinates relative to the element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
  e.preventDefault();
};

// add event listener
clearButton.addEventListener('click', clearButtonHandler);
