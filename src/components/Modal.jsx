import ReactDOM from 'react-dom'

const Modal = ({title, content, show, onClose, onConfirm, confirmText = "Conferma"}) => {

    if(!show) return null

    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-box">
                <h3>{title}</h3>
                <p>{content}</p>
                <div className="modal-actions">
                    <button onClick={onConfirm}>{confirmText}</button>
                    <button onClick={onClose}>Annulla</button>
                </div>
            </div>
        </div>,
        document.getElementById("modal-root")
    )
}

export default Modal