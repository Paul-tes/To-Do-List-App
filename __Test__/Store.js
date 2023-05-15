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
  }


}

