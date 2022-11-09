const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Must provide a title name"],
        trim: true,
        maxlength: [35, "Title should have no more than 35 characters"]
    }
})