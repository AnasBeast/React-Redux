import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { increment,decrement } from './Redux/Actions/Actions'
const Test = () => {
    const dispatch = useDispatch()
    const counter = useSelector(state=> state.counterReducer.counter)
    const state = useSelector(state=> state)
    console.log(state)
    const [number,setNumber] = useState(0)
  return (
    <div>
        <input type="text" onChange={(e)=> setNumber(e.target.value) }/>
    <button onClick={()=> dispatch(increment(+number))}>Plus</button>
    <h1>Counter :{counter}</h1>
    <button onClick={()=>dispatch(decrement(+number))}>Minus</button>
    </div>
  )
}

export default Test