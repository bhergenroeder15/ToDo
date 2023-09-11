import { ReactNode } from "react";
import { Task, TaskListProps } from "../types.js";
export default function TaskList(props : TaskListProps){
    console.log(props)
    return (
        <ul className="list-group">
            {props.list.length ? props.list.sort((a, b) => Date.parse(a.dueDate) - Date.parse(b.dueDate)).map((task: Task): ReactNode => {
                return <li key={task.id} className={`list-group-item ${task.completed ? "list-group-item-success": Date.parse(task.dueDate) < Date.now() ? "list-group-item-danger" : task.priority ? "list-group-item-warning" : "list-group-item-info"}`}>
                    <div>
                        <p><strong>Task:</strong> {task.taskName}</p>
                        <p><strong>Due Date: </strong>{new Date(task.dueDate).toLocaleString()}</p>
                    </div>
                    <div>
                        {task.priority ? <p><strong>!!!</strong></p> : null}
                        {Date.parse(task.dueDate) < Date.now() ? <p><strong>OVERDUE</strong></p> : null}
                    </div>
                </li>
            }) : <li className="list-group-item list-group-item-success">Nothing Here!</li>}
        </ul>
    )
}