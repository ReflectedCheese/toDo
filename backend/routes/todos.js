const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const todos = [
    { id: 1, title: "Todo 1", completed: false },
    { id: 2, title: "Todo 2", completed: true },
  ];
  res.render("todos", { title: "Todos", todos });
});

module.exports = router;
