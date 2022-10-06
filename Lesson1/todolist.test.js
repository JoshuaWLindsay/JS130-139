const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  test('calling toArray returns the list in array form', () => {
    expect(list.toArray()).toEqual(list.todos);
  });

  test('calling first returns first todo item', () => {
    expect(list.first()).toEqual(todo1);
  });

  test('calling last returns last todo item', () => {
    expect(list.last()).toEqual(todo3);
  });
  
  test('calling shift removes and returns first todo item', () => {
    expect(list.shift()).toEqual(todo1);
    expect(list.size()).toBe(2);

    // Launch School's solution:
    // let todo = list.shift();
    // expect(todo).toEqual(todo1);
    // expect(list.toArray()).toEqual([todo2, todo3]);
  });
  
  test('calling pop removes and returns last todo item', () => {
    expect(list.pop()).toEqual(todo3);
    expect(list.size()).toBe(2);

    // Launch School's solution:
    // let todo = list.pop();
    // expect(todo).toEqual(todo3);
    // expect(list.toArray()).toEqual([todo1, todo2]);
  });
  
  test('calling isDone returns false if not all todos done', () => {
    expect(list.isDone()).toEqual(false);
  });
  
  test('calling add without a Todo object throws a TypeError', () => {
    expect(() => list.add('notATodo')).toThrow(TypeError);
    expect(() => list.add(0)).toThrow(TypeError);
    expect(() => list.add(new TodoList)).toThrow(TypeError);
  });
  
  test('calling itemAt returns todo at passed index', () => {
    expect(list.itemAt(0)).toEqual(todo1);
    expect(list.itemAt(1)).toEqual(todo2);
    expect(list.itemAt(2)).toEqual(todo3);
    expect(() => list.itemAt(3)).toThrow(ReferenceError);
  });
  
  test('calling markDoneAt marks todo at passed index as done', () => {
    list.markDoneAt(0);
    expect(todo1.isDone()).toEqual(true);
    expect(todo2.isDone()).toEqual(false);
    expect(todo3.isDone()).toEqual(false);
    expect(() => list.markDoneAt(3)).toThrow(ReferenceError);
  });
  
  test('calling markUndoneAt marks todo at passed index as undone', () => {
    list.markAllDone();
    list.markUndoneAt(0);
    expect(todo1.isDone()).toEqual(false);
    expect(todo2.isDone()).toEqual(true);
    expect(todo3.isDone()).toEqual(true);
    expect(() => list.markUndoneAt(3)).toThrow(ReferenceError);
  });
  
  test('calling markAllDone marks all todos as done', () => {
    list.markAllDone();
    expect(todo1.isDone()).toEqual(true);
    expect(todo2.isDone()).toEqual(true);
    expect(todo3.isDone()).toEqual(true);
    expect(list.isDone()).toEqual(true);
  });
  
  test('calling removeAt removes and returns todo at passed index within array', () => {
    expect(list.removeAt(1)).toEqual([todo2]);
    expect(() => list.removeAt(3)).toThrow(ReferenceError);
  });
  
  test('toString returns string representation of the list', () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;
  
    expect(list.toString()).toBe(string);
  });

  test('toString returns string representation of the list', () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[X] Clean room
[ ] Go to the gym`;
    
    list.markDoneAt(1);

    expect(list.toString()).toBe(string);
  });

  test('toString returns string representation of the list', () => {
    let string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;

    list.markAllDone();

    expect(list.toString()).toBe(string);
  });

  test('calling forEach iterates through the todo list', () => {
    list.forEach(todo => todo.markDone());

    expect(list.isDone()).toEqual(true);

    // Launch School's example:
    let result = [];
    list.forEach(todo => result.push(todo));
  
    expect(result).toEqual([todo1, todo2, todo3]);
  });

  test('calling filter returns a filtered todo list', () => {
    expect(list.filter(todo => todo)).toEqual(list);

    // Launch School's example:

    todo1.markDone();
    let newList = new TodoList(list.title);
    newList.add(todo1);
  
    expect(newList.title).toBe(list.title);
  
    let doneItems = list.filter(todo => todo.isDone());
    expect(doneItems.toString()).toBe(newList.toString());
  });
});