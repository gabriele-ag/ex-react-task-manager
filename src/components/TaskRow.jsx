import React from "react"
import { Link } from "react-router-dom";

const TaskRow = ({task}) => {

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
        <tr>
            <td><Link to={`/task/${task.id}`}>{task.title}</Link></td>
            <td style={getStatusStyle(task.status)}>{task.status}</td>
            <td>{new Date(task.createdAt).toLocaleDateString()}</td>
        </tr>
    )
}

export default React.memo(TaskRow)