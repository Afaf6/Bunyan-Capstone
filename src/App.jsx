import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Dashbord from './pages/Dashboard/Dashbord'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Dashbord/>
    </>
  )
}

export default App;
