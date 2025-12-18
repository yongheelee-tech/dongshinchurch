import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PastorGreeting from './pages/PastorGreeting'
import WorshipTimes from './pages/WorshipTimes'
import ServingPeople from './pages/ServingPeople'
import ChurchHistory from './pages/ChurchHistory'
import NextGeneration from './pages/NextGeneration'
import Toddler from './pages/Toddler'
import Directions from './pages/Directions'
import Newborn from './pages/Newborn'
import Infant from './pages/Infant'
import Kinder from './pages/Kinder'
import ElemLower from './pages/ElemLower'
import ElemUpper from './pages/ElemUpper'
import YouthJr from './pages/YouthJr'
import YouthHigh from './pages/YouthHigh'
import ECollege from './pages/ECollege'
import YoungAdult from './pages/YoungAdult'
import Adult from './pages/Adult'
import KoreanSchool from './pages/KoreanSchool'
import Preschool from './pages/Preschool'

function App() {
  return (
    <div className="font-sans">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pastor-greeting" element={<PastorGreeting />} />
        <Route path="/worship-times" element={<WorshipTimes />} />
        <Route path="/serving-people" element={<ServingPeople />} />
        <Route path="/church-history" element={<ChurchHistory />} />
        <Route path="/next-generation" element={<NextGeneration />} />
        <Route path="/newborn" element={<Newborn />} />
        <Route path="/infant" element={<Infant />} />
        <Route path="/toddler" element={<Toddler />} />
        <Route path="/kinder" element={<Kinder />} />
        <Route path="/elem-lower" element={<ElemLower />} />
        <Route path="/elem-upper" element={<ElemUpper />} />
        <Route path="/youth-jr" element={<YouthJr />} />
        <Route path="/youth-high" element={<YouthHigh />} />
        <Route path="/ecollege" element={<ECollege />} />
        <Route path="/youngadult" element={<YoungAdult />} />
        <Route path="/adult" element={<Adult />} />
        <Route path="/koreanschool" element={<KoreanSchool />} />
        <Route path="/preschool" element={<Preschool />} />
        <Route path="/directions" element={<Directions />} />
      </Routes>
    </div>
  )
}

export default App

