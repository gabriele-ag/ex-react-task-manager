import { createContext} from "react"
import useTasks from "../components/useTasks";


export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    
    const {tasks, fetchTask, addTask, deleteTask } = useTasks()

    return <GlobalContext.Provider value={{tasks, fetchTask, addTask, deleteTask}}>{children}</GlobalContext.Provider>

}