const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Task = require("../models/Task.model");
const Project = require("../models/Project.model");

//  POST /api/tasks  -  Creates a new task
router.post("/tasks", (req, res, next) => {
  const { title, description, projectId } = req.body;

  Task.create({ title, description, project: projectId })
    .then((newTask) => {
      return Project.findByIdAndUpdate(projectId, {
        $push: { tasks: newTask._id },
      });
    })
    .then((response) => res.json(response))
    .catch((err) => {
      console.log("Error while creating the task", err);
      res.status(500).json({ message: "Error while creating the task" });
    });
});

module.exports = router;
