export type Task = {
    _id: string;
    taskName: string;
    dueDate: string;
    notes: string;
    priority: boolean;
    completed: boolean;
}
export type TaskListProps = {
    list: Task[];
    open: boolean;
}

export type TaskModalProps = {
    _id: string;
    taskName: string;
    dueDate: string;
    notes: string;
    priority: boolean;
    edit: boolean;
}

export type SimpleModalProps = {
    _id: string;
}