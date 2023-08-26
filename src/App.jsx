import { useState } from 'react'
import './App.css'
import HeroBanner from './components/HeroBanner/HeroBanner'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar />
      <HeroBanner />
    </div>
    </>
  )
}

export default App
