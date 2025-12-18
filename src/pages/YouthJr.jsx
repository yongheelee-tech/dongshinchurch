import MinistryTemplate from './ministry/MinistryTemplate'

export default function YouthJr() {
  return (
    <MinistryTemplate
      activeId="youth-jr"
      title="중등부"
      description="중등부 사역 소개 문구를 여기에 추가하세요."
      ctaLabel="사역 신청하기"
      ctaHref="#"
      heroImageSrc="/img/youth-jr-classroom.jpg"
      heroImageAlt="중등부 교실"
      servingPersonName=""
      galleryTitle="중등부 갤러리"
      galleryImages={[
        { src: '/img/gallery/youth-jr-1.jpg', alt: 'Youth Jr gallery 1' },
        { src: '/img/gallery/youth-jr-2.jpg', alt: 'Youth Jr gallery 2' },
        { src: '/img/gallery/youth-jr-3.jpg', alt: 'Youth Jr gallery 3' },
        { src: '/img/gallery/youth-jr-4.jpg', alt: 'Youth Jr gallery 4' },
        { src: '/img/gallery/youth-jr-5.jpg', alt: 'Youth Jr gallery 5' },
        { src: '/img/gallery/youth-jr-6.jpg', alt: 'Youth Jr gallery 6' },
      ]}
    />
  )
}


