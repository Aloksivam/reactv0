/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
<Card/>
<ThemeBtn/>
</>
  )
}

export default App
