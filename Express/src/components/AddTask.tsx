import {useState} from 'react';

export default function AddTask(){

    const [form, updateForm] = useState({
        taskName: '',
        dueDate: '',
        priority: false,
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
        console.log(e.target.id)
        if (e.target.id === 'priority'){
            updateForm({
                ...form,
                [e.target.id]: e.target.checked,
            })
        } else {
            updateForm({
                ...form,
                [e.target.id]: e.target.value,
            })
        }
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(form)
    }
    return(
        <>
            <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">Add Task</button>
            <form id="myModal" className="modal fade" role="dialog" onSubmit={handleSubmit}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Add New Task...</h4>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="text" id="taskName" className="form-control" onChange={handleChange} />
                            <label className="form-label" htmlFor="taskName">Name</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="datetime-local" id="dueDate" className="form-control" onChange={handleChange}/>
                            <label className="form-label" htmlFor="dueDate">Due Date/Time</label>
                        </div>
                        <div className="checkbox">
                            <label><input type="checkbox" id="priority" onChange={handleChange}/>Mark as High Priority</label>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">Add</button>
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </form>
        </>

    )
}