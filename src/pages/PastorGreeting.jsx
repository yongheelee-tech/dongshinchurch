import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import pastorImage from '../../img/pastorimage.jpg'

// Animated Image Component
function AnimatedImage({ src, alt }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex-shrink-0"
    >
      <img 
        src={src} 
        alt={alt} 
        className="block"
        style={{ transform: 'scale(0.75)', transformOrigin: 'top left' }}
      />
    </motion.div>
  )
}

// Animated Header Component
function AnimatedHeader() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
      {/* Large Title */}
      <h1 className="text-6xl md:text-4xl font-bold text-black mb-4">
        담임목사 인사말
      </h1>
      
      {/* Separator Line */}
      <div className="w-16 h-px bg-gray-300 mb-4"></div>
      
      {/* Subtitle */}
      <p className="text-sm md:text-base uppercase tracking-wider text-black mb-8">
        GREETING
      </p>
    </motion.div>
  )
}

// Animated Paragraph Component
function AnimatedParagraph({ children, index, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const delay = index * 0.05

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`text-base ${className}`}
    >
      {children}
    </motion.p>
  )
}

export default function PastorGreeting() {
  return (
    <div className="font-sans">
      <Header />
      
      {/* Main Content */}
      <section className="bg-white pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-4 md:px-[100px]">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start max-w-7xl">
            {/* Left Column - Pastor Photo (25% smaller) */}
            <AnimatedImage src={pastorImage} alt="담임목사 백정우" />
            
            {/* Right Column - Text Content */}
            <div className="flex-1">
              <AnimatedHeader />
              
              {/* Body Text */}
              <div className="space-y-6 text-black leading-relaxed">
                <AnimatedParagraph index={0}>
                  저희 교회 홈페이지를 방문해 주신 모든 분들께 감사드립니다. 존귀하신 주 예수 그리스도의 이름으로 평안을 전합니다.
                </AnimatedParagraph>
                
                <AnimatedParagraph index={1}>
                  남가주동신교회(Dong Shin Presbyterian Church of Southern California)는 지난 40여 년 동안 변함없이 부어주신 하나님의 사랑과 은혜로 세워진 교회입니다. 본 교회는 해외한인장로회(The Korean Presbyterian Church Abroad)에 속해 있으며, 성경을 하나님의 절대적 말씀으로 믿는 개혁주의 신앙을 기초로 하고 있습니다.
                </AnimatedParagraph>
                
                <AnimatedParagraph index={2}>
                  우리는 이민 1세대들이 흘린 눈물과 땀, 그리고 헌신을 결코 잊지 않을 것이며, 동시에 다음 세대를 향한 하나님의 꿈을 품고 나아가는 교회가 되기를 소망합니다. 더불어 절대 가치가 무너지는 이 시대 속에서, 모든 성도들이 하나님의 말씀으로 무장하여 겸손하되 담대하게 세상 속에서 그리스도의 향기를 드러내는 제자로 세워지도록 최선을 다할 것입니다.
                </AnimatedParagraph>

                <AnimatedParagraph index={3}>
                  이를 위해 저희 교회의 비전은 다음의 세 가지입니다.
                </AnimatedParagraph>
                
                <AnimatedParagraph index={4}>
                  첫째, '복음을 복음되게(for the Gospel to become the Gospel)'
                </AnimatedParagraph>
                
                <AnimatedParagraph index={5}>
                  둘째, '교회를 교회되게(for the Church to become the Church)'
                </AnimatedParagraph>
                
                <AnimatedParagraph index={6}>
                  셋째, '성도를 성도되게(for the God's People to become the God's People)'
                </AnimatedParagraph>
                
                <AnimatedParagraph index={7}>
                  그리고 이러한 비전을 이루어 가는 삶의 중심에는 항상 "Not I, but Christ"(갈라디아서 2:20)의 고백이 있기를 소망합니다.
                </AnimatedParagraph>
                
                <AnimatedParagraph index={8}>
                  어떤 인생도 주 예수 그리스도가 아니고서는 채울 수 없는 영혼의 공간이 있습니다. 그러나 비록 남들보다 조금 부족해 보일지라도, 주님이 우리와 함께하신다면 넉넉히 승리할 수 있습니다. "내가 그리스도와 함께 십자가에 못 박혔나니 그런즉 이제는 내가 사는 것이 아니요 오직 내 안에 그리스도께서 사시는 것이라" (갈 2:20). "Not I, but Christ" - 이것이 우리의 삶의 모토입니다.
                </AnimatedParagraph>
                
                <AnimatedParagraph index={9} className="font-semibold mt-8">
                  주 예수 그리스도와 함께하는 이 귀한 삶으로 여러분을 초대합니다.
                </AnimatedParagraph>
                
                <AnimatedParagraph index={10} className="mt-12 pt-8">
                  <span className="text-gray-700 font-bold">
                    담임목사 백정우 올림
                  </span>
                </AnimatedParagraph>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

