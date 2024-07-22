import React from 'react'
import './test.css';

const Button = ({children,backgroundColor})=>{
    return <button style={{backgroundColor}}>{children}</button>
}
const Alert = ({children})=>{
    return(
        <>
        <div className='Overlay'/>
        <div className='Alert'>{children}</div>
        </>
    )
}
const DeleteButton = ()=>{
    return <Button backgroundColor='red'>Delete</Button>
}
export default function App() {
    const [on,Seton]= React.useState(false);
    const clickHandler = ()=>Seton(!on)
  return (
    <div className='App'>
        <header>Little Lemon Resturent</header>
        <button onClick={clickHandler} className='initialbtn'>Click me</button>
        {on?<Alert>
            <h4>Delete Account</h4>
            <p>Are you sure you want to proceed? you will miss a lot of thing</p>
            <DeleteButton/>
        </Alert>:null}
        
        
    </div>
  )
}
