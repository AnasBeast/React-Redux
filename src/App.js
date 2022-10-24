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
    <div className='App'>
    <h1>Workshop REDUX</h1>
    
<Test/>
    </div>
  );
}

export default App;
