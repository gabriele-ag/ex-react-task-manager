import { createContext} from "react"
import useTasks from "../components/useTasks";


export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    
    const {tasks, fetchTask, addTask, removeTask } = useTasks()

    return <GlobalContext.Provider value={{tasks, fetchTask, addTask, removeTask}}>{children}</GlobalContext.Provider>

}