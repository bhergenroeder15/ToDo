import { Request, Response, NextFunction } from 'express';
import Task from '../models/taskModel.js';

export const taskController = {
    getTasks: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const openTasks = await Task.find({completed: false})
            const closedTasks = await Task.find({completed: true})
            res.locals.openTasks = openTasks;
            res.locals.closedTasks = closedTasks;
            return next()
        } catch (err) {
            return next({log: 'Error in taskController getTasks middleware.', status: 500, message: err})
        }
    },
    addTask: async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log(req.params, req.body)
            const { taskName, dueDate, notes, priority } = req.body.form;
            const task = await Task.create({taskName, dueDate, notes, priority});
            res.locals.task = task;
            return next()
        } catch (err) {
            return next({log: 'Error in taskController addTask middleware.', status: 500, message: err})
        }
    },
    editTask: async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log(req.params, req.body)
            const { id } = req.params;
            const { taskName, dueDate, notes, priority } = req.body.form;
            const task = await Task.findByIdAndUpdate( id, {taskName, dueDate, notes, priority});
            res.locals.task = task;
            return next()
        } catch (err) {
            return next({log: 'Error in taskController editTask middleware.', status: 500, message: err})
        }
    },
}