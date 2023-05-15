import LocalStorage from '../__Mock__/LocalStorage.js';

  
export default class Store {
  addTask(task) {
    const tasks = LocalStorage.getItems();
    tasks.push(task);
    LocalStorage.setItem(tasks);
    LocalStorage.LASTINDEX = tasks.length;
  }


}

