import { SimpleModalProps } from "../types"

export default function DeleteModal(props: SimpleModalProps){

    const handleDelete = () => {
        fetch(`/api/deleteTask/${props._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => res.json())
        .then((res) => {
            console.log('Fetch Response -->', res)
            window.location.reload()
        })
        .catch((err) => {
            console.log('Error in deleting task:', err)
        })    
    }

    return (
        <>
            <button type="button" className="btn btn-danger" data-toggle="modal" data-target={`#deleteModal${props._id}`}>
            Delete
            </button>

            <div className="modal" id={`deleteModal${props._id}`}>
            <div className="modal-dialog">
                <div className="modal-content">

                <div className="modal-header">
                    <h4 className="modal-title">Are You Sure You Want To Delete This Task?</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={handleDelete}>Yes, Delete</button>
                    <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                </div>

                </div>
            </div>
            </div>
        </>
    )
}