import ReactDOM from 'react-dom'
import { useState, useEffect, useRef } from "react";

const EditTaskModal = ({show, onClose, task, onSave}) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("");

    const editFormRef = useRef(null);

    useEffect(() => {
        if(task) {
            setTitle(task.title)
            setDescription(task.description)
            setStatus(task.status)
        }
    }, [task])

    const handleSubmit = (e) => {
        e.preventDefault()
        const updatedTask = {
            ...task,
            title,
            description,
            status,
        }

        onSave(updatedTask)
        onClose()
    }

    if(!show) return null

    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-box">

                <h1>Modifica Task</h1>

                <form ref={editFormRef} onSubmit={handleSubmit}>
                    <label>Titolo</label>
                    <input 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Modifica il titolo..."
                    required />

                    <label>Descrizione</label>
                    <textarea 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Modifica la descrizione..."
                    required/>

                    <label>Stato</label>
                    <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required>
                        <option value="To do">To do</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>

                    <div className="modal-actions">
                        <button type="button" onClick={onClose}>
                        Annulla
                        </button>
                        <button type="button" onClick={() => setTimeout(() => editFormRef.current?.requestSubmit(), 0)}>Salva</button>
                    </div>
                </form>
            </div>
        </div>,
        
        document.getElementById("editmodal-root")
    )
}

export default EditTaskModal