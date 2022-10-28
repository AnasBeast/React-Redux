import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import "./style.css"
import AddTask from './components/AddTask'
import ListTask from './components/ListTask'

const Test = () => {
    const state = useSelector(state=> state.tasksList)
    console.log(state)
    return (
      <div>
        <AddTask />
        <h1 className='title'>TO DO LIST :</h1>

        
        <ListTask/>
        
    
      </div>
    )
}

export default Test