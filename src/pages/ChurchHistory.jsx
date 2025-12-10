import Header from '../components/Header'
import Footer from '../components/Footer'
import HistoryTimeline from '../components/HistoryTimeline'

export default function ChurchHistory() {
  return (
    <div className="font-sans bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="history-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 text-center">
            교회연혁
          </h1>
          <div className="w-16 h-px bg-gray-300 mb-4 mx-auto"></div>
          <p className="text-sm md:text-base uppercase tracking-wider text-black mb-8 text-center">
            HISTORY & HERITAGE
          </p>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed text-center">
            남가주동신교회의 역사와 함께 걸어온 발자취를 소개합니다. 
            하나님의 인도하심 속에서 성장해 온 우리 교회의 이야기를 만나보세요.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <HistoryTimeline />

      <Footer />
    </div>
  )
}
