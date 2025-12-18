import MinistryTemplate from './ministry/MinistryTemplate'

export default function Adult() {
  return (
    <MinistryTemplate
      activeId="adult"
      title="청장년부"
      description="청장년부 사역 소개 문구를 여기에 추가하세요."
      ctaLabel="사역 신청하기"
      ctaHref="#"
      heroImageSrc="/img/adult.jpg"
      heroImageAlt="청장년부"
      servingPersonName=""
      galleryTitle="청장년부 갤러리"
      galleryImages={[
        { src: '/img/gallery/adult-1.jpg', alt: 'Adult gallery 1' },
        { src: '/img/gallery/adult-2.jpg', alt: 'Adult gallery 2' },
        { src: '/img/gallery/adult-3.jpg', alt: 'Adult gallery 3' },
        { src: '/img/gallery/adult-4.jpg', alt: 'Adult gallery 4' },
        { src: '/img/gallery/adult-5.jpg', alt: 'Adult gallery 5' },
        { src: '/img/gallery/adult-6.jpg', alt: 'Adult gallery 6' },
      ]}
    />
  )
}


