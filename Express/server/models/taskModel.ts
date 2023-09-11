import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const taskSchema = new Schema({
    taskName: {
        type: String,
        required: true,
    },
    dueDate: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: false
    },
    priority: {
        type: Boolean,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
    }
});

const Task = mongoose.model('Task', taskSchema);
export default Task;
