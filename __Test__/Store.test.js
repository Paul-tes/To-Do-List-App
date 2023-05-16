import LocalStorage from "../__Mock__/LocalStorage.js";
import Store from "./Store.js";
import Task from "../src/modules/Task.js";
import { experiments } from "webpack";

describe("Store operational functions Test", () => {

  // addTask Test Case [1]
  test('when The new task is added it should be shown on the store', () => {
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
  test('when The new task is added it should be shown on the store', () => {
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
  test('when the task is removed from Store it should be not inside LocalStorage', () => {
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
  test('when the task is removed from Store it should be not inside LocalStorage', () => {
    // Arrange
    const store = new Store();
    const length = LocalStorage.getItems().length;

    // Act
    store.removeTask(length);
    const localStorageLenght = LocalStorage.getItems().length;
    // assert
    expect(localStorageLenght).toBeLessThan(length);
  })

  // updateTask Test case[1]
  test('When the the update method is called with a prameter description the task should be updated to the parameter passed description', () => {
    // Arrange
    const store = new Store();
    const task = new Task(LocalStorage.getItems().length + 1, 'Task 2', false);
    store.addTask(task);

    // Act
    store.updateTask(1, 'Task 1');
    const updatedTask = LocalStorage.getItems()[0];

    // assert
    expect(updatedTask.description).toBe('Task 1');
  })

  // clearCompleteTasks test case [1]
  test('When the clearCompleteTasks method is called all completed tasks should be delleted from the local storage', () => {
    // Arrange
    const store = new Store();
    let task1 = new Task(LocalStorage.getItems().length + 1, 'Task 1', false);
    store.addTask(task1);
    task1 = new Task(LocalStorage.getItems().length + 1, 'Task 2', true);
    store.addTask(task1);

    // Act
    store.clearCompleteTasks();
    const tasks = LocalStorage.getItems().filter(task => task.completed)
    let none = [];
    // assert
    expect(tasks).toEqual(none);
  })
  // Arrange
})