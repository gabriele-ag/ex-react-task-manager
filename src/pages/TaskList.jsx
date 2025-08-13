// Mostrerà elenco Task

// GlobalContext API
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

// Import delle tasks con React.memo
import TaskRow from "../components/TaskRow";



const TaskList = () => {
    
    const { tasks } = useContext(GlobalContext)


    // Cambia colore a task.status a seconda dello stato 
    const getStatusStyle = (status) => {
        switch (status) {
            case "To do":
                return { color: "#d10000"};
            case "Doing":
                return { color: "#185ddbff"};
            case "Done":
                return { color: "#27b648ff"};
            default:
                return { color: "#666"};
        }
    };


    return (
        <>
            <div>
                <h2>Elenco Task</h2>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Stato</th>
                        <th>Data di Creazione</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tasks.map(curTask => (
                        <TaskRow key={curTask.id} task={curTask} />
                    ))}
                    </tbody>
      </table>
            </div>
        </>
    )
}

export default TaskList