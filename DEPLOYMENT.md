# 배포 가이드 (Deployment Guide)

## Vercel을 사용한 배포 (권장)

### 방법 1: Vercel 웹사이트를 통한 배포

1. **GitHub에 프로젝트 업로드**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin [YOUR_GITHUB_REPO_URL]
   git push -u origin main
   ```

2. **Vercel 배포**
   - https://vercel.com 접속
   - "Add New Project" 클릭
   - GitHub 저장소 선택
   - 프로젝트 설정:
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - "Deploy" 클릭

3. **배포 완료**
   - 몇 분 후 `https://your-project-name.vercel.app` 링크 생성
   - 자동으로 preview URL 제공

### 방법 2: Vercel CLI 사용

```bash
# Vercel CLI 설치
npm install -g vercel

# 프로젝트 디렉토리에서 실행
cd /Users/caleb/Desktop/Dongshin
vercel

# 배포 확인
vercel --prod
```

## Netlify를 사용한 배포

1. **GitHub에 프로젝트 업로드** (위와 동일)

2. **Netlify 배포**
   - https://netlify.com 접속
   - "Add new site" > "Import an existing project"
   - GitHub 저장소 선택
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - "Deploy site" 클릭

## 중요 사항

- `vercel.json` 파일이 이미 생성되어 있어 React Router가 올바르게 작동합니다.
- 배포 후 모든 라우트가 정상 작동하는지 확인하세요.

