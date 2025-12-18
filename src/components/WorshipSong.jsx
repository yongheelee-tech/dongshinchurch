import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import worshipImage from '../../img/이번달새찬양.png'

export default function WorshipSong() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="relative">
      {/* Single Image with Text Overlay - Full Width */}
      <div className="relative h-96 md:h-[600px] lg:h-[700px] w-full">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gray-900">
          <img 
            src={worshipImage} 
            alt="Worship" 
            className="w-full h-full object-cover brightness-50" 
          />
        </div>
        
        {/* Text Overlay - Left side */}
        <div className="absolute inset-0 flex items-center z-10">
          <div className="container mx-auto px-4 md:px-[100px] text-left">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Top-Left Text */}
              <p className="text-white text-xs md:text-sm mb-4 md:mb-6">7월의 새찬양</p>
              
              {/* Bottom-Left Large Text */}
              <h2 className="text-white text-3xl md:text-3xl lg:text-4xl mb-6 md:mb-8 leading-tight font-bold">
                모든걸음 되시네
              </h2>
              
              {/* Button */}
              <a
                href="#"
                className="inline-block bg-transparent text-white px-6 md:px-8 py-3 md:py-4 rounded border-2 border-white hover:bg-white hover:text-black transition-all font-semibold text-sm md:text-base"
              >
                찬양 듣기
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

