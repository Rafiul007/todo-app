const express = require("express");
const router = express.Router();
const Todo = require("../model/todo.model");

//get all todos
router.get("/todos", async (req, res) => {
  try {
    let todos = await Todo.find({});
    // console.log(todos);
    if (!todos) {
      return res.status(401).json({ msg: "No todo found" });
    } else {
      return res.json(todos);
    }
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
});
//create a new todo
router.post("/todos", async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed || false,
  });
  try {
    const newTodo = await todo.save();
    return res.status(201).json(newTodo);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
});
//get a single todo by id
router.get("/todos/:id", async (req, res) => {
  const { id } = req.params;
  if (!require("mongoose").Types.ObjectId.isValid(id)) {
    return res.status(404).send("Invalid ID");
  }
  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).send("Todo not found");
    }
    res.send(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
//delete a todo by id
router.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  if (!require("mongoose").Types.ObjectId.isValid(id)) {
    return res.status(404).send("Invalid ID");
  }
  try {
    const todo = await Todo.findByIdAndRemove(id);
    res.json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ msg: "Error deleting todo" });
  }
});
//update a todo by id
router.patch("/todos/:id", async (req, res) => {
  if (req.body.title != null) {
    res.todo.title = req.body.title;
  }
  if (req.body.description != null) {
    res.todo.description = req.body.description;
  }
  if (req.body.completed != null) {
    res.todo.completed = req.body.completed;
  }
  //save the updated todo
  try{
     const updatedTodo = await res.todo.save();
      res.json(updatedTodo);
  }catch(err){
       console.error(err.message);
        res.status(500).send('server error');
  }
});

module.exports = router;
