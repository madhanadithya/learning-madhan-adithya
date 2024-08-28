const express = require("express");
const router = express.Router();
const TodoController = require("../controllers/todos");

router.get("/", async (req, res) => TodoController.getTodo);

router.get("/:id", async (req, res) => TodoController.getTodoById);

router.post("/", TodoController.createTodo);

router.delete("/:id", async (req, res) => TodoController.deleteTodo);

router.put("/:id", TodoController.putTodo);

module.exports = router;
