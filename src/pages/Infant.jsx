import MinistryTemplate from './ministry/MinistryTemplate'

export default function Infant() {
  return (
    <MinistryTemplate
      activeId="infant"
      title="영아부"
      description="영아부 사역 소개 문구를 여기에 추가하세요."
      ctaLabel="사역 신청하기"
      ctaHref="#"
      heroImageSrc="/img/infant-classroom.jpg"
      heroImageAlt="영아부 교실"
      servingPersonName=""
      galleryTitle="영아부 갤러리"
      galleryImages={[
        { src: '/img/gallery/infant-1.jpg', alt: 'Infant gallery 1' },
        { src: '/img/gallery/infant-2.jpg', alt: 'Infant gallery 2' },
        { src: '/img/gallery/infant-3.jpg', alt: 'Infant gallery 3' },
        { src: '/img/gallery/infant-4.jpg', alt: 'Infant gallery 4' },
        { src: '/img/gallery/infant-5.jpg', alt: 'Infant gallery 5' },
        { src: '/img/gallery/infant-6.jpg', alt: 'Infant gallery 6' },
      ]}
    />
  )
}


