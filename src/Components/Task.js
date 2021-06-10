import React from 'react'
import {useDispatch} from 'react-redux';
import {deleteTask} from '../Redux/Action/action'
import Edit from './Edit';
const Task = ({todo}) => {
    const dispatch=useDispatch();
    const handleDelete =()=>{
        dispatch(deleteTask(todo.id));

    }
    return (
        <div>
            <table>
                <tr>
                
            <td>
            {todo.description}
            </td>
            <td>
            {todo.isDone}
            </td>
            <td>
            <Edit description={todo.description}/>
            <button onClick={handleDelete}>Delete</button>
            {todo.isDone}
            </td>
            </tr>
            </table>
        </div>
    )
}

export default Task
