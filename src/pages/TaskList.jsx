// Mostrerà elenco Task

// GlobalContext API
import { useCallback, useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

// Import delle tasks con React.memo
import TaskRow from "../components/TaskRow";
import { useState, useMemo } from "react";


const debounce = (fn, delay = 500) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};



const TaskList = () => {
    
    const { tasks } = useContext(GlobalContext)


    // Creo gli stati per ordinare la lista
    const [sortBy, setSortBy] = useState("createdAt")
    const [sortOrder, setSortOrder] = useState(1)
    
    // Creo lo stato per gestire la ricerca
    const [searchQuery, setSearchQuery] = useState("")


    const search = useCallback(debounce(value => setSearchQuery(value), []))

    const sortedTasks = useMemo(() => {
            const statusOrder = {
                "To do": 0,
                "Doing": 1,
                "Done": 2,
            };

            return [...tasks]
                .filter((task) =>
                task.title.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .sort((a, b) => {
                let aValue, bValue;

                if (sortBy === "title") {
                aValue = a.title.toLowerCase();
                bValue = b.title.toLowerCase();
                return aValue.localeCompare(bValue) * sortOrder;
                }

                if (sortBy === "status") {
                aValue = statusOrder[a.status] ?? 99;
                bValue = statusOrder[b.status] ?? 99;
                return (aValue - bValue) * sortOrder;
                }

                if (sortBy === "createdAt") {
                aValue = new Date(a.createdAt).getTime();
                bValue = new Date(b.createdAt).getTime();
                return (aValue - bValue) * sortOrder;
                }

                return 0;
            });
            
        }, [tasks, sortBy, sortOrder, searchQuery]);
        
    const handleSort = (column) => {
            if (sortBy === column) {
            setSortOrder(prev => prev * -1);
            } else {
            setSortBy(column);
            setSortOrder(1);
            }
        }

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

            <label >Cerca la task</label>
            <input 
            type="text"
            onChange={(e) => search(e.target.value)}
            placeholder="Cerca per nome..." />

            <table style={{ width: "100%", borderCollapse: "collapse" }}>

                    <thead>
                    <tr>
                        <th onClick={() => handleSort("title")} style={{ cursor: "pointer" }}>
                        Nome {sortBy === "title" && (sortOrder === 1 ? "▲" : "▼")}
                        </th>
                        <th onClick={() => handleSort("status")} style={{ cursor: "pointer" }}>
                        Stato {sortBy === "status" && (sortOrder === 1 ? "▲" : "▼")}
                        </th>
                        <th onClick={() => handleSort("createdAt")} style={{ cursor: "pointer" }}>
                        Data di Creazione {sortBy === "createdAt" && (sortOrder === 1 ? "▲" : "▼")}
                        </th>
                    </tr>
                    </thead>

                    <tbody>
                        {sortedTasks.map((curTask) => (
                            <TaskRow key={curTask.id} task={curTask} />
                        ))}
                    </tbody>
        </table>
    </div>
        </>
    )
}

export default TaskList