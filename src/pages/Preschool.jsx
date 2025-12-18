import MinistryTemplate from './ministry/MinistryTemplate'

export default function Preschool() {
  return (
    <MinistryTemplate
      activeId="preschool"
      title="동신프리스쿨"
      description="동신프리스쿨 소개 문구를 여기에 추가하세요."
      ctaLabel="사역 신청하기"
      ctaHref="#"
      heroImageSrc="/img/preschool.jpg"
      heroImageAlt="동신프리스쿨"
      servingPersonName=""
      galleryTitle="동신프리스쿨 갤러리"
      galleryImages={[
        { src: '/img/gallery/preschool-1.jpg', alt: 'Preschool gallery 1' },
        { src: '/img/gallery/preschool-2.jpg', alt: 'Preschool gallery 2' },
        { src: '/img/gallery/preschool-3.jpg', alt: 'Preschool gallery 3' },
        { src: '/img/gallery/preschool-4.jpg', alt: 'Preschool gallery 4' },
        { src: '/img/gallery/preschool-5.jpg', alt: 'Preschool gallery 5' },
        { src: '/img/gallery/preschool-6.jpg', alt: 'Preschool gallery 6' },
      ]}
    />
  )
}


