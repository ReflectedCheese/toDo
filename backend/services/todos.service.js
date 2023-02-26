const todos = [
  { id: 1, title: "Todo 1", completed: false },
  { id: 2, title: "Todo 2", completed: false },
  { id: 3, title: "Todo 3", completed: false },
];

const getTodos = () => todos;
const getTodo = (id) => todos.find((todo) => todo.id == id);

const createTodo = (title, description) => {
  const todo = {
    id: todos.length + 1,
    title,
    description,
    completed: false,
  };

  todos.push(todo);

  return todo;
};

const editTodo = (id, todo) => {
  const matchingTodo = todos.find((todo) => todo.id == id);

  const { title, description, completed } = todo;
  if (title) matchingTodo.title = title;
  if (completed !== undefined) matchingTodo.completed = completed;
  if (description) matchingTodo.description = description;

  todos.splice(todos.indexOf(matchingTodo), 1, matchingTodo);
  return matchingTodo;
};

const deleteTodo = (id) => {
  const todo = todos.find((todo) => todo.id == id);
  todos.splice(todos.indexOf(todo), 1);
  return todo;
};

module.exports = {
  getTodo,
  getTodos,
  createTodo,
  editTodo,
  deleteTodo,
};
