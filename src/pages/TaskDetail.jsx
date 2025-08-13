import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const TaskDetail = () => {

    // Preparo id per la task corrente
    const { id } = useParams();

    // Estraggo i dati dal GlobalContext
    const { tasks } = useContext(GlobalContext);


    // Cerco la task corrispondente
    const singleTask = tasks.find(curTask => curTask.id === parseInt(id))

    // Se la task non viene trovata, inserisco un avviso
    if(!singleTask) {
        return <p>Task non trovata</p>
    }


    return (
        <div>
            <h2>{singleTask.title}</h2>
            <p>Descrizione: {singleTask.description}</p>
            <p>Stato: {singleTask.status}</p>
            <p>Data di creazione: {new Date(singleTask.createdAt).toLocaleDateString()}</p>
            <button>Elimina Task</button>
        </div>
    )

}

export default TaskDetail