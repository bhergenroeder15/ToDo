import { SimpleModalProps } from "../types"
export default function ReopenModal(props: SimpleModalProps){

    const handleReopen = () => {
        fetch(`/api/reopenTask/${props._id}`, {
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
            Reopen
            </button>

            <div className="modal" id="myModal">
            <div className="modal-dialog">
                <div className="modal-content">

                <div className="modal-header">
                    <h4 className="modal-title">Reopen Task?</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-success" onClick={handleReopen} data-dismiss="modal">Yes, Reopen</button>
                    <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                </div>

                </div>
            </div>
            </div>
        </>
    )
}