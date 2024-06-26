/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { useCurrency } from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='color-red-xl bg-yellow-400'>Currency converter</h1>
    </>
  )
}

export default App
