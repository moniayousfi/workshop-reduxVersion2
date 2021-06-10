import React, { useState } from "react";
import {useDispatch}from "react-redux";
import {addTask} from '../Redux/Action/action';

const Add = () => {
  const [newTask,setNewTask]=useState({
    id:"",
    description:"",
    isDone:false
  })
  const dispatch = useDispatch();
  const submitTask=(e)=>{
    e.preventDefault();
    if (newTask.description != ""){
    dispatch(addTask(newTask))
  }
  else {
    alert("please enter a valid task!")
  }
    }
    const handleChange=(e)=>{
    
      setNewTask({
        ...newTask,
        description: e.target.value,
        id:Math.random()
      });
    };
    
  return (
    <div>
      <form>
        <label>Description</label>
        <input type="text" name="description" onChange={handleChange} placeholder="Enter Description"/>
        <button onClick={submitTask}>Add</button>
      </form>
    </div>
  )
}

export default Add
