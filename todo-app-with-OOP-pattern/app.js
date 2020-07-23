const addTaskForm = document.querySelector('.add-task-form');
const addTaskInput = document.querySelector('.add-task-input');
const tasksUl = document.querySelector('.list');
const filterTasksInput = document.querySelector('.filter-tasks-input');
const clearTasksButton = document.querySelector('.clear-tasks');

loadEventListeners();

function loadEventListeners() {
  addTaskForm.addEventListener('submit', addTask);
  tasksUl.addEventListener('click', deleteTask);
  clearTasksButton.addEventListener('click', deleteAllTasks);
  filterTasksInput.addEventListener('keyup', filterTasks);
  document.addEventListener('DOMContentLoaded', getFromLS);
}

function addTask(e) {
  if (addTaskInput.value === '') {
    alert('Pleas add a task');
  }

  const newLi = document.createElement('li');
  const newLiText = document.createTextNode(addTaskInput.value);

  newLi.appendChild(newLiText);
  newLi.className = 'lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30';

  tasksUl.appendChild(newLi);

  storeInLocalStorage(addTaskInput.value);

  addTaskInput.value = '';

  e.preventDefault();
}

function deleteTask(e) {
  if (e.target.classList.contains('lh-copy')) {
    console.log(e.target.classList);
    tasksUl.removeChild(e.target);

    removeFromLS(e.target);
  }
}

function deleteAllTasks(e) {
  while (tasksUl.firstChild) {
    tasksUl.removeChild(tasksUl.firstChild);

    clearFromLS();
  }
}

function filterTasks(e) {
  if (!tasksUl.firstChild) return;

  const filterText = e.target.value;

  for (let i = 0; i < tasksUl.childElementCount; i++) {
    const li = tasksUl.children[i];
    const liText = tasksUl.children[i].firstChild.textContent;
    if (liText.toLowerCase().indexOf(filterText) != -1) {
      console.log('if');
      li.style.display = 'block';
    } else {
      console.log('else');
      li.style.display = 'none';
    }
  }
}

function storeInLocalStorage(task) {
  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getFromLS() {
  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach((t) => {
    const newLi = document.createElement('li');
    const newLiText = document.createTextNode(t);

    newLi.appendChild(newLiText);
    newLi.className = 'lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30';

    tasksUl.appendChild(newLi);
  });
}

function removeFromLS(li) {
  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach((task, i) => {
    if (li.textContent === task) tasks.splice(i, 1);
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearFromLS() {
  localStorage.clear();
}
