// Get All Tasks
// Get Task
// Create Task
// Edit Task
// Delete Task
const Task = require("../models/task");

const getAllTasks = async (req,res) => {
    const tasks = await Task.find({});
    res.status(200).json({count:tasks.length, tasks});
}

const getTask = async (req,res) => {
    const { id } = req.params
    const task = await Task.findById(id);
    res.status(200).json(task)
}

const createTask = async (req,res) => {
    const task = await Task.create(req.body);
    res.status(200).json(task)
}

const editTask = async (req,res) => {
    const { id } = req.params
    const { title, description, completed } = req.body
    const task = await Task.findByIdAndUpdate(id, {title, description, completed}, {
        new: true,
        runValidators: true,
    })
    res.status(200).json({task})
}

const deleteTask = async (req,res) => {
    const { id } = req.params
    const task = await Task.findByIdAndDelete(id)
    res.status(204)
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    editTask,
    deleteTask
}