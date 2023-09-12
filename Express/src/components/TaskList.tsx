import { ReactNode } from "react";
import { Task, TaskListProps } from "../types.js";
import AddTask from "./AddTask.js";
export default function TaskList(props : TaskListProps){
    return (
        <ul className="list-group">
            {props.list.length ? props.list.sort((a, b) => Date.parse(a.dueDate) - Date.parse(b.dueDate)).map((task: Task): ReactNode => {
                return ( 
                <li key={task._id} className={`task list-group-item ${task.completed ? "list-group-item-success": Date.parse(task.dueDate) < Date.now() ? "list-group-item-danger" : task.priority ? "list-group-item-warning" : "list-group-item-info"}`}>
                    <div className="taskLeft">
                        <div>
                            <p><strong>Task:</strong> {task.taskName}</p>
                            <p><strong>Due Date: </strong>{new Date(task.dueDate).toLocaleString()}</p>
                        </div>
                        <button className='btn btn-link' data-toggle="collapse" data-target={`#${task._id}notes`}>Details</button>
                        <div id={`${task._id}notes`} className="collapse">
                        {task.notes || "No notes added"}
                        </div>
                    </div>
                    <div className="taskRight">
                        <AddTask _id={task._id} taskName={task.taskName} dueDate={task.dueDate} notes={task.notes} priority={task.priority} edit={true}/>
                        <div>
                            {Date.parse(task.dueDate) < Date.now() ? <p><strong>OVERDUE</strong></p> : null}
                            {task.priority ? <p><strong>!!!</strong></p> : null}
                        </div>
                    </div>
                </li>
            )}) : <li className="list-group-item list-group-item-success">Nothing Here!</li>}
        </ul>
    )
}