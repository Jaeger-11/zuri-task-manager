const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Must provide a title name"],
        trim: true,
        maxlength: [35, "Title should have no more than 35 characters"]
    },
    description:{
        type:String,
        required: [true, "Provide a task description"],
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    }
}, {timestamps:true})

module.exports = mongoose.model('Task', TaskSchema);