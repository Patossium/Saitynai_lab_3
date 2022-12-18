import Button from "./Button";


const Modal = ({ description, acceptHandler, declineHandler }) => {

    return (
        <div className="modal">
            <div className="modal-container">
                <div style={{ height:'50%', display: 'flex'}}>
                    <div className="modal-description">{description}</div>
                </div>
                <div style={{ height:'50%', display: 'flex'}}>
                    <div className="modal-buttons" style={{ height:'50%', display: 'flex'}}>
                        <div style={{ margin: 'auto' }}>
                            <button style={{ margin: '5px' }} onClick={acceptHandler}>Yes</button>
                            <button style={{ margin: '5px' }} >No</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;