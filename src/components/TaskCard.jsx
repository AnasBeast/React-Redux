import React from 'react'
import "./styles.css"
import { doneTask } from '../Redux/Actions/Actions'
import { useDispatch,useSelector } from 'react-redux'

const TaskCard = ({prop}) => {
  const dispatch = useDispatch()

  return (
    <div class="container">
      {/* <div className='card-container'>
        <h1 className='card-title'>{prop.task}</h1>
        {prop.isDone && <button class="button-3" role="button">Done</button>}
        {!prop.isDone && <button class="button-2" role="button" onClick={()=> dispatch(doneTask(prop.id))}>Not yet</button>}
    </div> */}
      <div class="card">
       
        <div class="contentBx">
          <h1 className='task-number'>Task Number {prop.id + 1} : </h1>
          <div class="size">
            <h1 className='task-name'>{prop.description}</h1>
          </div>
          <div className='color'>
            {prop.isDone && <button class="button-3" role="button">Done</button>}
           {!prop.isDone && <button class="button-2" role="button" onClick={()=> dispatch(doneTask(prop.id))}>Not yet</button>}
          </div>
          
        </div>
      </div>
    </div>
    
  )
}

export default TaskCard