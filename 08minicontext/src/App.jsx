import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import UserContextProvider from './context/UserContextProvider'
import viteLogo from '/vite.svg'
import Login from './componetns/Login'
import Profile from './componetns/Profile'
import './App.css'
// import U
function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider> <Login/>
     <Profile/></UserContextProvider>
  )
}

export default App
