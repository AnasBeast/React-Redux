import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import TaskCard from './TaskCard'
import "../style.css"
import Button from 'react-bootstrap/esm/Button'

const ListTask = () => {
    const dispatch = useDispatch()
    const state = useSelector(state=> state.tasksList)
    console.log(state)
    const [task ,setTaskName] = useState("")
    const [filter , setTaskFilter] = useState(true)
  return (
    <>
        <div className='filter-section'>
            <h1>Filter Tasks</h1>
            <div className='filter-buttons'>
                <Button variant="secondary" type="button"
                onClick={()=> setTaskFilter(true)}
                >
                All
                </Button>
                <Button variant="success" type="button"
                onClick={()=> setTaskFilter("Done")}
                >
                Done
                </Button>
                <Button variant="danger" type="button"
                onClick={()=> setTaskFilter("Not Done")}
                >
                Not Done
                </Button>
            </div>
            </div>
        <div className='flex-row'>
            
            {state.map((task,index)=>(
               
                <div key={index}>
                {filter===true &&  <TaskCard prop={task} index={index}/>}
                {filter==="Done" && task.isDone==true && <TaskCard prop={task} index={index}/>}
                {filter==="Not Done" && task.isDone==false && <TaskCard prop={task} index={index}/>}

                </div>
            
            ))}
        </div>
    </>
  )
}

export default ListTask