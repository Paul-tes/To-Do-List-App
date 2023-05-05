import './styles/style.css';
import Store from './modules/Store.js';
import Elements from './modules/Elements.js';
import Task from './modules/Task.js';

class Ui {
  static displayTasks() {
    const tasks = Store.getTasks();
    tasks.forEach((task) => Ui.addTask(task));
  }

  static addTask(task) {
    const elem = new Elements();
    const { taskContainer } = elem;
    const Element = document.createElement('div');
    Element.innerHTML = `
    <div class="task-cont">
      <input type="checkbox" name="task" class="task-check-box" ${task.completed ? 'checked' : ''}>
      <input type="text" value="${task.description}" class="task-value ${task.completed ? 'checked' : 'unchacked'}" id="${task.index}">
    </div>
    <div class="opp-icon">
      <i class="fa fa-ellipsis-v dots-icon"></i>
    </div>
    `;
    Element.classList.add('task');
    taskContainer.appendChild(Element);
  }

  static clearInput() {
    const elem = new Elements();
    elem.inputField.value = '';
  }

  static changeIconTrash(icon) {
    icon.className = '';
    const deleteIconClass = ['fa', 'fa-trash', 'trash-icon'];
    icon.classList.add(...deleteIconClass);
  }

  static changeIconDots(icon) {
    icon.className = '';
    const deleteIconClass = ['fa', 'fa-ellipsis-v', 'dots-icon'];
    icon.classList.add(...deleteIconClass);
  }

  static taskActiveState(task) {
    task.style.backgroundColor = '#f5f3ad';
    Ui.changeIconTrash(task.lastElementChild.lastElementChild);
  }

  static taskClearActiveState(tasks) {
    for (let i = 0; i < tasks.length; i += 1) {
      tasks[i].style.backgroundColor = 'white';
      Ui.changeIconDots(tasks[i].lastElementChild.lastElementChild);
    }
  }

  static removeTask(task) {
    const elem = new Elements();
    const { taskContainer } = elem;
    taskContainer.removeChild(task);
  }
}
// Display tasks.
Ui.displayTasks();

// add Task
let elem = new Elements();
elem.inputField.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && elem.inputField.value !== '') {
    event.preventDefault();
    const task = new Task(Store.LASTINDEX + 1, elem.inputField.value, false);
    Ui.addTask(task);
    Store.addTask(task);
    Ui.clearInput();
  }
});

// click operations
elem.listContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('task-value')) {
    // when it cleack away first clear active state
    // clear active state to the task
    elem = new Elements();
    const tasks = elem.taskContainer.children;
    Ui.taskClearActiveState(tasks);

    // set Acive state to the task
    // click task and set active
    const task = event.target.parentElement.parentElement;
    Ui.taskActiveState(task);
    Store.updateTask(event.target.id, event.target.value);
  }

  // delete task
  // click trash icon to delete task
  if (event.target.classList.contains('trash-icon')) {
    Ui.removeTask(event.target.parentElement.parentElement);
    Store.removeTask(event.target.parentElement.previousElementSibling.lastElementChild.id);
  }

  // chek box interactive
  // set completed ture and make through line if it is checked.
  // make complete false and remove through line from completed task.
  if (event.target.classList.contains('task-check-box')) {
    if (event.target.checked) {
      event.target.nextElementSibling.classList.remove('unchacked');
      event.target.nextElementSibling.classList.add('checked');
      Store.updateStatus(event.target.nextElementSibling.id, true);
    } else {
      event.target.nextElementSibling.classList.remove('checked');
      event.target.nextElementSibling.classList.add('unchacked');
      Store.updateStatus(event.target.nextElementSibling.id, false);
    }
  }

  // clear all completed button operation.
  // get all completed tasks.
  // remove all, update Ui and Local Storage.
  if (event.target.classList.contains('clear-all-btn')) {
    Store.clearCompleteTasks();
    window.location.reload();
  }
});

// update task when the user lefts the input field.
elem = new Elements();
const { inputs } = elem;
for (let i = 0; i < inputs.length; i += 1) {
  inputs[i].addEventListener('blur', (e) => {
    Store.updateTask(e.target.id, e.target.value);
  });
}