import heroImage from '../../img/herobanner.png'

export default function Hero() {
  return (
    <section className="relative -mt-px min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-secondary">
        <img
          src={heroImage}
          alt="Worship Service"
          className="w-full h-full object-cover"
         
        />
        <div className="absolute inset-0 bg-secondary bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-[100px] py-16 md:py-24 z-10">
        <div className="max-w-2xl">
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
            href="#"
            className="inline-block bg-primary text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded hover:bg-opacity-90 transition-all duration-200 shadow-lg"
          >
            실시간 설교 보기
          </a>
        </div>
      </div>

      {/* Slider controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        <button className="w-2 h-2 rounded-full bg-white"></button>
        <button className="w-2 h-2 rounded-full bg-white opacity-50"></button>
        <button className="w-2 h-2 rounded-full bg-white opacity-50"></button>
      </div>
    </section>
  )
}

