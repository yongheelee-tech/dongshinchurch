import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Toddler() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const navigate = useNavigate()

  const ministries = [
    { id: 'newborn', name: 'New Born - 자모부', route: '/newborn' },
    { id: 'infant', name: 'Infant - 영아부', route: '/infant' },
    { id: 'toddler', name: 'Toddler - 유아부', route: '/toddler' },
    { id: 'kinder', name: 'Kinder - 유치부', route: '/kinder' },
    { id: 'elem-lower', name: 'Elem (Lower) - 유년부', route: '/elem-lower' },
    { id: 'elem-upper', name: 'Elem (Upper) - 초등부', route: '/elem-upper' },
    { id: 'youth-jr', name: 'Youth (Jr. High) - 중등부', route: '/youth-jr' },
    { id: 'youth-high', name: 'Youth (High) - 고등부', route: '/youth-high' },
    { id: 'ecollege', name: 'E-College - 영어대학부', route: '/ecollege' },
    { id: 'youngadult', name: '청년부', route: '/youngadult' },
    { id: 'adult', name: '청장년부', route: '/adult' },
    { id: 'koreanschool', name: '한국학교', route: '/koreanschool' },
    { id: 'preschool', name: '동신프리스쿨', route: '/preschool' },
  ]

  const [activeTab, setActiveTab] = useState('toddler')

  // Gallery images - placeholder paths, update with actual images
  const galleryImages = [
    { src: '/img/gallery/toddler-1.jpg', alt: 'Children playing' },
    { src: '/img/gallery/toddler-2.jpg', alt: 'Classroom activity' },
    { src: '/img/gallery/toddler-3.jpg', alt: 'Children drawing' },
    { src: '/img/gallery/toddler-4.jpg', alt: 'Group activity' },
    { src: '/img/gallery/toddler-5.jpg', alt: 'Service or performance' },
    { src: '/img/gallery/toddler-6.jpg', alt: 'Worship activity' },
  ]

  const handleTabChange = (ministry) => {
    setActiveTab(ministry.id)
    if (ministry.route && ministry.route !== '/toddler') {
      navigate(ministry.route)
    }
  }

  return (
    <div className="font-sans">
      <Header />
      
      {/* Tab Switcher */}
      <section className="bg-white pt-24 pb-4">
        <div className="container mx-auto px-4 md:px-[100px]">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-1 md:space-x-2 border-b border-gray-200 pb-2 min-w-max">
              {ministries.map((ministry) => {
                const displayName = ministry.name.includes(' - ') 
                  ? ministry.name.split(' - ')[1] 
                  : ministry.name
                return (
                  <button
                    key={ministry.id}
                    onClick={() => handleTabChange(ministry)}
                    className={`px-3 md:px-4 py-2 text-xs md:text-sm font-semibold whitespace-nowrap transition-all border-b-2 ${
                      activeTab === ministry.id
                        ? 'text-primary border-primary'
                        : 'text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300'
                    }`}
                  >
                    {displayName}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      
      {/* Hero/Banner Section */}
      <section className="bg-white pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-4 md:px-[100px]">
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col md:flex-row gap-8 md:gap-12 items-start max-w-7xl"
          >
            {/* Left Column - Text Content */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
                유아부
              </h1>
              
              <p className="text-base md:text-lg text-black mb-8 leading-relaxed">
                어린이들의 마음에 하나님과 이웃에 대한 사랑을 심어줍니다.
              </p>
              
              {/* CTA Button */}
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-gray-700 transition-all text-sm md:text-base font-semibold"
              >
                사역 신청하기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            
            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex-1 w-full"
            >
              <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                {/* Placeholder for classroom image - replace with actual image */}
                <img 
                  src="/img/toddler-classroom.jpg" 
                  alt="유아부 교실" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="w-full h-full bg-gray-200 flex items-center justify-center hidden">
                  <span className="text-gray-400">Classroom Image</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Serving Person Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-[100px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
              섬기시는 분
            </h2>
            
            <div className="flex flex-col items-start">
              {/* Profile Picture */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden mb-4 bg-blue-200">
                {/* Placeholder for profile image - replace with actual image */}
                <img 
                  src="/img/lim-in-hye.jpg" 
                  alt="임인혜 전도사" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="w-full h-full bg-blue-200 flex items-center justify-center hidden">
                  <span className="text-blue-400 text-xs">Profile Image</span>
                </div>
              </div>
              
              {/* Name */}
              <p className="text-lg md:text-xl font-semibold text-black">
                임인혜 전도사
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white py-12 md:py-16 pb-24 md:pb-32">
        <div className="container mx-auto px-4 md:px-[100px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
              유아부 갤러리
            </h2>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="aspect-square rounded-lg overflow-hidden bg-gray-200"
                >
                  {/* Placeholder for gallery images - replace with actual images */}
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center hidden">
                    <span className="text-gray-400 text-sm">Gallery {index + 1}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
