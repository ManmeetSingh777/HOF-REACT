import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HigherOrderComponent from './Components/HigherOrderComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HigherOrderComponent/>
    </>
  )
}

export default App
