import MinistryTemplate from './ministry/MinistryTemplate'

export default function ElemLower() {
  return (
    <MinistryTemplate
      activeId="elem-lower"
      title="유년부"
      description={'2부 예배: 9:30 AM\n3부 예배: 11:20 AM\n유년부실 Room 124-125'}
      ctaLabel="사역 신청하기"
      ctaHref="#"
      heroImageSrc="/img/elem-lower-classroom.jpg"
      heroImageAlt="유년부 교실"
      servingPersonName=""
      galleryTitle="유년부 갤러리"
      galleryImages={[
        { src: '/img/gallery/elem-lower-1.jpg', alt: 'Elem Lower gallery 1' },
        { src: '/img/gallery/elem-lower-2.jpg', alt: 'Elem Lower gallery 2' },
        { src: '/img/gallery/elem-lower-3.jpg', alt: 'Elem Lower gallery 3' },
        { src: '/img/gallery/elem-lower-4.jpg', alt: 'Elem Lower gallery 4' },
        { src: '/img/gallery/elem-lower-5.jpg', alt: 'Elem Lower gallery 5' },
        { src: '/img/gallery/elem-lower-6.jpg', alt: 'Elem Lower gallery 6' },
      ]}
    />
  )
}


