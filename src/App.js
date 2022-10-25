import logo from './logo.svg';
import './App.css';
import {useSelector , useDispatch} from "react-redux"
import {increment,decrement} from "./Redux/Actions/Actions"
import { useState } from 'react';
import Test from './Test';
function App() {
  const {counter} = useSelector(state => state)
  const dispatch = useDispatch()
  const [number , setNumber] = useState(0)
  
  // console.log(counter)
  return (
    <div className='App' style={{"height":"100vh","backgroundImage":"url(https://gomytech.gomycode.co/content/images/2020/12/bah-launch-01-min.jpg)","backgroundSize":"cover"}}>
      <h1 style={{"color" : "greenyellow"}}>Checkpoint REDUX</h1>
      
      <Test/>
    </div>
  );
}

export default App;
