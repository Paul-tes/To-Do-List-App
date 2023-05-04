import './styles/style.css';
import Store from './modules/Store.js';
import Elements from './modules/Elements.js';
import Task from './modules/Task.js';

const ELEMENTS = new Elements();

class Ui {
    static displayTasks() {
      const tasks = Store.getTasks();
      tasks.forEach((task) => Ui.addTask(task));
    }

    static addTask(task) {
      const taskContainer = ELEMENTS.taskContainer;
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
      ELEMENTS.inputField.value = '';
    }
};

// Display tasks.
Ui.displayTasks();

// add Element
ELEMENTS.inputField.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && ELEMENTS.inputField.value != '') {
    event.preventDefault();
    let task = new Task(Store.LASTINDEX + 1, ELEMENTS.inputField.value, true);
    Ui.addTask(task);
    Store.addTask(task);
    Ui.clearInput();
  }
});
