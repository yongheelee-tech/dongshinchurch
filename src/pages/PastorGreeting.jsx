import Header from '../components/Header'
import Footer from '../components/Footer'
import pastorImage from '../../img/pastorbaek.png'

export default function PastorGreeting() {
  return (
    <div className="font-sans">
      <Header />
      
      {/* Main Content */}
      <section className="bg-white pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-4 md:px-[100px]">
          <div className="grid md:grid-cols-[45%_55%] gap-8 md:gap-12 items-start max-w-6xl">
            {/* Left Column - Text Content (45% width) */}
            <div>
            <h2 className="text-2xl md:text-4xl font-bold text-black mb-6">
                사랑하는 성도 여러분
              </h2>
              
              <div className="space-y-6 md:space-y-8 text-gray-700 leading-relaxed">
                <p className="text-base md:text-lg">
                저희 교회 홈페이지를 방문해 주신 모든 분들께 감사드립니다.
                존귀하신 주 예수 그리스도의 이름으로 평안을 전합니다.
                </p>
                
                <p className="text-base md:text-lg">
                남가주동신교회(Dong Shin Presbyterian Church of Southern California)는 지난 40여 년 동안 변함없이 부어주신 하나님의 사랑과 은혜로 세워진 교회입니다. 본 교회는 해외한인장로회(The Korean Presbyterian Church Abroad)에 속해 있으며, 성경을 하나님의 절대적 말씀으로 믿는 개혁주의 신앙을 기초로 하고 있습니다.
                </p>
                
                <p className="text-base md:text-lg">
                우리는 이민 1세대들이 흘린 눈물과 땀, 그리고 헌신을 결코 잊지 않을 것이며, 동시에 다음 세대를 향한 하나님의 꿈을 품고 나아가는 교회가 되기를 소망합니다. 더불어 절대 가치가 무너지는 이 시대 속에서, 모든 성도들이 하나님의 말씀으로 무장하여 겸손하되 담대하게 세상 속에서 그리스도의 향기를 드러내는 제자로 세워지도록 최선을 다할 것입니다.

                </p>
                
                <p className="text-base md:text-lg">
                이를 위해 우리 교회는 다음의 세 가지 비전을 붙잡고 나아갑니다.


복음을 복음되게 (for the Gospel to become the Gospel)


교회를 교회되게 (for the Church to become the Church)


성도를 성도되게 (for God's People to become God's People)


그리고 이러한 비전을 이루어 가는 삶의 중심에는 항상
"Not I, but Christ"(갈라디아서 2:20)
의 고백이 있기를 소망합니다.
                </p>
                
                <p className="text-base md:text-lg">
                어떤 인생도 주 예수 그리스도가 아니고서는 채울 수 없는 영혼의 공간이 있습니다. 그러나 비록 남들보다 조금 부족해 보일지라도, 주님이 우리와 함께하신다면 넉넉히 승리할 수 있습니다.
                </p>
                
                <p className="text-base md:text-lg">
                  "내가 그리스도와 함께 십자가에 못 박혔나니 그런즉 이제는 내가 사는 것이 아니요 
                  오직 내 안에 그리스도께서 사시는 것이라" (갈 2:20). 
                  "Not I, but Christ" - 이것이 우리의 삶의 모토입니다.
                </p>
                
                <p className="text-base md:text-lg font-semibold mt-8">
                주 예수 그리스도와 함께하는 이 귀한 삶으로 여러분을 초대합니다.                </p>
                
                <div className="mt-12 pt-8">
                  <p className="text-gray-600 font-bold">
                  담임목사 백정우 올림
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Pastor Photo (55% width) */}
            <div>
              <img 
                src={pastorImage} 
                alt="담임목사 백정우" 
                className="w-full h-auto object-contain" 
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

