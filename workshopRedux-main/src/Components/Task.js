import React from 'react'

const Task = ({todo}) => {
    return (
        <div>
            <table>
                <tr>
                    <td>
            {todo.id}
            </td>
            <td>
            {todo.description}
            </td>
            <td>
            {todo.isDone}
            </td>
            <td>
            <button>edit</button>
            <button>Delete</button>
            {todo.isDone}
            </td>
            </tr>
            </table>
        </div>
    )
}

export default Task
