import { createContext} from "react"
import useTasks from "../components/useTasks";


export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    
    const {tasks, fetchTask, addTask, removeTask, updateTask } = useTasks()

    return <GlobalContext.Provider value={{tasks, fetchTask, addTask, removeTask, updateTask}}>{children}</GlobalContext.Provider>

}