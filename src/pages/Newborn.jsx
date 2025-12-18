import MinistryTemplate from './ministry/MinistryTemplate'

export default function Newborn() {
  return (
    <MinistryTemplate
      activeId="newborn"
      title="자모부"
      description="자모부 사역 소개 문구를 여기에 추가하세요."
      ctaLabel="사역 신청하기"
      ctaHref="#"
      heroImageSrc="/img/newborn-classroom.jpg"
      heroImageAlt="자모부 교실"
      servingPersonName=""
      galleryTitle="자모부 갤러리"
      galleryImages={[
        { src: '/img/gallery/newborn-1.jpg', alt: 'Newborn gallery 1' },
        { src: '/img/gallery/newborn-2.jpg', alt: 'Newborn gallery 2' },
        { src: '/img/gallery/newborn-3.jpg', alt: 'Newborn gallery 3' },
        { src: '/img/gallery/newborn-4.jpg', alt: 'Newborn gallery 4' },
        { src: '/img/gallery/newborn-5.jpg', alt: 'Newborn gallery 5' },
        { src: '/img/gallery/newborn-6.jpg', alt: 'Newborn gallery 6' },
      ]}
    />
  )
}


