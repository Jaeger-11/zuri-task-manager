const express = require('express');
const router = express.Router();

const {
    getAllTasks,
    createTask,
    editTask,
    deleteTask
} = require("../controllers/tasksControllers")

router.get('/', getAllTasks);
router.post('/', createTask);
router.patch('/:id', editTask);
router.delete('/:id', deleteTask);

module.exports = router;