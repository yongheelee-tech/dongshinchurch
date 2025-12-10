# 남가주 동신교회 웹사이트

React 기반의 교회 웹사이트 프로젝트입니다.

## 기술 스택

- **React 18** - UI 라이브러리
- **Vite** - 빌드 도구
- **Tailwind CSS** - 스타일링
- **React Router** - 라우팅 (향후 CMS, 블로그 등에 사용 예정)

## 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```

개발 서버는 `http://localhost:5173`에서 실행됩니다.

### 3. 프로덕션 빌드
```bash
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

### 4. 빌드 미리보기
```bash
npm run preview
```

## 프로젝트 구조

```
src/
  components/      # React 컴포넌트
    Header.jsx    # 헤더/네비게이션
    Hero.jsx      # 히어로 섹션
    About.jsx     # 소개 섹션
    Ministry.jsx  # 사역 섹션
    KnowJesus.jsx # 예수님을 아시나요 섹션
    WorshipSong.jsx # 찬양 섹션
    Footer.jsx    # 푸터
  App.jsx         # 메인 앱 컴포넌트
  main.jsx        # React 진입점
  index.css       # Tailwind CSS

img/              # 이미지 파일
```

## 향후 계획

- CMS 통합
- 블로그 기능
- 멤버 포털
- 이벤트 관리
- 온라인 헌금 시스템

