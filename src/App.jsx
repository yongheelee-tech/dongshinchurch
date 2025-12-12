import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PastorGreeting from './pages/PastorGreeting'
import WorshipTimes from './pages/WorshipTimes'
import ServingPeople from './pages/ServingPeople'
import ChurchHistory from './pages/ChurchHistory'

function App() {
  return (
    <div className="font-sans">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pastor-greeting" element={<PastorGreeting />} />
        <Route path="/worship-times" element={<WorshipTimes />} />
        <Route path="/serving-people" element={<ServingPeople />} />
        <Route path="/church-history" element={<ChurchHistory />} />
      </Routes>
    </div>
  )
}

export default App

