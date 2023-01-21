const todoElements = [...document.querySelectorAll(`[data-sw="todo"]`)];

const handleClick = (e) => {
  const todoEl = e.target;
  let isCompleted = todoEl.getAttribute("data-completed") === "true";
  isCompleted = !isCompleted;

  const todo = {
    id: todoEl.getAttribute("data-id"),
    completed: isCompleted,
  };

  fetch(`/api/todos/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (isCompleted) {
        todoEl.setAttribute("data-completed", "true");
        todoEl.classList.add("todo--completed");
      } else {
        todoEl.setAttribute("data-completed", "false");
        todoEl.classList.remove("todo--completed");
      }
    });
};

todoElements.forEach((el) => el.addEventListener("click", handleClick));
