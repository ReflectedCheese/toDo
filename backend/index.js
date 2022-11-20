const { response } = require("express");
const express = require("express");
const app = express();
const port = 3000;

const {
  getTodos,
  createTodo,
  editTodo,
  deleteTodo,
  getTodo,
} = require("./services/todos.service");

app.use(express.json());

app.get("/todos", (req, res) => {
  const todos = getTodos();
  res.send(todos);
});

app.get("/todos/:id", (req, res) => {
  const { id } = req.params;
  if (id !== undefined) {
    const todo = getTodo(id);
    if (todo) res.send(todo);
    else res.status(404).send("Todo not found");
  } else res.status(400).send("Bad Request");
});

app.post("/todos", (req, res) => {
  const { title } = req.body;
  if (title) {
    const todo = createTodo(title);
    res.status(201).send(todo);
  } else res.status(400).send({ error: "Title is required" });
});

app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  if (id !== undefined && req.body !== undefined) {
    const todo = editTodo(id, req.body);
    res.status(201).send(todo);
  } else res.status(400).send("Bad Request");
});

app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  if (id !== undefined) {
    const todo = deleteTodo(id);
    if (todo) {
      res.send(todo);
    } else {
      res.status(404).send("Not Found");
    }
  } else res.status(400).send("Bad Request");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
