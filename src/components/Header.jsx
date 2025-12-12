import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/dslogo.svg'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
  const [expandedMenus, setExpandedMenus] = useState({})

  // Dropdown item routes mapping
  const dropdownRoutes = {
    '담임목사 인사말': '/pastor-greeting',
    '예배시간': '/worship-times',
    '교회연혁': '/church-history',
    '섬기는 사람들': '/serving-people',
    '오시는 길': '/directions'
  }

  // 다음세대 dropdown item routes mapping
  const nextGenerationRoutes = {
    'Toddler - 유아부': '/toddler',
    // Add more specific routes here as pages are created
  }

  // Dropdown item descriptions for subtitles
  const dropdownDescriptions = {
    '담임목사 인사말': '담임목사님의 인사말',
    '예배시간': '주일 및 주중 예배 일정 안내',
    '교회연혁': '교회의 역사와 발자취',
    '섬기는 사람들': '교회를 섬기는 목사님들과 사역자들',
    '오시는 길': '교회 위치 및 주차 안내',
    '주일설교': '주일 예배 설교 영상',
    '수요경배와 찬양 설교': '수요일 경배와 찬양 설교',
    '새벽설교': '새벽 기도회 설교',
    '동신찬양팀 찬양': '동신찬양팀의 찬양 영상',
    '1부 호산나 성가대': '1부 예배 성가대 찬양',
    '2부 할렐루야 성가대': '2부 예배 성가대 찬양',
    '3부 임마누엘 성가대': '3부 예배 성가대 찬양',
    '영어 대학부 예배': '영어 대학부 예배 영상',
    '청년부 예배': '청년부 예배 영상',
    'DSCP (English Worship)': 'English Worship Service',
    'New Born - 자모부': '신생아와 어머니를 위한 사역',
    'Infant - 영아부': '13-30개월 영아를 위한 사역',
    'Toddler - 유아부': '30-48개월 유아를 위한 사역',
    'Kinder - 유치부': '유치부 사역',
    'Elem (Lower) - 유년부': '1-3학년을 위한 사역',
    'Elem (Upper) - 초등부': '4-6학년을 위한 사역',
    'Youth (Jr. High) - 중등부': '중학생을 위한 사역',
    'Youth (High) - 고등부': '고등학생을 위한 사역',
    'E-College - 영어대학부': '영어권 대학생을 위한 사역',
    '청년부': '청년 세대를 위한 사역',
    '청장년부': '청장년 세대를 위한 사역',
    '동신프리스쿨': '유아 교육 프로그램',
    '새신자 등록안내': '새신자 등록 방법 안내',
    '새신자 온라인 등록': '온라인으로 새신자 등록하기',
    '교구 안내': '교구 시스템 안내',
    '교구 신청': '교구 신청하기',
    '훈련 안내': '제자훈련 프로그램 안내',
    '사역 안내': '다양한 사역 프로그램 안내',
    '사역 신청': '사역 참여 신청하기',
    '금주의 주보': '이번 주 교회 소식',
    '사진 게시판': '교회 행사 사진 갤러리',
    '행사 & 광고': '교회 행사 및 공지사항',
    '중보기도 신청/응답': '중보기도 요청 및 응답'
  }

  const navLinks = [
    { 
      text: '교회소개', 
      hasDropdown: true,
      dropdownItems: [
        '담임목사 인사말',
        '예배시간',
        '교회연혁',
        '섬기는 사람들',
        '오시는 길'
      ]
    },
    { 
      text: '온라인예배', 
      hasDropdown: true,
      dropdownItems: [
        '주일설교',
        '수요경배와 찬양 설교',
        '새벽설교',
        '동신찬양팀 찬양',
        '1부 호산나 성가대',
        '2부 할렐루야 성가대',
        '3부 임마누엘 성가대',
        '영어 대학부 예배',
        '청년부 예배',
        'DSCP (English Worship)'
      ]
    },
    { 
      text: '다음세대', 
      hasDropdown: true,
      dropdownItems: [
        'New Born - 자모부',
        'Infant - 영아부',
        'Toddler - 유아부',
        'Kinder - 유치부',
        'Elem (Lower) - 유년부',
        'Elem (Upper) - 초등부',
        'Youth (Jr. High) - 중등부',
        'Youth (High) - 고등부',
        'E-College - 영어대학부',
        '청년부',
        '청장년부',
        '동신프리스쿨'
      ]
    },
    { 
      text: '새가족', 
      hasDropdown: true,
      dropdownItems: [
        '새신자 등록안내',
        '새신자 온라인 등록'
      ]
    },
    { 
      text: '교구', 
      hasDropdown: true,
      dropdownItems: [
        '교구 안내',
        '교구 신청'
      ]
    },
    { 
      text: '훈련 및 사역', 
      hasDropdown: true,
      dropdownItems: [
        '훈련 안내',
        '사역 안내',
        '사역 신청'
      ]
    },
    { 
      text: '동신소식', 
      hasDropdown: true,
      dropdownItems: [
        '금주의 주보',
        '사진 게시판',
        '행사 & 광고',
        '중보기도 신청/응답'
      ]
    },
    { text: '온라인헌금', hasDropdown: false },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm relative overflow-visible">
      {/* Top Bar */}
      <div className="bg-primary py-2 relative">
        <div className="container mx-auto px-4 md:px-[100px]">
          <div className="flex justify-end items-center text-sm">
            <a href="#" className="text-white hover:underline">동신프리스쿨</a>
            <span className="text-white mx-3">|</span>
            <a href="#" className="text-white hover:underline">DSYAM 대학청년부</a>
          
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white relative z-30 overflow-visible">
        <div className="container mx-auto px-4 md:px-[100px] overflow-visible">
          <div className="flex items-center justify-between relative overflow-visible">
            {/* Logo */}
            <div className="flex items-center py-4">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="남가주 동신교회" className="h-12 md:h-14 w-auto object-contain block" />
              </Link>
            </div>

            {/* Navigation Links (Desktop) */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 py-4 flex-1 justify-center relative z-40">
              {navLinks.map((link, index) => (
                <div key={index} className="relative group z-40" style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                  <Link
                    to={link.text === '다음세대' ? '/next-generation' : '#'}
                    className="text-black font-bold relative flex items-center hover:text-primary transition-colors z-40"
                  >
                    {link.text}
                    {link.hasDropdown && (
                      <svg className="inline-block w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    )}
                  </Link>
                  {/* Dropdown Menu */}
                  {link.hasDropdown && link.dropdownItems && (
                    <div className="absolute left-0 top-full w-80 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                      <div className="p-4">
                        {link.dropdownItems.map((item, itemIndex) => {
                          // If it's 다음세대 dropdown, check for specific routes first, then default to next-generation
                          let route = '#'
                          if (link.text === '다음세대') {
                            route = nextGenerationRoutes[item] || '/next-generation'
                          } else {
                            route = dropdownRoutes[item] || '#'
                          }
                          const description = dropdownDescriptions[item] || ''
                          
                          return (
                            <Link
                              key={itemIndex}
                              to={route}
                              className="flex items-center justify-between py-4 px-2 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                              {/* Text Content */}
                              <div className="flex-1 min-w-0 pr-4">
                                <p className="font-bold text-[#607d8b] text-base mb-1 group-hover:text-primary transition-colors">
                                  {item}
                                </p>
                                {description && (
                                  <p className="text-sm text-[#5A5A5A] leading-relaxed">
                                    {description}
                                  </p>
                                )}
                              </div>
                              
                              {/* Arrow Button - Rounded Square */}
                              <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-[#E6E8EB] flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Search Bar */}
            <div className="flex items-center py-4 pr-0 md:pr-0">
              <button
                id="desktop-search-toggle"
                className="hidden lg:block text-gray-700 hover:text-primary focus:outline-none ml-4"
                aria-label="Search"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
              <button
                onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
                className="lg:hidden text-gray-700 hover:text-primary focus:outline-none"
                aria-label="Search"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden ml-4 text-gray-700 hover:text-primary focus:outline-none"
                aria-label="Menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {mobileSearchOpen && (
            <div className="pb-4 lg:hidden">
              <form className="flex">
                <input
                  type="text"
                  placeholder="검색..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-opacity-90"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </form>
            </div>
          )}

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="pb-4 lg:hidden">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link, index) => {
                  const isExpanded = expandedMenus[index]
                  return (
                    <div key={index} className="border-b border-gray-200 last:border-b-0">
                      {link.hasDropdown && link.dropdownItems ? (
                        <>
                          <button
                            onClick={() => setExpandedMenus(prev => ({
                              ...prev,
                              [index]: !prev[index]
                            }))}
                            className="w-full flex items-center justify-between text-black py-3 hover:text-primary transition-colors font-semibold"
                          >
                            <span>{link.text}</span>
                            <svg
                              className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </button>
                          {isExpanded && (
                            <div className="pl-4 pb-2 space-y-1">
                              {link.dropdownItems.map((item, itemIndex) => {
                                let route = '#'
                                if (link.text === '다음세대') {
                                  route = nextGenerationRoutes[item] || '/next-generation'
                                } else {
                                  route = dropdownRoutes[item] || '#'
                                }
                                return (
                                  <Link
                                    key={itemIndex}
                                    to={route}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block py-2 text-gray-700 hover:text-primary transition-colors text-sm"
                                  >
                                    {item}
                                  </Link>
                                )
                              })}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          to={link.text === '다음세대' ? '/next-generation' : '#'}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-black py-3 hover:text-primary transition-colors font-semibold"
                        >
                          {link.text}
                        </Link>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

