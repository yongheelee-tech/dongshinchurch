import MinistryTemplate from './ministry/MinistryTemplate'

export default function YoungAdult() {
  return (
    <MinistryTemplate
      activeId="youngadult"
      title="청년부"
      description="청년부 사역 소개 문구를 여기에 추가하세요."
      ctaLabel="사역 신청하기"
      ctaHref="#"
      heroImageSrc="/img/youngadult.jpg"
      heroImageAlt="청년부"
      servingPersonName=""
      galleryTitle="청년부 갤러리"
      galleryImages={[
        { src: '/img/gallery/youngadult-1.jpg', alt: 'Young Adult gallery 1' },
        { src: '/img/gallery/youngadult-2.jpg', alt: 'Young Adult gallery 2' },
        { src: '/img/gallery/youngadult-3.jpg', alt: 'Young Adult gallery 3' },
        { src: '/img/gallery/youngadult-4.jpg', alt: 'Young Adult gallery 4' },
        { src: '/img/gallery/youngadult-5.jpg', alt: 'Young Adult gallery 5' },
        { src: '/img/gallery/youngadult-6.jpg', alt: 'Young Adult gallery 6' },
      ]}
    />
  )
}


