import './styles/style.css';

const todoLists = [
  {
    index: 1,
    desctiption: 'Play Guitar',
    completed: true,
  },
  {
    index: 2,
    desctiption: 'Read ES6 syntax',
    completed: false,
  },
  {
    index: 3,
    desctiption: 'Get Ready for WebPack',
    completed: true,
  },
]

const displayLists = () => {
  const lists = todoLists;
  const taskContainer = document.querySelector('.tasks-container');
  console.log(taskContainer);
  lists.forEach(t => {
    const task = document.createElement('div');
    task.innerHTML = `
    <div class="task-cont">
      <input type="checkbox" name="task" id="task-check-box">
      <input type="text" value="${t.desctiption}" class="task-value">
    </div>
    <div class="opp-icon">
      <i class="fa fa-ellipsis-v dots-icon"></i>
    </div>
    `
    task.classList.add('task');
    taskContainer.appendChild(task);
  });
}

displayLists();