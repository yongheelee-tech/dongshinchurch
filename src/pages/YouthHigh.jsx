import MinistryTemplate from './ministry/MinistryTemplate'

export default function YouthHigh() {
  return (
    <MinistryTemplate
      activeId="youth-high"
      title="고등부"
      description={'2부 예배: 9:30 AM\n3부 예배: 11:20 AM\nDSCP Chapel'}
      ctaLabel="사역 신청하기"
      ctaHref="#"
      heroImageSrc="/img/youth-high-classroom.jpg"
      heroImageAlt="고등부 교실"
      servingPersonName=""
      galleryTitle="고등부 갤러리"
      galleryImages={[
        { src: '/img/gallery/youth-high-1.jpg', alt: 'Youth High gallery 1' },
        { src: '/img/gallery/youth-high-2.jpg', alt: 'Youth High gallery 2' },
        { src: '/img/gallery/youth-high-3.jpg', alt: 'Youth High gallery 3' },
        { src: '/img/gallery/youth-high-4.jpg', alt: 'Youth High gallery 4' },
        { src: '/img/gallery/youth-high-5.jpg', alt: 'Youth High gallery 5' },
        { src: '/img/gallery/youth-high-6.jpg', alt: 'Youth High gallery 6' },
      ]}
    />
  )
}


