import './styles/style.css';
import Store from './modules/Store.js';
import Elements from './modules/Elements.js';

const ELEMENTS = new Elements();
class Ui {
    static displayTasks = () => {
      const tasks = Store.getTasks;
      // const taskContainer = document.querySelector('.tasks-container');
      const taskContainer = ELEMENTS.taskContainer;
      tasks.forEach((t) => {
        const task = document.createElement('div');
        task.innerHTML = `
        <div class="task-cont">
          <input type="checkbox" name="task" id="task-check-box">
          <input type="text" value="${t.desctiption}" class="task-value">
        </div>
        <div class="opp-icon">
          <i class="fa fa-ellipsis-v dots-icon"></i>
        </div>
        `;
        task.classList.add('task');
        taskContainer.appendChild(task);
      });
    };
};

// Display tasks.
Ui.displayTasks();

// add task