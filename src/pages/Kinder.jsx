import MinistryTemplate from './ministry/MinistryTemplate'

export default function Kinder() {
  return (
    <MinistryTemplate
      activeId="kinder"
      title="유치부"
      description="유치부 사역 소개 문구를 여기에 추가하세요."
      ctaLabel="사역 신청하기"
      ctaHref="#"
      heroImageSrc="/img/kinder-classroom.jpg"
      heroImageAlt="유치부 교실"
      servingPersonName=""
      galleryTitle="유치부 갤러리"
      galleryImages={[
        { src: '/img/gallery/kinder-1.jpg', alt: 'Kinder gallery 1' },
        { src: '/img/gallery/kinder-2.jpg', alt: 'Kinder gallery 2' },
        { src: '/img/gallery/kinder-3.jpg', alt: 'Kinder gallery 3' },
        { src: '/img/gallery/kinder-4.jpg', alt: 'Kinder gallery 4' },
        { src: '/img/gallery/kinder-5.jpg', alt: 'Kinder gallery 5' },
        { src: '/img/gallery/kinder-6.jpg', alt: 'Kinder gallery 6' },
      ]}
    />
  )
}


