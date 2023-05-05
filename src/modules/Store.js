class Store {
  // LASTINDEX is the value of the last item index in the local storage.
  static LASTINDEX = 0;

  // get all to do lists from local stroage if local storage has a data.
  // return lists of to do lists from the local storage.
  static getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
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
    const tasks = Store.getTasks();
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
  static removeTask(index) {
    const tasks = Store.getTasks();
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
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.LASTINDEX = tasks.length;
  }

  // recive task index and description as a parameter.
  // search task from the local storage and update task description using index as a key.
  // reorder task index according to thire order.
  // set updated list in to local storage.
  // return void.
  static updateTask(index, description) {
    const tasks = Store.getTasks();
    tasks.forEach((task) => {
      if (task.index === Number(index)) {
        task.description = description;
      }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.LASTINDEX = tasks.length;
  }

  // recive index and status as parameter.
  // search task from local storage using index key.
  // update status
  // update local storage.
  // retrun void.
  static updateStatus(index, status) {
    const tasks = Store.getTasks();
    tasks.forEach((task) => {
      if (task.index === Number(index)) task.completed = status;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // clear Completed Tasks
  // get tasks from local storage remove all completed tasks using filter().
  // update local storage.
  // return void.
  static clearCompleteTasks() {
    let tasks = Store.getTasks();
    tasks = tasks.filter((task) => task.completed === false);
    let i = 1;
    tasks.forEach((task) => {
      task.index = i;
      i += 1;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.LASTINDEX = tasks.length;
  }
}

export default Store;