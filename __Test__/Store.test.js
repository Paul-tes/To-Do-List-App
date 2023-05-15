import LocalStorage from "../__Mock__/LocalStorage.js";
import Store from "./Store.js";
import Task from "../src/modules/Task.js";

describe("ToDo operational functions", ()=> {

  // Test Case 1
  test('when The new task is added it should be shown on the store', ()=> {
    // Arrange
    const store = new Store();
    const task = new Task(LocalStorage.items.length + 1, 'Hello Task 1', false);

    // Act
    store.addTask(task);
    const taskInLocalStorage = LocalStorage.getItems().filter(item => item.index === task.index)[0];

    // assert
    expect(taskInLocalStorage).toEqual(task);
  })

  // Test two
  test('when The new task is added it should be shown on the store', ()=> {
    // Arrange
    const store = new Store();
    const task = new Task(LocalStorage.getItems().length + 1, 'Hello Task 2', false);

    // Act
    store.addTask(task);
    const taskInLocalStorage = LocalStorage.getItems().filter(item => item.index === task.index)[0];

    // assert
    expect(taskInLocalStorage).toEqual(task);
  })
})