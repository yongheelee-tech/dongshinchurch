import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import PastorGreeting from './pages/PastorGreeting'
import WorshipTimes from './pages/WorshipTimes'
import ServingPeople from './pages/ServingPeople'

function App() {
  const location = useLocation()
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Trigger animation on route change and initial load
    setIsAnimating(false)
    const timer = setTimeout(() => {
      setIsAnimating(true)
    }, 10)
    
    return () => clearTimeout(timer)
  }, [location.pathname])

  // Trigger animation on initial mount
  useEffect(() => {
    setIsAnimating(true)
  }, [])

  return (
    <div className={`font-sans ${isAnimating ? 'page-enter' : ''}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pastor-greeting" element={<PastorGreeting />} />
        <Route path="/worship-times" element={<WorshipTimes />} />
        <Route path="/serving-people" element={<ServingPeople />} />
      </Routes>
    </div>
  )
}

export default App

