const router = require('express').Router();

const Task = require('../models/Task.model');
const Project = require('../models/Project.model');

// Create Task
router.post('/tasks', (req, res) => {
  const { title, description, projectId } = req.body;
  Task.create({
    title,
    description,
    project: projectId
  }).then( (newTask) => {
    return Project.findByIdAndUpdate(projectId, { $push: { tasks: newTask._id } })
  }).then( updatedProject => res.json(updatedProject) )
  .catch( err => res.json(err) ) 
});

router.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  Task.findByIdAndDelete(id)
    .then( deletedTask => {
      return Project.findByIdAndUpdate(deletedTask.project, { $pull: { tasks: deletedTask._id }})
    }).then(updatedProject => res.json(updatedProject) );
});

router.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, projectId } = req.body;

  // More logic here ...

})


module.exports = router;