// 1. DOM selectors
const form = document.querySelector('form.add-task-form');
const ul = document.querySelector('ul.list-group');
const input = document.querySelector('input#task');
const alertDiv = document.querySelector('div#alert');

// 2. Constructors

// 2.1 Task Constructor
function Task(task) {
  this.task = task;
}
// 2.2 Task Prototype methods

// 2.3 UI Constructor
function UI() {}

// 2.4 UI Prototype methods
UI.prototype.createTask = function (task) {
  const li = document.createElement('li');
  const liText = document.createTextNode(task.task);
  li.className = 'list-group-item';
  li.appendChild(liText);
  ul.appendChild(li);
};

UI.prototype.clearInput = function () {
  input.value = '';
};

UI.prototype.setAlert = function (message, className) {
  const divAlert = document.createElement('div');
  const divText = document.createTextNode(message);
  divAlert.className = `alert ${className}`;
  divAlert.appendChild(divText);
  alertDiv.appendChild(divAlert);

  setTimeout(() => {
    divAlert.remove();
  }, 3000);
};

UI.prototype.deleteTask = function (target) {
  if ((target.className = 'list-group-item')) {
    target.remove();
  }
};

// 3. Event listeners
form.addEventListener('submit', submitHandler);
ul.addEventListener('click', deleteHandler);

// 4. Event handlers
function submitHandler(event) {
  const task = new Task(input.value);
  const ui = new UI();

  if (input.value === '') {
    ui.setAlert('Task can not be empty', 'alert-danger');
  } else {
    ui.createTask(task);
    ui.clearInput();
    ui.setAlert('Created', 'alert-success');
  }

  event.preventDefault();
}

function deleteHandler(event) {
  const ui = new UI();

  ui.deleteTask(event.target);
  ui.setAlert('Removed', 'alert-success');

  event.preventDefault();
}
