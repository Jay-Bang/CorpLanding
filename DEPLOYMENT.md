# 🚀 CorpLanding 배포 가이드

GitHub 저장소: https://github.com/Jay-Bang/CorpLanding

## 배포 옵션

### 옵션 1: Vercel 배포 (권장) ⭐

Vercel은 Next.js를 만든 회사에서 제공하는 호스팅 서비스로, 가장 쉽고 빠른 배포 방법입니다.

**단계:**

1. **Vercel 계정 생성**
   - https://vercel.com 접속
   - GitHub 계정으로 로그인

2. **프로젝트 임포트**
   - "New Project" 클릭
   - GitHub에서 `CorpLanding` 저장소 선택
   - "Import" 클릭

3. **자동 배포**
   - Vercel이 자동으로 프로젝트를 감지하고 빌드
   - 1-2분 후 배포 완료
   - 자동으로 생성된 도메인 확인 (예: `corplanding.vercel.app`)

4. **커스텀 도메인 연결 (선택사항)**
   - Project Settings → Domains
   - 원하는 도메인 추가

**장점:**
- ✅ 무료 (취미 프로젝트)
- ✅ 자동 HTTPS
- ✅ Git push 시 자동 재배포
- ✅ 전 세계 CDN
- ✅ 프리뷰 배포 (PR마다)

---

### 옵션 2: GitHub Pages

정적 사이트로 export하여 GitHub Pages에 무료 호스팅할 수 있습니다.

**준비 단계:**

1. **Next.js 설정 수정**
   
   `next.config.ts` 파일을 다음과 같이 수정:
   ```typescript
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
     basePath: '/CorpLanding',
   };

   export default nextConfig;
   ```

2. **빌드 및 배포**
   ```bash
   npm run build
   ```

3. **GitHub Pages 설정**
   - GitHub 저장소 → Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `gh-pages` 선택 (생성 필요)

4. **gh-pages 브랜치에 배포**
   ```bash
   npx gh-pages -d out
   ```

**주의사항:**
- ⚠️ Server Side Rendering (SSR) 사용 불가
- ⚠️ API Routes 사용 불가
- ⚠️ 이미지 최적화 비활성화 필요

---

## 현재 상태

✅ **GitHub 저장소 준비 완료**
- Repository: https://github.com/Jay-Bang/CorpLanding
- 모든 코드 푸시 완료
- Vercel 설정 파일 포함

✅ **Vercel 배포 준비 완료**
- `vercel.json` 설정 완료
- 바로 임포트 가능

📋 **다음 할 일:**
1. Vercel.com에 접속하여 프로젝트 임포트
2. 자동 배포 완료 후 도메인 확인
3. (선택) 커스텀 도메인 연결

---

## 문제 해결

### 빌드 에러 발생 시
```bash
npm run build
```
로컬에서 빌드를 먼저 테스트해보세요.

### 환경 변수 필요 시
Vercel 대시보드 → Settings → Environment Variables에서 추가

### 도메인 연결 문제
Vercel 문서 참조: https://vercel.com/docs/concepts/projects/domains

---

## 추가 리소스

- [Vercel 문서](https://vercel.com/docs)
- [Next.js 배포 가이드](https://nextjs.org/docs/deployment)
- [GitHub Pages 가이드](https://docs.github.com/en/pages)
