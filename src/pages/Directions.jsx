import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Directions() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const address = {
    street: '2505 Yorba Linda Blvd',
    city: 'Fullerton, CA 92831',
    full: '2505 Yorba Linda Blvd, Fullerton, CA 92831'
  }

  // Google Maps embed URL
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address.full)}&t=&z=15&ie=UTF8&iwloc=&output=embed`

  return (
    <div className="font-sans bg-white">
      <Header />
      
      {/* Hero Section */}
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
            className="max-w-5xl mx-auto text-center"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4">
              오시는 길
            </h1>
            <div className="w-16 h-px bg-gray-300 mb-4 mx-auto"></div>
            <p className="text-sm md:text-base uppercase tracking-wider text-black mb-8">
              DIRECTIONS
            </p>
            <p className="text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
              남가주동신교회로 오시는 길을 안내해드립니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map and Address Section */}
      <section className="bg-white py-12 md:py-16 pb-24 md:pb-32">
        <div className="container mx-auto px-4 md:px-[100px]">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 md:items-stretch">
              {/* Google Map */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-full flex flex-col"
              >
                <div className="w-full h-[400px] md:h-full flex-1 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={mapUrl}
                    title="Church Location Map"
                  ></iframe>
                </div>
              </motion.div>

              {/* Address Information */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                  교회 주소
                </h2>
                
                <div className="space-y-4 mb-8">
                  <div>
                    
                    <p className="text-base text-gray-900">
                      {address.street}
                      <br />
                      {address.city}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address.full)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-opacity-90 transition-all text-sm md:text-base font-semibold"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                      </svg>
                      길찾기
                    </a>
                  </div>
                </div>

                {/* Parking Information */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-black mb-4">
                    Cal State Fullerton 주차 4부제 안내
                  </h3>
                  <div className="space-y-4 text-base text-gray-700">
                    
                    <p>
                      모든 성도님들께서는 서로를 배려하는 마음으로 주일에는 가급적 CSUF 주차장을 이용해 주시기 바라며, 매월 해당되는 주일에는 아래 안내에 따라 CSUF 주차장을 이용해 주시기 바랍니다.
                    </p>
                    <p>
                      특히 교회 내 주차장은 유모차를 동반한 가정, 노약자, 거동이 불편하신 성도님들을 우선으로 사용할 수 있도록 배려해 주시기를 부탁드립니다.
                    </p>
                    <p className="font-semibold text-black">
                      작은 배려가 교회와 성도 모두에게 큰 사랑이 됩니다.
                    </p>
                    
                    {/* Parking Schedule Table */}
                    <div className="mt-6">
                      <table className="w-full border-collapse border border-gray-300 text-base">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 py-3 px-4 text-left font-bold text-black">주일</th>
                            <th className="border border-gray-300 py-3 px-4 text-left font-bold text-black">사용 교구</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-300">
                            <td className="border border-gray-300 py-3 px-4 text-gray-900">둘째 주일</td>
                            <td className="border border-gray-300 py-3 px-4 text-gray-700">2교구 (60대)</td>
                          </tr>
                          <tr className="border-b border-gray-300">
                            <td className="border border-gray-300 py-3 px-4 text-gray-900">셋째 주일</td>
                            <td className="border border-gray-300 py-3 px-4 text-gray-700">3교구 (50대)</td>
                          </tr>
                          <tr className="border-b border-gray-300">
                            <td className="border border-gray-300 py-3 px-4 text-gray-900">넷째 주일</td>
                            <td className="border border-gray-300 py-3 px-4 text-gray-700">4교구 (40대)</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 py-3 px-4 text-gray-900">첫째 주일</td>
                            <td className="border border-gray-300 py-3 px-4 text-gray-700">5교구 (30대), 6교구 (여성교구)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
