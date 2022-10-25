import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import TaskCard from './components/TaskCard'
import { taskslist } from './Redux/Actions/Actions'
import { addTask } from './Redux/Actions/Actions'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./style.css"
import AddTask from './components/AddTask'
import ListTask from './components/ListTask'

const Test = () => {
    const dispatch = useDispatch()
    const state = useSelector(state=> state.tasksList)
    console.log(state)
    const [task ,setTaskName] = useState("")
    const [filter , setTaskFilter] = useState(true)
    return (
      <div>
        <AddTask />
        <h1 className='title'>TO DO LIST :</h1>

        
        <ListTask/>
        
    
      </div>
    )
}

export default Test