export default function KnowJesus() {
  const options = [
    '새가족 등록',
    '소그룹 등록',
    '세례 요청',
    '중보기도 요청',
    '다음세대',
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 md:px-[100px]">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-black mb-4">예수님을 아시나요?</h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base max-w-2xl mx-auto">
            체적인 치유나 영적인 돌봄이 필요하신가요?
            <br />
            하나님은 당신의 삶을 그분의 사랑과 능력으로 변화시키길 원하십니다.
          </p>
         
        </div>

        {/* List Section */}
        <div className="max-w-2xl mx-auto">
          {options.map((option, index) => (
            <div key={index}>
              <a
                href="#"
                className="flex items-center justify-between py-4 group transition-all"
              >
                <span className="text-gray-500 group-hover:font-bold group-hover:text-black transition-all">
                  {option}
                </span>
                <svg
                  className="w-5 h-5 text-black opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
              {index < options.length - 1 && (
                <div className="border-b border-gray-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

