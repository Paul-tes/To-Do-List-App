export default class LocalStorage {
  static items = [];
  static setItem(items) {
    this.items = items
  }

  static getItems() {
    return this.items;
  }
}
