import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
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
import { MINISTRIES } from './constants/ministries'

function getMinistryTitle(ministryName) {
  if (!ministryName) return ''
  const parts = ministryName.split(' - ')
  return (parts[1] || parts[0] || '').trim()
}

function App() {
  const location = useLocation()

  useEffect(() => {
    const CHURCH_NAME = '남가주 동신교회'
    const TAGLINE = 'Not I, but Christ'
    const HOME_TITLE = `${CHURCH_NAME} | ${TAGLINE}`

    const normalizedPath =
      location.pathname !== '/' && location.pathname.endsWith('/')
        ? location.pathname.slice(0, -1)
        : location.pathname

    const ministryMatch = MINISTRIES.find((m) => m.route === normalizedPath)

    const routeTitles = {
      '/': CHURCH_NAME,
      '/pastor-greeting': '담임목사 인사말',
      '/worship-times': '예배시간',
      '/serving-people': '섬기는 사람들',
      '/church-history': '교회연혁',
      '/next-generation': '다음세대',
      '/directions': '오시는 길',
    }

    const pageTitle = ministryMatch ? getMinistryTitle(ministryMatch.name) : routeTitles[normalizedPath]

    // Home: include tagline
    if (normalizedPath === '/') {
      document.title = HOME_TITLE
      return
    }

    // Other pages: different from home (no tagline)
    document.title = pageTitle ? `${pageTitle} | ${CHURCH_NAME}` : CHURCH_NAME
  }, [location.pathname])

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

