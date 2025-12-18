import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ServingPeople() {
  const associatePastors = [
    { name: '추신국 목사', englishName: 'Chu Shin-guk', district: '1교구', committee: '에녹회, 목양위원회', phone: '310-991-7440' },
    { name: '진영국 목사', englishName: 'Jin Young-guk', district: '2교구', committee: '선교위원회', phone: '310-596-0367' },
    { name: '최재호 목사', englishName: 'Choi Jae-ho', district: '3교구', committee: '행정위원회, 관리위원회', phone: '657-749-1171' },
    { name: '이현명 목사', englishName: 'Lee Hyun-myung', district: '4교구', committee: '예배위원회', phone: '213-207-8852' },
    { name: '이은상 목사', englishName: 'Lee Eun-sang', district: '5교구', committee: '새가족부', phone: '213-604-4469' },
    { name: '김상혁 목사', englishName: 'Kim Sang-hyeok', district: '6교구', committee: '주차관리부', phone: '657-445-9780' },
    { name: 'Paul Son 목사', englishName: 'Paul Son', district: 'DSCP (영어목회)', phone: '714-388-7149' },
    { name: '안만기 목사', englishName: 'Ahn Man-gi', district: '청년부', committee: '음악위원회', phone: '657-239-5441' },
    { name: '이영진 목사', englishName: 'Lee Young-jin', district: '1부/3부 성가대', committee: '친교위원회, 한국학교', phone: '714-948-0781' },
    { name: '노용진 목사', englishName: 'Noh Yong-jin', district: '2부 성가대', committee: '여성콰이어', phone: '949-557-1716' },
  ]

  const educationDept = [
    { name: '임인혜 전도사', englishName: 'Lim In-hye', district: '자모부' },
    { name: '임소영 사모', englishName: 'Lim So-young', district: '영아부', phone: '213-568-5100' },
    { name: '윤아원 사모', englishName: 'Yoon Ah-won', district: '유아부', phone: '310-616-6112' },
    { name: '체데보라 전도사', englishName: 'Che Deborah', district: '유치부' },
    { name: 'Monica Lee 전도사', englishName: 'Monica Lee', district: '유년부', phone: '310-619-8298' },
    { name: '변준경 목사', englishName: 'Byun Jun-kyung', district: '초등부', phone: '213-407-9191' },
    { name: '탁은지 전도사', englishName: 'Tak Eun-ji', district: '중등부', phone: '562-713-5365' },
    { name: 'Rachel Lee 전도사', englishName: 'Rachel Lee', district: '고등부, Youth 총괄',  phone: '714-293-2293' },
    { name: '백준 전도사', englishName: 'Baek Jun', district: '청장년부',  phone: '562-203-4194' },
    { name: 'Jonathan Won 전도사', englishName: 'Jonathan Won', district: '중고등부 인턴', phone: '323-203-4044' },
  ]

  const ministryDirector = [
    { name: '김혜원 전도사', englishName: 'Kim Hye-won', district: '동산 프리스쿨 디렉터', phone: '714-323-5280' },
  ]

  // Animated Section Component
  const AnimatedSection = ({ title, children }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.1 })

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-8">
          {title}
        </h2>
        {children}
      </motion.div>
    )
  }

  const PersonCard = ({ person, index }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })
    const delay = index * 0.1

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{
          duration: 0.6,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex flex-col items-center w-full"
      >
        {/* Headshot with rounded top corners and bright blue background */}
        <div className="w-full aspect-square bg-blue-400 rounded-t-lg flex items-center justify-center overflow-hidden">
          <div className="w-full h-full bg-blue-400"></div>
        </div>
        {/* Black info section */}
        <div className="w-full bg-black text-white p-4 rounded-b-lg text-center">
          <p className="text-sm md:text-base font-semibold text-white mb-2">{person.name}</p>
          <p className="text-xs md:text-sm text-white mb-2">
            {person.district}
            {person.committee ? `, ${person.committee}` : ''}
          </p>
          {person.phone ? <p className="text-xs md:text-sm text-blue-400">{person.phone}</p> : null}
        </div>
      </motion.div>
    )
  }

  const AssociatePastorCard = ({ person, index }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })
    const delay = index * 0.1

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{
          duration: 0.6,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex flex-col items-start w-full"
      >
        {/* Headshot with rounded corners and bright blue background */}
        <div className="w-full aspect-square bg-blue-400 rounded-lg flex items-center justify-center overflow-hidden mb-4">
          <div className="w-full h-full bg-blue-400"></div>
        </div>
        {/* Info section - no black box, left-aligned */}
        <div className="w-full text-left">
          <p className="text-sm md:text-base font-semibold text-gray-900 mb-1">{person.name}</p>
          <p className="text-xs md:text-sm text-gray-600 mb-1">
            {person.district}
            {person.committee ? `, ${person.committee}` : ''}
          </p>
          {person.phone ? <p className="text-xs md:text-sm text-gray-600">{person.phone}</p> : null}
        </div>
      </motion.div>
    )
  }

  return (
    <div className="font-sans">
      <Header />
      
      {/* Main Content */}
      <section className="bg-white pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-4 md:px-[100px]">
          <div className="space-y-12 md:space-y-16">
            {/* 부목사 Section */}
            <AnimatedSection title="부목사">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {associatePastors.map((person, index) => (
                  <AssociatePastorCard key={index} person={person} index={index} />
                ))}
              </div>
            </AnimatedSection>

            {/* 교육부 Section */}
            <AnimatedSection title="교육부">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {educationDept.map((person, index) => (
                  <AssociatePastorCard key={index} person={person} index={index} />
                ))}
              </div>
            </AnimatedSection>

            {/* 사역디렉터 Section */}
            <AnimatedSection title="사역디렉터">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                {ministryDirector.map((person, index) => (
                  <AssociatePastorCard key={index} person={person} index={index} />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

