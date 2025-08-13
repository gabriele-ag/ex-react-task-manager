// Conterrà il form per aggiungere nuove Task

import  { useState, useRef, useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext";


const AddTask = () => {

    // Importo addTask dal Context
    const { addTask } = useContext(GlobalContext)

    // Stati degli input e stato degli errori
    const [title, setTitle] = useState("")
    const [errors, setErrors] = useState({});

    // Stato validazione input
    const [taskNameValid, setTaskNameValid] = useState(null)

    // Input non controllati
    const descriptionRef = useRef()
    const statusTaskRef = useRef()

    

    const symbols = "!@#$%^&*()-_=+[]{}|;:'\\\",.<>?/`~"


    // Gestione del form al submit
    const handleSubmit = async (e) => {
        e.preventDefault()

        const errors = {}

        const status = statusTaskRef.current.value
        const description = descriptionRef.current.value

        if (!title.trim()) errors.title = "Il nome della task è obbligatorio"
        if (!description) errors.description = "Immetti una descrizione"
        if (!status) errors.status = "Scegli un opzione"

        setErrors(errors)

        const isValid = Object.keys(errors).length === 0

        if (isValid) {
            console.log("Form Validato")

            const newTask = { title, description, status };
            try {
            await addTask(newTask);
            console.log("Task aggiunta con successo:", newTask);
            } catch (error) {
            console.error("Errore nell'aggiunta della task:", error.message);
            }
        }

    }

    const validateTaskName = (value) => {
        const isValidLength = value.length >= 6
        const hasSymbol = [...value].some((char) => symbols.includes(char))
        return isValidLength && !hasSymbol
    }

    const handleTaskName = (e) => {
        const value = e.target.value
        setTitle(value)
        setTaskNameValid(validateTaskName(value))  
    }

    const resetForm = (e) => {
        e.preventDefault()
        setTaskName("")
        descriptionRef.current.value = ""
        optionTaskRef.current.value = ""
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={handleTaskName} placeholder="Inserisci il nome della task" />
                {taskNameValid === false && (
                <p className="error">Il nome deve contenere almeno 6 caratteri, una lettera e un numero. Non può contenere caratteri speciali</p>
                )}
                {taskNameValid === true && (
                <p className="success">Nome valido!</p>
                )}
                <textarea ref={descriptionRef} />
                <select ref={statusTaskRef} name="task-action" id="task-action">
                    <option value="">To do</option>
                    <option value="To do">To do</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
                <button type="submit">Aggiungi Task</button>
                <button onClick={resetForm}>Resetta</button>
            </form>
        </div>
    )
}

export default AddTask