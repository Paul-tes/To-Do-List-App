import LocalStorage from "../__Mock__/LocalStorage.js";
import Store from "./Store.js";
import Task from "../src/modules/Task.js";

describe("Store operational functions Test", ()=> {

  // addTask Test Case [1]
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

  // addtask Test Case [2]
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

  // removeTask test case [1]
  test('when the task is removed from Store it should be not inside LocalStorage', ()=> {
    // Arrange
    const store = new Store();
    const length = LocalStorage.getItems().length;

    // Act
    store.removeTask(length);
    const localStorageLenght = LocalStorage.getItems().length;
    // assert
    expect(localStorageLenght).toBeLessThan(length);
  })

  // removeTask test case [2]
  test('when the task is removed from Store it should be not inside LocalStorage', ()=> {
    // Arrange
    const store = new Store();
    const length = LocalStorage.getItems().length;

    // Act
    store.removeTask(length);
    const localStorageLenght = LocalStorage.getItems().length;
    // assert
    expect(localStorageLenght).toBeLessThan(length);
  })
})