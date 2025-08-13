// Mostrerà elenco Task

// GlobalContext API
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";



const TaskList = () => {
    const { tasks } = useContext(GlobalContext)


    return (
        <>
            <div>
                <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.title}</li>
                ))}
                </ul>
            </div>
        </>
    )
}

export default TaskList