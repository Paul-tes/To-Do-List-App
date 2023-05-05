import './styles/style.css';
import Store from './modules/Store.js';
import Elements from './modules/Elements.js';
import Task from './modules/Task.js';
import { Color } from 'three';

class Ui {
    static displayTasks() {
      const tasks = Store.getTasks();
      tasks.forEach((task) => Ui.addTask(task));
    }

    static addTask(task) {
      const elem = new Elements();
      const taskContainer = elem.taskContainer;
          const Element = document.createElement('div');
          Element.innerHTML = `
          <div class="task-cont">
            <input type="checkbox" name="task" id="task-check-box">
            <input type="text" value="${task.description}" class="task-value">
          </div>
          <div class="opp-icon">
            <i class="fa fa-ellipsis-v dots-icon"></i>
          </div>
          `;
          Element.classList.add('task');
          taskContainer.appendChild(Element);
    };

    static clearInput() {
      const elem = new Elements();
      elem.inputField.value = '';
    }

    static changeIconTrash(trash) {
      trash.className = '';
      const deleteIconClass = ['fa', 'fa-trash', 'trash-icon'];
      trash.classList.add(...deleteIconClass);
    }

    static taskActiveState(task) {
      task.style.backgroundColor = '#fffed7';
    }
};
// Display tasks.
Ui.displayTasks();

// add Element
let elem = new Elements();
elem.inputField.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && elem.inputField.value != '') {
    event.preventDefault();
    let task = new Task(Store.LASTINDEX + 1, elem.inputField.value, true);
    Ui.addTask(task);
    Store.addTask(task);
    Ui.clearInput();
  }
});

// Delete
elem = new Elements();
elem.listContainer.addEventListener('click', (event) => {

  const i = event.target.parentElement.parentElement.lastElementChild.firstElementChild;
  const task = event.target.parentElement.parentElement;
  Ui.taskActiveState(task);
  console.log(task);
});
