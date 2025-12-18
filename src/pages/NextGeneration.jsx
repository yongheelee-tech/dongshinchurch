import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { MINISTRIES } from '../constants/ministries'

export default function NextGeneration() {
  const ministries = MINISTRIES.map((m) => ({ name: m.name, link: m.route }))

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

  const MinistryCard = ({ ministry, index }) => {
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
        className="flex flex-col items-start w-full group"
      >
        <Link
          to={ministry.link}
          className="w-full"
        >
          {/* Image placeholder with rounded corners */}
          <div className="w-full aspect-square bg-gray-300 rounded-lg flex items-center justify-center overflow-hidden mb-4 group-hover:opacity-90 transition-opacity">
            <div className="w-full h-full bg-gray-300"></div>
          </div>
          {/* Info section - left-aligned */}
          <div className="w-full text-left">
            <p className="text-sm md:text-base font-semibold text-primary group-hover:underline transition-all">
              {ministry.name}
            </p>
          </div>
        </Link>
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
            {/* 다음세대 Section */}
            <AnimatedSection title="다음세대">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {ministries.map((ministry, index) => (
                  <MinistryCard key={index} ministry={ministry} index={index} />
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
