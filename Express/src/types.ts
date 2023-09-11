export type Task = {
    id: string
    taskName: string;
    dueDate: string;
    notes: string;
    priority: boolean;
    completed: boolean;
}
export type TaskListProps = {
    list: Task[]
}