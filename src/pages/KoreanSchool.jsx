import MinistryTemplate from './ministry/MinistryTemplate'

export default function KoreanSchool() {
  return (
    <MinistryTemplate
      activeId="koreanschool"
      title="한국학교"
      description="한국학교 소개 문구를 여기에 추가하세요."
      ctaLabel="사역 신청하기"
      ctaHref="#"
      heroImageSrc="/img/koreanschool.jpg"
      heroImageAlt="한국학교"
      servingPersonName=""
      galleryTitle="한국학교 갤러리"
      galleryImages={[
        { src: '/img/gallery/koreanschool-1.jpg', alt: 'Korean School gallery 1' },
        { src: '/img/gallery/koreanschool-2.jpg', alt: 'Korean School gallery 2' },
        { src: '/img/gallery/koreanschool-3.jpg', alt: 'Korean School gallery 3' },
        { src: '/img/gallery/koreanschool-4.jpg', alt: 'Korean School gallery 4' },
        { src: '/img/gallery/koreanschool-5.jpg', alt: 'Korean School gallery 5' },
        { src: '/img/gallery/koreanschool-6.jpg', alt: 'Korean School gallery 6' },
      ]}
    />
  )
}


