import {useState} from 'react';
import { TaskModal } from '../types.js';

export default function AddTask(props: TaskModal){
    
    const [form, updateForm] = useState({
        taskName: props.taskName,
        dueDate: props.dueDate,
        notes: props.notes,
        priority: props.priority,
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>):void => {
        console.log(form)
        updateForm({
            ...form,
            [e.target.id]: e.target.value,
        })
        
    }
    const handleCheck = (e: React.ChangeEvent<HTMLInputElement>): void => {
        updateForm({
                ...form,
                [e.target.id]: e.target.checked,
            })
    }
    const handleSubmit = () => {
        if (!props.edit){
            fetch('/api/addTask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    form
                })
            })
            .then((res) => res.json())
            .then((res) => {
                console.log('Fetch Response -->', res)
            })
            .catch((err) => {
                console.log('Error in adding task:', err)
            })
        } else {
            fetch(`/api/editTask/${props._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    form
                })
            })
            .then((res) => res.json())
            .then((res) => {
                console.log('Fetch Response -->', res)
            })
            .catch((err) => {
                console.log('Error in adding task:', err)
            })
        }
    }

    
    return(
        <>
            <button type="button" className={`btn ${props.edit ? 'btn-default': 'btn-primary btn-lg'}`} data-toggle="modal" data-target={`#${props.edit ? `editModal${props._id}` : 'addModal'}`}>{props.edit ? 'Edit' : 'Add Task'}</button>
            <form id={props.edit ? `editModal${props._id}` : 'addModal'} className="modal fade" role="dialog" onSubmit={handleSubmit}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">{props.edit ? 'Edit Task...' : 'Add New Task...'}</h4>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="text" id="taskName" className="form-control" defaultValue={props.taskName} onChange={handleChange} />
                            <label className="form-label" htmlFor="taskName">Name</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="datetime-local" id="dueDate" className="form-control" defaultValue={props.dueDate} onChange={handleChange}/>
                            <label className="form-label" htmlFor="dueDate">Due Date/Time</label>
                        </div>
                        <div className="form-outline mb-4">
                            <textarea id="notes" rows={5} className="form-control" defaultValue={props.notes} onChange={handleChange} />
                            <label className="form-label" htmlFor="notes">Notes</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" id="priority" defaultChecked={props.priority} onChange={handleCheck}/>Mark as High Priority</label>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">{props.edit ? 'Submit Changes' : 'Add'}</button>
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </form>
        </>

    )
}