import MinistryTemplate from './ministry/MinistryTemplate'

export default function ElemUpper() {
  return (
    <MinistryTemplate
      activeId="elem-upper"
      title="초등부"
      description="초등부 사역 소개 문구를 여기에 추가하세요."
      ctaLabel="사역 신청하기"
      ctaHref="#"
      heroImageSrc="/img/elem-upper-classroom.jpg"
      heroImageAlt="초등부 교실"
      servingPersonName=""
      galleryTitle="초등부 갤러리"
      galleryImages={[
        { src: '/img/gallery/elem-upper-1.jpg', alt: 'Elem Upper gallery 1' },
        { src: '/img/gallery/elem-upper-2.jpg', alt: 'Elem Upper gallery 2' },
        { src: '/img/gallery/elem-upper-3.jpg', alt: 'Elem Upper gallery 3' },
        { src: '/img/gallery/elem-upper-4.jpg', alt: 'Elem Upper gallery 4' },
        { src: '/img/gallery/elem-upper-5.jpg', alt: 'Elem Upper gallery 5' },
        { src: '/img/gallery/elem-upper-6.jpg', alt: 'Elem Upper gallery 6' },
      ]}
    />
  )
}


