import { motion } from 'framer-motion'
import heroVideo from '../../img/herovideo.mp4'

export default function Hero() {
  return (
    <section className="relative -mt-px min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 bg-secondary">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img
            src="/img/herobanner.png"
            alt="Worship Service"
            className="w-full h-full object-cover"
          />
        </video>
        {/* Dark gradient overlay on top for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-[100px] py-16 md:py-24 z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-2xl"
        >
          {/* Korean Text */}
          <p className="text-white text-base md:text-lg lg:text-xl mb-4 md:mb-6 leading-relaxed">
            복음을 복음 되게 ㆍ 교회를 교회 되게 ㆍ 성도를 성도 되게
          </p>

          {/* English Text */}
          <h1 className="font-gotham text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-6 md:mb-8 leading-tight whitespace-nowrap">
            <span className="font-light">not I, but </span>
            <span className="font-bold">Christ</span>
          </h1>

          {/* Button */}
          <a
            href="https://www.youtube.com/channel/UCXx5-tGvD4EGZamQxCV5MJw"
            className="inline-block bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded hover:bg-opacity-90 transition-all text-sm md:text-base font-semibold"
          >
            실시간 설교 보기
          </a>
        </motion.div>
      </div>

      {/* Slider controls */}
      
    </section>
  )
}

