# DoCode - 코드 아카이브

개발자를 위한 코드 스니펫 및 학습 노트 관리 애플리케이션

## 📋 프로젝트 소개

DoCode는 개발 중 작성한 코드와 학습 내용을 체계적으로 정리하고 관리할 수 있는 웹 애플리케이션입니다.

### 주요 기능

- 📝 **코드 작성 및 관리**: 주제별로 코드 스니펫을 작성하고 저장
- 🎨 **Syntax Highlighting**: JavaScript, TypeScript, Python, Vue, React 등 다양한 언어 지원
- 📄 **발췌 기능**: 원본 문서에서 필요한 부분만 발췌하여 노트 작성
- 🔗 **임베드 지원**: CodePen, CodeSandbox, Vercel 등 외부 코드 실행 환경 연동
- 🔐 **사용자 인증**: Firebase Authentication을 통한 안전한 로그인
- ☁️ **클라우드 저장**: Firestore를 통한 실시간 데이터 동기화
- 🌙 **다크모드**: 눈의 피로를 줄이는 다크모드 지원

## 🛠 기술 스택

- **Frontend**: Vue 3 (Composition API)
- **Styling**: SCSS
- **Backend**: Firebase (Authentication + Firestore)
- **Build Tool**: Vite
- **Hosting**: Firebase Hosting

## 🚀 시작하기

### 필수 요구사항

- Node.js 16.x 이상
- npm 또는 yarn

### 설치

```bash
# 저장소 클론
git clone https://github.com/uixhyeon/docode.git
cd docode

# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173` 접속

### 프로덕션 빌드

```bash
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

### 빌드 미리보기

```bash
npm run preview
```

## 🔥 Firebase 설정

### Firebase 프로젝트 정보

- **Project ID**: `code-archive-f7f9d`
- **Hosting URL**: `https://code-archive-f7f9d.web.app`
- **Auth Domain**: `code-archive-f7f9d.firebaseapp.com`

### 로그인 정보

- **아이디**: `uixhyeon`
- **비밀번호**: `uixhyeon`

### Firebase 배포

```bash
# Firebase CLI 로그인
firebase login

# Hosting에 배포
firebase deploy --only hosting
```

배포 후 `https://code-archive-f7f9d.web.app`에서 확인 가능합니다.

## 📁 프로젝트 구조

```
docode/
├── src/
│   ├── components/          # 재사용 가능한 컴포넌트
│   │   ├── Header.vue
│   │   ├── MDNSidebar.vue
│   │   └── TabNavigation.vue
│   ├── composables/         # Vue Composables
│   │   └── useArticles.js   # Firestore 아티클 관리
│   ├── firebase/            # Firebase 설정
│   │   ├── config.js        # Firebase 초기화
│   │   └── firestore.js     # Firestore CRUD 함수
│   ├── router/              # Vue Router
│   │   └── index.js
│   ├── styles/              # 전역 스타일
│   │   ├── main.scss
│   │   └── variables.scss
│   ├── views/               # 페이지 컴포넌트
│   │   ├── HomePage.vue
│   │   ├── LoginPage.vue
│   │   ├── SignupPage.vue
│   │   ├── WritePage.vue
│   │   ├── ArticlePage.vue
│   │   ├── subjects/        # 주제별 페이지 (React, Vue, JS, TS)
│   │   ├── ui-features/     # UI 기능별 페이지
│   │   ├── development/     # 개발 도구 페이지
│   │   └── others/          # 기타 페이지
│   ├── App.vue
│   └── main.js
├── public/                  # 정적 파일
├── firebase.json            # Firebase Hosting 설정
├── .firebaserc              # Firebase 프로젝트 설정
├── vite.config.js           # Vite 설정
└── package.json
```

## 💾 데이터 구조

### Firestore 컬렉션

```
users/{userId}/articles/{articleId}
```

### Article 문서 구조

```javascript
{
  id: string,                    // 문서 ID
  title: string,                 // 글 제목
  topicId: string,               // 주제 ID (예: 'useState')
  topicTitle: string,            // 주제 제목 (예: 'useState')
  category: string,              // 카테고리 (예: 'subjects')
  subcategory: string,           // 서브카테고리 (예: 'react')
  page: string,                  // 페이지 (예: 'hooks')
  language: string,              // 프로그래밍 언어
  referenceDocument: string,     // 원본 문서 내용
  cards: Array,                  // 노트 카드 배열
  embedUrl: string,              // 임베드 URL
  preview: string,               // 미리보기 텍스트
  createdAt: string,             // 생성 시간
  updatedAt: string              // 수정 시간
}
```

## 🎯 주요 기능 사용법

### 1. 회원가입

최초 1회만 실행 필요:
- `/signup` 페이지 접속
- "사용자 생성" 버튼 클릭

### 2. 글 작성

1. 원하는 주제 선택
2. "글쓰기" 버튼 클릭
3. 왼쪽 패널에 원본 코드 입력
4. 라인 드래그로 선택 후 "발췌하기" 클릭
5. 오른쪽 패널에서 노트 작성
6. "저장하기" 버튼 클릭

### 3. 글 수정/삭제

- 작성한 글 카드 클릭 → 상세 페이지
- "수정하기" 또는 "삭제" 버튼 사용

## 🔧 개발 팁

### Vite 설정

`@` 별칭을 사용하여 import 경로를 간소화할 수 있습니다:

```javascript
import { auth } from '@/firebase/config'
```

### SCSS 변수

전역 SCSS 변수는 `src/styles/variables.scss`에 정의되어 있으며, 모든 Vue 컴포넌트에서 자동으로 사용 가능합니다.

## 📝 Git 커밋 가이드

```bash
# 변경사항 스테이징
git add .

# 커밋 (예시)
git commit -m "feat: 새로운 기능 추가"
git commit -m "fix: 버그 수정"
git commit -m "style: UI 스타일 개선"

# 푸시
git push
```

## 🌐 배포된 사이트

- **개발 서버**: `http://localhost:5173`
- **프로덕션**: `https://code-archive-f7f9d.web.app`

## 📄 라이선스

이 프로젝트는 개인 프로젝트입니다.

## 👤 작성자

- **uixhyeon**
