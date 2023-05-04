class Store {

  // LASTINDEX is the value of the last item index in the local storage.
  static LASTINDEX;

  // get all to do lists from local stroage if local storage has a data.
  // return lists of to do lists from the local storage.
  static getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.stringify(localStorage.getItem('tasks'));
      this.LASTINDEX = tasks.length;
    }

    return tasks;
  }

  // receive task as a parameter.
  // add Task to local storage.
  // update local storage.
  // update LASTINDEX.
  // return void.
  static addTask(task) {
    let tasks = Store.getTasks();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.LASTINDEX = tasks.length;
  }

  // receive task index as a parameter.
  // fetch tasks from local storage keep it in array.
  // delete task from arraly list.
  // update local storage.
  // update LASTINDEX.
  // return void.
  static removeTask (index) {
    let tasks = Store.getTasks();
    tasks.forEach((task, i) => {
      if(task.index === index) {
        tasks.splice(i, 1);
      }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.LASTINDEX = tasks.length;
  }
}

export default Store;