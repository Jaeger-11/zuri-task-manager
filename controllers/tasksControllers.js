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
    try {
        const task = await Task.findById(id);
        res.status(200).json(task)
    } catch (error) {
        res.status(404).json({msg:"task id does not exist"})
    }
}

const createTask = async (req,res) => {
    const { title, description } = req.body
    if( title && description ){
        const task = await Task.create(req.body);
        res.status(200).json(task)
    } else {
        res.status(400).json({msg:"title and description cannot be empty"})
    }
}

const editTask = async (req,res) => {
    const { id } = req.params
    const { title, description, completed } = req.body
    if(!title || !description || !completed){
        res.status(400).json({msg:"There as to be a parameter!"})
    }
    const task = await Task.findByIdAndUpdate(id, {title, description, completed}, {
        new: true,
        runValidators: true,
    })
    res.status(200).json({task})
}

const deleteTask = async (req,res) => {
    const { id } = req.params
    try {
        const task = await Task.findByIdAndDelete(id)
        res.status(204) 
    } catch (error) {
        res.status(404).json({msg:"task id does not exist"})
    }
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    editTask,
    deleteTask
}