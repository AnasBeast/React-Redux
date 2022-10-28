import React, { useState } from 'react'
import "./styles.css"
import { doneTask } from '../Redux/Actions/Actions'
import { undoneTask } from '../Redux/Actions/Actions'
import { editTask } from '../Redux/Actions/Actions'
import { useDispatch,useSelector } from 'react-redux'
import Button from 'react-bootstrap/esm/Button'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const TaskCard = ({prop,index}) => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const [taskname , setTaskName] = useState("")
  const handleClose = () => {
    dispatch(editTask({id : prop.id , description : taskname}))
    setShow(false)
  };
  console.log(index)
  const handleShow = () => setShow(true);
  return (
    <div class="container">
      {/* <div className='card-container'>
        <h1 className='card-title'>{prop.task}</h1>
        {prop.isDone && <button class="button-3" role="button">Done</button>}
        {!prop.isDone && <button class="button-2" role="button" onClick={()=> dispatch(doneTask(prop.id))}>Not yet</button>}
    </div> */}
      <div class="card">
       
        <div class="contentBx">
          <h1 className='task-number'>Task Number {index+1} : </h1>
          <div class="size">
            <h1 className='task-name'>{prop.description}</h1>
          </div>
          <div className='color card-buttons'>
           
            <Button variant="primary" onClick={handleShow}>
              Edit Task
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Form.Control type="text" placeholder="Enter Task Name" onChange={(e)=> setTaskName(e.target.value) }/>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                
                <Button variant="primary" type="button"
                  onClick={handleClose}
                >
                  Edit
                </Button>
                
              </Modal.Footer>
            </Modal>
            {prop.isDone && <button class="button-3" role="button" onClick={()=> dispatch(undoneTask(prop.id))}>Done</button>}
            {!prop.isDone && <button class="button-2" role="button" onClick={()=> dispatch(doneTask(prop.id))}>Not yet</button>}
          </div>
          
        </div>
      </div>
    </div>
    
  )
}

export default TaskCard