import React from "react"

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
            <td>{task.title}</td>
            <td style={getStatusStyle(task.status)}>{task.status}</td>
            <td>{new Date(task.createdAt).toLocaleDateString()}</td>
        </tr>
    )
}

export default React.memo(TaskRow)