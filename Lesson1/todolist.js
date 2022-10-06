// This class represents a collection of Todo objects.
// You can perform typical collection-oriented actions
// on a TodoList object, including iteration and selection.

const Todo = require('./todo');

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  add(todo) {
    if (!(todo instanceof Todo)) {
      throw new TypeError(`can only add Todo objects`);
    }

    this.todos.push(todo);
  }

  size() {
    return this.todos.length;
  }

  first() {
    return this.todos[0];
  }

  last() {
    return this.todos[this.size() - 1];
  }

  itemAt(index) {
    this._validateIndex(index);
    return this.todos[index];
  }

  _validateIndex(index) {
    if (!(index in this.todos)) {
      throw new ReferenceError(`invalid index: ${index}`);
    }
  }

  markDoneAt(index) {
    this.itemAt(index).markDone();
  }

  markUndoneAt(index) {
    this.itemAt(index).markUndone();
  }

  isDone() {
    return this.todos.every(todo => todo.isDone());
  }

  shift() {
    return this.todos.shift();
  }

  pop() {
    return this.todos.pop();
  }

  removeAt(index) {
    this._validateIndex(index);
    return this.todos.splice(index, 1);
  }

  // toString() {
  //   console.log(`---- ${this.title} ----`);
  //   this.todos.forEach(todo => console.log(todo.toString()));
  // }

  toString() {
    let title = `---- ${this.title} ----`;
    let list = this.todos.map(todo => todo.toString()).join("\n");
    return `${title}\n${list}`;
  }

  forEach(callback) {
    for (let index = 0; index < this.size(); index++) {
      callback(this.itemAt(index));
    }
    // this.todos.forEach(callback);
  }

  filter(callback) {
    let filteredTodoList = new TodoList(this.title);
    for (let index = 0; index < this.size(); index++) {
      if (callback(this.itemAt(index))) {
        filteredTodoList.add(this.itemAt(index));
      };
    }
    return filteredTodoList;

    // return this.todos.filter(callback);
  }

  findByTitle(title) {
    return this.filter(todo => title === todo.getTitle()).first();
  }

  allDone() {
    return this.filter(todo => todo.isDone());
  }

  allNotDone() {
    return this.filter(todo => !todo.isDone());
  }

  markDone(title) {
    if (this.findByTitle(title)) {
      this.findByTitle(title).markDone();
    }
  }

  markAllDone() {
    this.forEach(todo => todo.markDone());
  }

  markAllUndone() {
    this.forEach(todo => todo.markUndone());
  }

  toArray() {
    return this.todos.map(todo => todo);
  }
}

// let todo1 = new Todo("Buy milk");
// let todo2 = new Todo("Clean room");
// let todo3 = new Todo("Go to the gym");
// let todo4 = new Todo("Go shopping");
// let todo5 = new Todo("Feed the cats");
// let todo6 = new Todo("Study for Launch School");
// let list = new TodoList("Today's Todos");

// list.add(todo1);
// list.add(todo2);
// list.add(todo3);
// list.add(todo4);
// list.add(todo5);
// list.add(todo6);

// list.forEach(todo => console.log(todo.toString()));

// let todo1 = new Todo("Buy milk");
// let todo2 = new Todo("Clean room");
// let todo3 = new Todo("Go to the gym");
// let todo4 = new Todo("Go shopping");
// let todo5 = new Todo("Feed the cats");
// let todo6 = new Todo("Study for Launch School");
// let list = new TodoList("Today's Todos");

// list.add(todo1);
// list.add(todo2);
// list.add(todo3);
// list.add(todo4);
// list.add(todo5);
// list.add(todo6);
// todo1.markDone();
// todo5.markDone();

// let doneTodos = list.filter(todo => todo.isDone());
// console.log(doneTodos);

// console.log(list.filter(todo => todo.isDone()).first());

// console.log(list.findByTitle('Go to the gym'));

// console.log(list.allDone());
// console.log(list.allNotDone());

// list.markAllDone();
// console.log(list.allDone());
// list.markAllUndone();
// console.log(list.allNotDone());
// list.markDone('Go shopping');
// console.log(list);

// let listCopy = list.toArray();
// console.log(listCopy);
// console.log(list.todos);
// console.log(listCopy === list.todos); // false

module.exports = TodoList;
