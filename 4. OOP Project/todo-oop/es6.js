// 1. DOM selectors
const form = document.querySelector('form.add-task-form');
const ul = document.querySelector('ul.list-group');
const input = document.querySelector('input#task');
const alertDiv = document.querySelector('div#alert');

// 2. Classes
class Task {
  constructor(task) {
    this.task = task;
  }
}

class UI {
  // prototype methods
  createTask(task) {
    const li = document.createElement('li');
    const liText = document.createTextNode(task.task);
    li.className = 'list-group-item';
    li.appendChild(liText);
    ul.appendChild(li);
  }

  clearInput() {
    input.value = '';
  }

  setAlert(message, className) {
    const divAlert = document.createElement('div');
    const divText = document.createTextNode(message);
    divAlert.className = `alert ${className}`;
    divAlert.appendChild(divText);
    alertDiv.appendChild(divAlert);

    setTimeout(() => {
      divAlert.remove();
    }, 3000);
  }

  deleteTask(target) {
    if ((target.className = 'list-group-item')) {
      target.remove();
    }
  }
}

class Store {
  static getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    return tasks;
  }

  static displayTasks() {
    const tasks = Store.getTasks();

    tasks.map((task) => {
      const ui = new UI();
      ui.createTask(task);
    });
  }

  static addTask(task) {
    const tasks = Store.getTasks();

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static removeTask(task) {
    let tasks = Store.getTasks();

    tasks.map((t, i) => {
      if (t.task == task) {
        tasks.splice(i, 1);
      }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

// 3. Event listeners
document.addEventListener('DOMContentLoaded', Store.displayTasks);
form.addEventListener('submit', submitHandler);
ul.addEventListener('click', deleteHandler);

// 4. Event handlers
function submitHandler(event) {
  const task = new Task(input.value);
  const ui = new UI();

  if (input.value === '') {
    ui.setAlert('Task can not be empty', 'alert-danger');
  } else {
    Store.addTask(task);
    ui.createTask(task);
    ui.clearInput();
    ui.setAlert('Created', 'alert-success');
  }

  event.preventDefault();
}

function deleteHandler(event) {
  const ui = new UI();

  Store.removeTask(event.target.textContent);
  ui.deleteTask(event.target);
  ui.setAlert('Removed', 'alert-success');

  event.preventDefault();
}
