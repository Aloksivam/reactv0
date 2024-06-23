import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let count=33
  let [count, setCount] = useState(0)
  const  addValue=()=>{
    // count=count+1
    setCount(count+1)
    // counter=counter+1
  }
  const remValue=()=>{
    count=count-1
    if(count<0){
      alert('negative reached')
    }
    else
   setCount(count)
  }
  // function remValue(){
  //  setCount(count-1)
  // }
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Couner value: {count}</h2>
    <button 
    onClick={addValue}
    >Add value{count}</button>
    <br />
    <button onClick={remValue}>remove value</button>
    </>
  )
}
export default App
