//tasks.js in controller
const Task = require('../models/task')

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({}) //if there's no params it sends all.

        //res.status(200).json({tasks, amount: tasks.length})
        //res.status(200).json({status: 'success', data: {tasks, nbHits: tasks.length}})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const getTask = async (req, res) => {
    try {
        const { id:taskID} = req.params //this id is from params /:id
        const task = await Task.findOne({_id:taskID})
        if (!task) { // if task is null
            return res.status(404).json({msg: `no task with id: ${taskID}`})
        }
        res.status(200).json({task})
        
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const updateTask = async (req, res) => {
    try {
        const {id: taskID} = req.params
        const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
            new: true,
            runValidators: true,
        })
        if (!task) { // if task is null
            return res.status(404).json({msg: `no task with id: ${taskID}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id:taskID} = req.params //this id is from params /:id
        const task = await Task.findOneAndDelete({_id:taskID})
        if (!task) { // if task is null
            return res.status(404).json({msg: `no task with id: ${taskID}`})
        }
        res.status(200).json({task})
        
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}