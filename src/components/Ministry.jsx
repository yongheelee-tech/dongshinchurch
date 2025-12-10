export default function Ministry() {
  return (
    <section className="relative">
      {/* Single Image with Text Overlay - Full Width */}
      <div className="relative h-96 md:h-[600px] lg:h-[700px] w-full">
        {/* Background Image - Replace with your new image */}
        <div className="absolute inset-0 bg-gray-900">
          <img 
            src="/img/사역.png" 
            alt="Ministry" 
            className="w-full h-full object-cover brightness-20" 
          />
        </div>
        
        {/* Text Overlay - Left side */}
        <div className="absolute inset-0 flex items-center z-10">
          <div className="container mx-auto px-4 md:px-[100px] text-left max-w-54xl">
            {/* Small Text */}
            <p className="text-white text-xs md:text-sm mb-4 md:mb-6">동신교회 사역</p>
            
            {/* Large Text */}
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-8 leading-tight font-bold">
              하나님께서 우리 안에서 이루시는 일에
              <br />
              당신도 함께할 수 있습니다.
            </h2>
            
            {/* Button */}
            <a
              href="#"
              className="inline-block bg-transparent text-white px-6 md:px-8 py-3 md:py-4 rounded border-2 border-white hover:bg-white hover:text-black transition-all font-semibold text-sm md:text-base"
            >
              사역 참여
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
