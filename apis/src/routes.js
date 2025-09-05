const express = requeire('express');
const taskController = require('./controllers/taskController')

const router = express.Router()

//Rotas de crud
router.get('/tasks',taskController.getAll)
router.get('/tasks/:id', taskController.getById)
// router.post('/tasks', taskController.create)
// router.put('tasks:id', taskController.update)
// router.delete('taskd:id', taskController.remove)

module.exports = router