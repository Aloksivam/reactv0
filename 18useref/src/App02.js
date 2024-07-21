/* eslint-disable no-unused-vars */
// This example shows use of useRef hook for focussing in an input field
import logo from './logo.svg';
import './App.css';
import {useRef} from 'react'

function App() {
  const formInputRef = useRef('null')
  const clickedHandler = ()=>{
    formInputRef.current.focus();
    // console.log("")

  }
  return (
    <div className="App">
     <h1>Uses of useRef to focussed on input</h1>
     <input type='text' ref={formInputRef}/>
     <button onClick={clickedHandler}>click it</button>
    </div>
  );
}

export default App;
