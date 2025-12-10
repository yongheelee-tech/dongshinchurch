import Header from '../components/Header'
import Footer from '../components/Footer'

export default function WorshipTimes() {
  return (
    <div className="font-sans">
      <Header />
      
      

      {/* Main Content */}
      <section className="bg-white pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-4 md:px-[100px]">
          <div className="space-y-12 md:space-y-16">
              {/* 예배일정 Section */}
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-black mb-6">
                  예배일정
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="border-b border-gray-300">
                        <th className="text-left py-3 px-4 font-bold text-black border-r border-gray-300">예배</th>
                        <th className="text-left py-3 px-4 font-bold text-black border-r border-gray-300">시간</th>
                        <th className="text-left py-3 px-4 font-bold text-black">장소</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-300">
                        <td className="py-3 px-4 text-gray-900 border-r border-gray-300">주일예배 1부</td>
                        <td className="py-3 px-4 text-gray-700 border-r border-gray-300">오전 8시</td>
                        <td className="py-3 px-4 text-gray-700">본당</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="py-3 px-4 text-gray-900 border-r border-gray-300">주일예배 2부</td>
                        <td className="py-3 px-4 text-gray-700 border-r border-gray-300">오전 9시 30분</td>
                        <td className="py-3 px-4 text-gray-700">본당</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="py-3 px-4 text-gray-900 border-r border-gray-300">주일예배 3부</td>
                        <td className="py-3 px-4 text-gray-700 border-r border-gray-300">오전 11시 20분</td>
                        <td className="py-3 px-4 text-gray-700">본당</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="py-3 px-4 text-gray-900 border-r border-gray-300">영어예배 (EC)</td>
                        <td className="py-3 px-4 text-gray-700 border-r border-gray-300">1부: 오전 9시 30분<br />2부: 오전 11시</td>
                        <td className="py-3 px-4 text-gray-700">EC 채플</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="py-3 px-4 text-gray-900 border-r border-gray-300">청년예배</td>
                        <td className="py-3 px-4 text-gray-700 border-r border-gray-300">오후 1시 30분</td>
                        <td className="py-3 px-4 text-gray-700">아가페홀</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="py-3 px-4 text-gray-900 border-r border-gray-300">수요 경배와 찬양</td>
                        <td className="py-3 px-4 text-gray-700 border-r border-gray-300">오후 7시 30분</td>
                        <td className="py-3 px-4 text-gray-700">본당</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="py-3 px-4 text-gray-900 border-r border-gray-300">새벽 기도회</td>
                        <td className="py-3 px-4 text-gray-700 border-r border-gray-300">월-금: 오전 5시 30분<br />토: 오전 6시</td>
                        <td className="py-3 px-4 text-gray-700">본당</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 부서 및 정기모임 일정 Section */}
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-black mb-6">
                  부서 및 정기모임 일정
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="border-b border-gray-300">
                        <th className="text-left py-3 px-4 font-bold text-black border-r border-gray-300">구분</th>
                        <th className="text-left py-3 px-4 font-bold text-black border-r border-gray-300">부서명</th>
                        <th className="text-left py-3 px-4 font-bold text-black border-r border-gray-300">시간</th>
                        <th className="text-left py-3 px-4 font-bold text-black">장소</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* 교회학교 */}
                      <tr className="border-b border-gray-300">
                        <td className="py-3 px-4 text-gray-900 font-semibold border-r border-gray-300" rowSpan="6">교회학교</td>
                        <td className="py-3 px-4 text-gray-900 border-r border-gray-300">자모실 (1-12개월)</td>
                        <td className="py-3 px-4 text-gray-700 border-r border-gray-300">2부: 오전 9시 30분<br />3부: 11시 20분</td>
                        <td className="py-3 px-4 text-gray-700">자모실 (202호)</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="py-3 px-4 text-gray-900 border-r border-gray-300">영아부 (13-30개월)</td>
                        <td className="py-3 px-4 text-gray-700 border-r border-gray-300">2부: 오전 9시 30분<br />3부: 11시 20분</td>
                        <td className="py-3 px-4 text-gray-700">영아부실 (211호)</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="py-3 px-4 text-gray-900 border-r border-gray-300">유아부 (30-48개월)</td>
                        <td className="py-3 px-4 text-gray-700 border-r border-gray-300">2부: 오전 9시 30분<br />3부: 11시 20분</td>
                        <td className="py-3 px-4 text-gray-700">유아부실 (111호)</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="py-3 px-4 text-gray-900 border-r border-gray-300">유치부 (48개월 - Kinder)</td>
                        <td className="py-3 px-4 text-gray-700 border-r border-gray-300">2부: 오전 9시 30분<br />3부: 11시 20분</td>
                        <td className="py-3 px-4 text-gray-700">유치부실</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="py-3 px-4 text-gray-900 border-r border-gray-300">유년부 (1st-3rd Grade)</td>
                        <td className="py-3 px-4 text-gray-700 border-r border-gray-300">2부: 오전 9시 30분<br />3부: 11시 20분</td>
                        <td className="py-3 px-4 text-gray-700">유년부실</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="py-3 px-4 text-gray-900 border-r border-gray-300">초등부 (4th-6th Grade)</td>
                        <td className="py-3 px-4 text-gray-700 border-r border-gray-300">2부: 오전 9시 30분<br />3부: 11시 20분</td>
                        <td className="py-3 px-4 text-gray-700">초등부실</td>
                      </tr>
                      {/* 기관 */}
                      <tr className="border-b border-gray-300">
                        <td className="py-3 px-4 text-gray-900 font-semibold border-r border-gray-300" rowSpan="2">기관</td>
                        <td className="py-3 px-4 text-gray-900 border-r border-gray-300">청년부</td>
                        <td className="py-3 px-4 text-gray-700 border-r border-gray-300">주일 오후 1시 30분</td>
                        <td className="py-3 px-4 text-gray-700">아가페홀</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="py-3 px-4 text-gray-900 border-r border-gray-300">한국학교</td>
                        <td className="py-3 px-4 text-gray-700 border-r border-gray-300">주일 오후 1시 30분</td>
                        <td className="py-3 px-4 text-gray-700">각 반별 교실</td>
                      </tr>
                      {/* 정기모임 */}
                      <tr className="border-b border-gray-300">
                        <td className="py-3 px-4 text-gray-900 font-semibold border-r border-gray-300" rowSpan="2">정기모임</td>
                        <td className="py-3 px-4 text-gray-900 border-r border-gray-300">당회</td>
                        <td className="py-3 px-4 text-gray-700 border-r border-gray-300">매월 넷째 주일</td>
                        <td className="py-3 px-4 text-gray-700">목양실</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <td className="py-3 px-4 text-gray-900 border-r border-gray-300">구역봉사자모임</td>
                        <td className="py-3 px-4 text-gray-700 border-r border-gray-300">매주 토요일 오전 7시 10분</td>
                        <td className="py-3 px-4 text-gray-700">헤세드북카페</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

