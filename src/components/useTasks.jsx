import {useState, useEffect} from "react"

function useTasks(){
    const [tasks, setTasks] = useState([])

    const API_URL = import.meta.env.VITE_API_URL;

    const fetchTask = async () => {

        try {
        const response = await fetch(`${API_URL}/tasks`)
        const data = await response.json()
        setTasks(data);
        } catch (error) {
            console.error("Errore nel fetch dei task:", error);
        }
    }

    useEffect(() => {
        fetchTask()
    }, [])

    const addTask = () => {}

    const removeTask = () => {}

    const updateTask = () => {}


    console.log(tasks)
    return {tasks, addTask, removeTask, updateTask}

}

export default useTasks