import React from 'react'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import TaskCard from '../components/TaskCard'
import { taskslist } from '../Redux/Actions/Actions'
import { addTask } from '../Redux/Actions/Actions'
import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/Form';
import "../style.css"

const AddTask = () => {
    const dispatch = useDispatch()
    const state = useSelector(state=> state.tasksList)
    const [task ,setTaskName] = useState("")

  return (
    <div className='task-input'>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{"color" : "#FFF"}}>Add A Task</Form.Label>
              <Form.Control type="text" placeholder="Enter Task Name" onChange={(e)=> setTaskName(e.target.value) }/>
              <Form.Text className="text-muted">
                This Task will be considered not done yet.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="button"
              onClick={()=> dispatch(addTask({task : task }))}
            >
              Add
            </Button>
          </Form>
    </div>
  )
}

export default AddTask