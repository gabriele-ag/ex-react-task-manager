import {useState, useEffect} from "react"

function useTasks(){

    // Creo stato della chiamata API per le tasks
    const [tasks, setTasks] = useState([])
    

    // Riporto la variabile di .env
    const API_URL = import.meta.env.VITE_API_URL;


    // Effettuo la chiamata per ricevere le task
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


    // Gestisco chiamata per aggiungere task
    const addTask = async (newTask) => {

        try {
            const response = await fetch(`${API_URL}/tasks`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newTask)
            });

            const result = await response.json()

            if (!result.success) {
                throw new Error(result.message || "Errore nella creazione della task");
            }

            setTasks((prevTasks) => [...prevTasks, result.task])

        } catch(error) {
            console.error("Errore in addTask", error)
        }
    }

    const removeTask = () => {}

    const updateTask = () => {}


    console.log(tasks)
    return {tasks, addTask, removeTask, updateTask}

}

export default useTasks