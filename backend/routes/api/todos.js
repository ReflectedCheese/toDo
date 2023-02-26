const express = require("express");
const router = express.Router();
const {
  getTodos,
  getTodo,
  createTodo,
  editTodo,
  deleteTodo,
} = require("../../services/todos.service");

router.get("/", (req, res) => {
  const todos = getTodos();
  res.send(todos);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  if (id !== undefined) {
    const todo = getTodo(id);
    if (todo) res.send(todo);
    else res.status(404).send("Todo not found");
  } else res.status(400).send("Bad Request");
});

router.post("/", (req, res) => {
  const { title } = req.body;
  if (title) {
    const { description } = req.body;
    const todo = createTodo(title, description);
    res.status(201).send(todo);
  } else res.status(400).send({ error: "Title is required" });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  if (id !== undefined && req.body !== undefined) {
    const todo = editTodo(id, req.body);
    res.status(201).send(todo);
  } else res.status(400).send("Bad Request");
});

router.delete("/:id", (req, res) => {
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

module.exports = router;
