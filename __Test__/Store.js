import LocalStorage from '../__Mock__/LocalStorage.js';

  
export default class Store {
  addTask(task) {
    const tasks = LocalStorage.getItems();
    tasks.push(task);
    LocalStorage.setItem(tasks);
    LocalStorage.LASTINDEX = tasks.length;
  }

  removeTask(index) {
    const tasks = LocalStorage.getItems();
    tasks.forEach((task, i) => {
      if (task.index === Number(index)) {
        tasks.splice(i, 1);
      }
    });
    let i = 1;
    tasks.forEach((task) => {
      task.index = i;
      i += 1;
    });
    LocalStorage.setItem(tasks);
    LocalStorage.LASTINDEX = tasks.length;
  }

  updateTask(index, description) {
    const tasks = LocalStorage.getItems();
    tasks.forEach((task) => {
      if (task.index === Number(index)) {
        task.description = description;
      }
    });
    LocalStorage.setItem(tasks);
    LocalStorage.LASTINDEX = tasks.length;
  }

  clearCompleteTasks() {
    let tasks = LocalStorage.getItems();
    tasks = tasks.filter((task) => task.completed === false);
    let i = 1;
    tasks.forEach((task) => {
      task.index = i;
      i += 1;
    });
    LocalStorage.setItem(tasks)
    LocalStorage.LASTINDEX = tasks.length;
  }

}

