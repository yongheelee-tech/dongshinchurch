import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MinistryTabs from '../../components/MinistryTabs'

export default function MinistryTemplate({
  activeId,
  title,
  description,
  ctaLabel = '사역 신청하기',
  ctaHref = '#',
  heroImageSrc = '',
  heroImageAlt = '',
  servingPersonName = '',
  servingPersonImageSrc = '',
  galleryTitle = '',
  galleryImages = [],
}) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <div className="font-sans">
      <Header />

      <MinistryTabs activeId={activeId} />

      {/* Hero/Banner Section */}
      <section className="bg-white pt-12 pb-12 md:pt-16 md:pb-16">
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
                {title}
              </h1>

              {description ? (
                <p className="text-base text-black mb-8 leading-relaxed whitespace-pre-line">
                  {description}
                </p>
              ) : null}

              {/* CTA Button */}
              <a
                href={ctaHref}
                className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-gray-700 transition-all text-sm md:text-base font-semibold"
              >
                {ctaLabel}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
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
                {heroImageSrc ? (
                  <img
                    src={heroImageSrc}
                    alt={heroImageAlt || title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      // next sibling is the placeholder div
                      if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                ) : null}
                <div
                  className="w-full h-full bg-gray-200 flex items-center justify-center"
                  style={{ display: heroImageSrc ? 'none' : 'flex' }}
                >
                  <span className="text-gray-400">Classroom Image</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Serving Person Section */}
      {servingPersonName ? (
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
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">섬기시는 분</h2>

              <div className="flex flex-col items-start">
                {/* Profile Picture */}
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden mb-4 bg-blue-200">
                  {servingPersonImageSrc ? (
                    <img
                      src={servingPersonImageSrc}
                      alt={servingPersonName}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                  ) : null}
                  <div
                    className="w-full h-full bg-blue-200 flex items-center justify-center"
                    style={{ display: servingPersonImageSrc ? 'none' : 'flex' }}
                  >
                    <span className="text-blue-400 text-xs">Profile Image</span>
                  </div>
                </div>

                {/* Name */}
                <p className="text-lg md:text-xl font-semibold text-black">{servingPersonName}</p>
              </div>
            </motion.div>
          </div>
        </section>
      ) : null}

      {/* Gallery Section */}
      {galleryImages?.length ? (
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
                {galleryTitle || `${title} 갤러리`}
              </h2>

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
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex'
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
      ) : null}

      <Footer />
    </div>
  )
}


