const li = document.querySelector('li.lh-copy');
const ul = document.querySelector('ul.list');
const div = document.querySelector('div.pa3');

function liClickHandler(event) {
  console.log('list clicked');
}
function ulClickHandler(event) {
  console.log('ul clicked');
}
function divClickHandler(event) {
  console.log('div clicked');
}

// event bubbling
li.addEventListener('click', liClickHandler);
li.addEventListener('click', ulClickHandler);
li.addEventListener('click', divClickHandler);
// -------------------- //

// event delegation
div.addEventListener('click', removeListItem);

function removeListItem(event) {
  if (event.target.classList.contains('lh-copy')) {
    event.target.remove();
  }
}
