import MinistryTemplate from './ministry/MinistryTemplate'

export default function ECollege() {
  return (
    <MinistryTemplate
      activeId="ecollege"
      title="영어대학부"
      description="영어대학부 사역 소개 문구를 여기에 추가하세요."
      ctaLabel="사역 신청하기"
      ctaHref="#"
      heroImageSrc="/img/ecollege-classroom.jpg"
      heroImageAlt="영어대학부"
      servingPersonName=""
      galleryTitle="영어대학부 갤러리"
      galleryImages={[
        { src: '/img/gallery/ecollege-1.jpg', alt: 'E-College gallery 1' },
        { src: '/img/gallery/ecollege-2.jpg', alt: 'E-College gallery 2' },
        { src: '/img/gallery/ecollege-3.jpg', alt: 'E-College gallery 3' },
        { src: '/img/gallery/ecollege-4.jpg', alt: 'E-College gallery 4' },
        { src: '/img/gallery/ecollege-5.jpg', alt: 'E-College gallery 5' },
        { src: '/img/gallery/ecollege-6.jpg', alt: 'E-College gallery 6' },
      ]}
    />
  )
}


