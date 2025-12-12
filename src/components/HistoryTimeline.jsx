import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// Milestone data structure
const MILESTONES = [
  {
    year: '1980',
    title: '교회 설립',
    description: '남가주동신교회가 설립되어 하나님의 사랑과 은혜로 첫 발걸음을 시작했습니다.',
    
  },
  {
    year: '1985',
    title: '첫 번째 교회 건물 완공',
    description: '교회의 첫 번째 예배당이 완공되어 성도들이 함께 예배할 수 있는 공간을 마련했습니다.',
  },
  {
    year: '1990',
    title: '교회 확장 및 교육관 건립',
    description: '성장하는 교회 공동체를 위해 교육관을 건립하여 다음세대 사역의 기반을 마련했습니다.',
  },
  {
    year: '1995',
    title: '청년부 사역 시작',
    description: '청년 세대를 위한 전문화된 사역을 시작하여 젊은이들이 하나님의 말씀으로 성장할 수 있도록 했습니다.',
  },
  {
    year: '2000',
    title: '한국학교 설립',
    description: '한국어와 한국 문화를 가르치는 한국학교를 설립하여 다음세대의 정체성을 지켜나가고 있습니다.',
   
  },
  {
    year: '2005',
    title: '새 예배당 건축',
    description: '더 많은 성도들을 수용할 수 있는 새로운 예배당을 건축하여 하나님을 예배하는 공간을 확장했습니다.',
  },
  {
    year: '2010',
    title: '다음세대 사역 확장',
    description: '유아부부터 청년부까지 체계적인 다음세대 사역을 확장하여 아이들이 하나님의 말씀으로 자라나도록 했습니다.',
  },
  {
    year: '2015',
    title: '온라인 예배 시작',
    description: '디지털 시대에 맞춰 온라인 예배를 시작하여 더 많은 사람들이 하나님의 말씀을 들을 수 있도록 했습니다.',
  },
  {
    year: '2020',
    title: '디지털 사역 강화',
    description: '팬데믹 상황 속에서도 교회 공동체가 함께할 수 있도록 디지털 사역을 강화하고 온라인 커뮤니티를 구축했습니다.',
  },
  {
    year: '2025',
    title: '45주년 기념 사역',
    description: '45년간의 하나님의 인도하심을 감사하며, 앞으로도 복음을 복음되게, 교회를 교회되게, 성도를 성도되게 하는 사역을 계속해 나갑니다.',
  
  },
]

export default function HistoryTimeline() {
  return (
    <section 
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24"
      aria-labelledby="history-heading"
    >
      <div className="relative">
        {/* Vertical Timeline Line - Desktop */}
        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
        <TimelineLine milestones={MILESTONES} />

        {/* Timeline Items */}
        <div className="relative space-y-12 sm:space-y-16 lg:space-y-20 lg:pl-16">
          {MILESTONES.map((milestone, index) => (
            <TimelineItem
              key={index}
              milestone={milestone}
              index={index}
              isLast={index === MILESTONES.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Animated timeline line that grows as items come into view
function TimelineLine({ milestones }) {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  return (
    <div ref={containerRef} className="hidden lg:block absolute left-0 top-0 bottom-0 w-px">
      <motion.div
        className="absolute inset-y-0 w-px bg-gray-200 origin-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isInView ? 1 : 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
    </div>
  )
}

// Individual timeline item component
function TimelineItem({ milestone, index, isLast }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Stagger animation delay
  const delay = index * 0.1

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1], // Custom easing for smooth motion
      }}
      className="relative"
    >
      {/* Desktop: Timeline dot on the gray stroke */}
      <div className="hidden lg:block absolute -left-16 top-0">
        <motion.div
          className="relative"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-4 h-4 rounded-full bg-white border-2 border-gray-400 -translate-x-1/2" />
        </motion.div>
      </div>

      {/* Mobile: Timeline dot and line */}
      <div className="lg:hidden flex items-start gap-4 mb-6">
        <div className="relative flex-shrink-0">
          <motion.div
            className="w-3 h-3 rounded-full bg-gray-400 mt-2"
            whileHover={{ scale: 1.3 }}
            transition={{ duration: 0.2 }}
          />
          {!isLast && (
            <div className="absolute top-6 left-1/2 w-px h-16 bg-gray-200 -translate-x-1/2" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          {/* Year - Mobile */}
          <h2 className="text-2xl font-bold text-gray-400 mb-2">
            {milestone.year}
          </h2>
        </div>
      </div>

      {/* Content Card */}
      <motion.div
        className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 lg:ml-0"
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3, ease: 'easeOut' },
        }}
        tabIndex={0}
      >
        {/* Year - Desktop only (on top of description) */}
        <h2 className="hidden lg:block text-2xl md:text-3xl font-bold text-gray-400 mb-3">
          {milestone.year}
        </h2>

        {/* Title */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-3">
          {milestone.title}
        </h3>

        {/* Description */}
        <p className="text-base text-gray-700 leading-relaxed">
          {milestone.description}
        </p>
      </motion.div>
    </motion.article>
  )
}

