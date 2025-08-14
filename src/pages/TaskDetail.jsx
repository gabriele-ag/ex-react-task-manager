import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

// Importo il Modale
import Modal from "../components/Modal";

const TaskDetail = () => {

    // Preparo id per la task corrente
    const { id } = useParams();

    // Preparo la navigazione verso una pagina
    const navigate = useNavigate()

    // Estraggo i dati dal GlobalContext
    const { tasks, removeTask } = useContext(GlobalContext);

    // Gestisco stato per mostrare il Modale
    const [showModal, setShowModal] = useState(false);


    // Cerco la task corrispondente
    const singleTask = tasks.find(curTask => curTask.id === parseInt(id))

    // Se la task non viene trovata, inserisco un avviso
    if(!singleTask) {
        return <p>Task non trovata</p>
    }

    const handleDelete = async () => {
        try {
            await removeTask(singleTask.id)
            alert("Task eliminata con successo!");
            navigate("/task")
        } catch(error) {
            console.error("Errore", error.message)
        }
    }


    return (
        <div>
            <h2>{singleTask.title}</h2>
            <p>Descrizione: {singleTask.description}</p>
            <p>Stato: {singleTask.status}</p>
            <p>Data di creazione: {new Date(singleTask.createdAt).toLocaleDateString()}</p>
            <button onClick={() => setShowModal(true)}>Elimina Task</button>
            <Modal
            title="Conferma eliminazione"
            content={`Sei sicuro di voler eliminare la task "${singleTask.title}"? L'azione sarà irreversibile`}
            show={showModal}
            onClose={() => setShowModal(false)}
            onConfirm={handleDelete}
            confirmText="Elimina"
            />
        </div>
    )

}

export default TaskDetail