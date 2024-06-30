import React from 'react'
import { useState,useContext } from 'react'
import UserContext from '../context/UserContext'

export default function Login() {
    const [username,SetUsername] = useState('alok')
    const [password,SetPassword] = useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit=(e)=>{
      e.preventDefault()
      setUser({username, password})
}
  return (
    <>
    <div>Login</div>
    <input type="text" 
    value={username}
    onChange={(e)=>SetUsername(e.target.value)}
    placeholder='Username'/>
    {" "}
    <input type="password" value={password} onChange={(e)=>SetPassword(e.target.value)} 
 placeholder='Password' />
 <button onClick={handleSubmit}>submit</button>
  </>)
}
