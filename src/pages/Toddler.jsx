import MinistryTemplate from './ministry/MinistryTemplate'

export default function Toddler() {
  // Gallery images - placeholder paths, update with actual images
  const galleryImages = [
    { src: '/img/gallery/toddler-1.jpg', alt: 'Children playing' },
    { src: '/img/gallery/toddler-2.jpg', alt: 'Classroom activity' },
    { src: '/img/gallery/toddler-3.jpg', alt: 'Children drawing' },
    { src: '/img/gallery/toddler-4.jpg', alt: 'Group activity' },
    { src: '/img/gallery/toddler-5.jpg', alt: 'Service or performance' },
    { src: '/img/gallery/toddler-6.jpg', alt: 'Worship activity' },
  ]

  return (
    <MinistryTemplate
      activeId="toddler"
      title="유아부"
      description={'2부 예배: 9:30 AM\n3부 예배: 11:20 AM\n유아부실 Room 111'}
      ctaLabel="사역 신청하기"
      ctaHref="#"
      heroImageSrc="/img/toddler-classroom.jpg"
      heroImageAlt="유아부 교실"
   
      galleryTitle="유아부 갤러리"
      galleryImages={galleryImages}
    />
  )
}

