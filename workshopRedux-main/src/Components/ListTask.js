import React from 'react'
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
const todos = useSelector(state => state.todos)

    return (
        <div>
            <h2>list of tasks to do</h2>
           
          
             <ul>
     
     List of tasks
     {todos.map((todo, i) => (
     <Task todo={todo} key={i} />
   ))}
             
         </ul>  

        </div>
    )
}

export default ListTask
