// set item
localStorage.setItem('key', 'value');
sessionStorage.setItem('key', 'value');

// get item
const keyLocal = localStorage.getItem('key');
const keySession = sessionStorage.getItem('key');

// remove item
localStorage.removeItem('key');
sessionStorage.removeItem('key');

// clear to null
localStorage.clear();
sessionStorage.clear();

// to do exercise
const form = document.querySelector('form');
const input = document.querySelector('input');

const initializeTasks = () => {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  return tasks;
};

const submitFormHandler = (event) => {
  const tasks = initializeTasks();

  tasks.push(input.value);
  localStorage.setItem('tasks', JSON.stringify(tasks));

  event.preventDefault();
};

form.addEventListener('submit', submitFormHandler);
