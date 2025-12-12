import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import aboutImage from '../../img/남가주동신교회는.png'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-[100px]">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          {/* Left Column - 60% width (3 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="md:col-span-3"
          >
            {/* Header */}
            <p className="text-gray-400 text-xs md:text-sm mb-6 md:mb-8">남가주동신교회는...</p>
            
            {/* Main Title */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6 leading-tight max-w-2xl">
              하나님의 사랑에 뿌리내리고,
              <br />
              부흥으로 세상을 변화시키는 교회

            
            </h2>
            
            {/* Body Paragraph */}
            <p className="text-gray-700 leading-relaxed mb-8 text-base max-w-xl">
              모든 그리스도인은 공동체 안에서 살아가도록 지음 받았습니다. 하나님은 우리가 혼자가 아니라 함께 믿음의 길을 걷기를 원하십니다. 동신교회는 예수 그리스도를 예배하는 공동체로, 하늘의 부흥이 이 땅 가운데 임할 때까지 모든 심령이 불타오르기를 갈망합니다. 지금 우리는 인류 역사상 가장 위대한 부흥의 문턱에 서 있습니다. 하나님의 임재로 개인과 도시와 열방에 그분의 나라가 확장되는 여정에 함께 하십시오.
            </p>
            
            {/* Button */}
            <a
              href="#"
              className="inline-block bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded hover:bg-opacity-90 transition-all text-sm md:text-base font-semibold"
            >
              동신 소식 보기
            </a>
          </motion.div>
          
          {/* Right Column - 40% width (2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="md:col-span-2"
          >
            <img 
              src={aboutImage} 
              alt="Church Service" 
              className="w-full h-auto rounded-md shadow-lg object-cover" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

