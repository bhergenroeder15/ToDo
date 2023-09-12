export type Task = {
    _id: string;
    taskName: string;
    dueDate: string;
    notes: string;
    priority: boolean;
    completed: boolean;
}
export type TaskListProps = {
    list: Task[]
}

export type TaskModal = {
    _id: string;
    taskName: string;
    dueDate: string;
    notes: string;
    priority: boolean;
    edit: boolean;
}