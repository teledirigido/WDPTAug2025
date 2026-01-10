const router = require('express').Router();
const Project = require('../models/Project.model');

// Create Project
// When testing on POSTMAN: http://localhost:PORT/api/projects
router.post('/projects', (req, res) => {
  // Here is the body or logic to create a project
  
  // 1. read the fields from req.body
  const { title, description } = req.body

  // 2. create the post
  Project.create({ title, description, tasks: [] })
    .then( newProject => res.json(newProject) )
    .catch( err => {
      console.log('Error', err);
      res.json('You have an error');
    })

});

// Read Projects
router.get('/projects', (req, res) => {
  Project.find()
    .populate('tasks')
    .then( allProjects => res.json(allProjects) )
    .catch( err => {
      console.log('Error', err);
      res.json('You have an error');
    })
});

// Read single project
router.get('/projects/:id', (req, res) => {
  const { id } = req.params;
  Project.findById(id)
    .then( project => res.json(project) )
    .catch( err => {
      console.log('Error', err);
      res.json('Cannot retrieve the project');
    })
});

// Update Project
router.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  Project.findByIdAndUpdate(id, { title, description }, { new: true })
    .then( updatedProject => res.json(updatedProject ))
    .catch( err => res.json('Cannot update project'));
});

// Delete Project
router.delete('/projects/:id', (req, res) => {
  const { id } = req.params;
  Project.findByIdAndDelete(id)
    .then( (deletedProject) => res.json(`Project ${deletedProject.id} has been deleted`) )
});

module.exports = router;