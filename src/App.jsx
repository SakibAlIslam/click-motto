import { useState } from 'react'
import './App.css'
import HeroBanner from './components/HeroBanner/HeroBanner'
import Navbar from './components/Navbar/Navbar'
import TopCategories from './components/TopCategories/TopCategories'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar />
      <HeroBanner />
      <TopCategories />
    </div>
    </>
  )
}

export default App
