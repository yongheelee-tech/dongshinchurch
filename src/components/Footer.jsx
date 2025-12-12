import logo from '../../img/dsfooterlogo.svg'

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 md:px-[100px]">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Left Column - 오시는 길 */}
          <div>
            <img src={logo} alt="남가주 동신교회" className="h-14 md:h-16 w-auto mb-6" />
            <h4 className="text-lg font-semibold mb-4">오시는 길</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold mb-1">남가주 동신교회</p>
                <p>2505 Yorba Linda Blvd, Fullerton, CA 92831</p>
              </div>
              <div>
                <p className="font-semibold mb-1">하와이 동신교회</p>
                <p>650 Iwilei Rd Suite 280 Honolulu, HI 96817</p>
              </div>
            </div>
          </div>

          {/* Middle Column - 예배시간 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">예배시간</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold mb-2">주일예배</p>
                <ul className="space-y-1">
                  <li>1부: 오전 8시</li>
                  <li>2부: 오전 9시 30분</li>
                  <li>3부: 오전 11시 20분</li>
                  <li>4부: 오후 1시</li>
                  <li>다음세대: 오전 9시 30분, 오전 11시 20분</li>
                  <li>영어예배 (EC): 오전 9시 30분</li>
                  <li>청년예배: 오후 1시 30분</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">평일예배</p>
                <ul className="space-y-1">
                  <li>수요 기도회: 오후 7시 30분</li>
                  <li>새벽 기도회: 월-금 오전 5시 30분</li>
                  <li>토요새벽 기도회: 오전 6시</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - 문의하기 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">문의하기</h4>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold">T:</span> 714-680-9556</p>
              <p><span className="font-semibold">E:</span> office@dongshinchurch.com</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white border-opacity-30 pt-8 text-left text-sm">
          <p>© {new Date().getFullYear()} DONGSHIN CHURCH. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  )
}

