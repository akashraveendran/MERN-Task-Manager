const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: [true, "Must Provide name"],
        trim: true,
        maxlength: [50, "Name cannot be more than 50 characters"]
    },
    description: {
        type: String,
        required: [true, "Must Provide Description"],
        trim: true,
    },
    difficulty: {
        type: String,
        required: [true, "Must Provide Difficulty"],
        trim: true,
    },
    dueDate: {
        type: String,
        required: [true, "Must Provide dueDate"],
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('Task', TaskSchema);