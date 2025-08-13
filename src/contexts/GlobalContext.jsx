import { createContext, useState, useEffect } from "react"

const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
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

    const contextValue = {
        tasks,
        setTasks,
        fetchTask,
    }

    return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>

}

export { GlobalProvider, GlobalContext }