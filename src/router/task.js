//tasks.js in router
const express = require('express')
const router = express.Router()

const {getAllTasks, createTask, getTask, updateTask, deleteTask} = require('../controller/tasks')

router.route('/').get(getAllTasks).post(createTask) // 1 and 2
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask) //3, 4, 5

module.exports = router