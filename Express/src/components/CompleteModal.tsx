import { SimpleModalProps } from "../types"
export default function CompleteModal(props: SimpleModalProps){


    const handleComplete = () => {
        fetch(`/api/completeTask/${props._id}`, {
            method: 'PUT',
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
            <button type="button" className="btn btn-success" data-toggle="modal" data-target="#myModal">
            Complete
            </button>

            <div className="modal" id="myModal">
            <div className="modal-dialog">
                <div className="modal-content">

                <div className="modal-header">
                    <h4 className="modal-title">Mark Task As Completed?</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-success" onClick={handleComplete} data-dismiss="modal">Yes, Complete</button>
                    <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                </div>

                </div>
            </div>
            </div>
        </>
    )
}