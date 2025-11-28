## DIVE SOPT 37기 합동세미나 모바일 웹 2조 MEGABOX 

## 👥 팀원 소개

| **이훈진** | **권동희** | **송민하** | **차주영** |
| :-: | :-: | :-: | :-: |
| <img src="https://github.com/huniversal.png" width="150" height="150"/><br/>[@huniversal](https://github.com/huniversal) | <img src="https://github.com/hamxxn.png" width="150" height="150"/><br/>[@hamxxn](https://github.com/hamxxn) | <img src="https://github.com/sminha.png" width="150" height="150"/><br/>[@sminha](https://github.com/sminha) | <img src="https://github.com/woodzverse.png" width="150" height="150"/><br/>[@woodzverse](https://github.com/woodzverse) |


## 🚀 역할 분담 및 담당 구현

### 훈진
| 종류 | 목록 |
| --- | --- |
| setting | Tanstack Query · Zustand · Color-Token |
| view | 결제 페이지 · Common-Toast Message |
| api | 예매 POST |

### 동희
| 종류 | 목록 |
| --- | --- |
| setting | CI/CD · 폴더구조 · 절대경로 · 테일윈드 · SVG-Components · SVG 자동화 코드 구현 · api instance · swagger-ts-api |
| view | 전체 레이아웃 · 메인 페이지 · Modal · 댓글 컴포넌트 · movie card · divider |
| api  | 영화 리스트 GET |

### 민하
| 종류 | 목록 |
| --- | --- |
| setting ⚙️ | - |
| view 👀 | 영화 예매 페이지 · Common-Button |
| api 📡 | 영화관 API · 상영정보 조회 API · 예약 전 상영정보 조회 API · 예약 API |

### 주영
| 종류 | 목록 |
| --- | --- |
| setting ⚙️ | Deployment · Storybook Setting · Typography-Token |
| view 👀 | 영화 상세 페이지 · Common-tooltip · Common-header |
| api 📡 | 영화 상세 조회 API · 영화 관람평 조회 API |


## ⚙️ 기술 스택

| 역할 | 종류 |
| --- | --- |
| Library | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black) |
| Programming Language | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white) |
| Styling | ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) |
| State Management | ![Zustand](https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logo=react&logoColor=white) |
| Data Fetching | ![Tanstack Query](https://img.shields.io/badge/tanstackquery-FF4154.svg?style=for-the-badge&logo=tanstackquery&logoColor=white) |
| Formatting | ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E) |
| Package Manager | ![Pnpm](https://img.shields.io/badge/Pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white) |
| Version Control | ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) |
| Deployment | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) |
| Cooperation | ![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white) ![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white) ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white) ![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black) |


## 🧾 컨벤션

### Commit Message Convention
```markdown
[기본 형식]
타입: 제목
- 세부 내용1
- 세부 내용2

[사용 예시]
git commit -m "feat: 사용자 프로필 페이지 구현"

**[작성 규칙]**
- 타입은 소문자로 시작(feat, fix…)
- 제목은 한국어로 간결하게
- 과거형 사용 금지(구현했다 X → 구현 O)
```

| 타입 | 설명 | 예시 |
| --- | --- | --- |
| **init** | 초기 설정 | `init: 프로젝트 초기 설정 - ESLint 설정 - 폴더 구조` |
| **feat** | 새로운 기능 추가 | `feat: 로그인 기능 구현 - JWT 토큰 처리 - 리다이렉트 로직` |
| **remove** | 파일이나 코드 삭제 | `remove: 사용하지 않는 컴포넌트 삭제 - legacy 코드 제거` |
| **fix** | 버그, 오류 수정 | `fix: 회원가입 유효성 검사 오류 - 이메일 정규식 수정` |
| **typo** | 단순 오타 수정 | `typo: 변수명 오타 수정 - userName 스펠링` |
| **docs** | 문서 관련 수정 | `docs: README 업데이트 - 설치 가이드 추가` |
| **style** | CSS 등 UI 디자인 변경 | `style: 버튼 디자인 수정 - hover 효과 추가` |
| **refactor** | 코드 리팩토링 | `refactor: API 호출 로직 개선 - axios 인터셉터 적용` |
| **test** | 테스트 코드 추가/삭제/변경 | `test: 로그인 컴포넌트 테스트 추가 - 유효성 검사 테스트` |
| **ci** | 빌드/배포 파이프라인 | `ci: 의존성 업데이트 - React 18.0 설치` |
| **assets** | 이미지·아이콘 등 자산 | `assets: 로고 이미지 추가 - favicon 설정` |
| **chore** | 기타 유지보수 | `chore: webpack 설정 변경 - build 스크립트 수정` |
| **merge** | 브랜치 병합 | `merge: develop에서 feature/login 병합` |
| **comment** | 주석, 코멘트 | `comment: API 함수 주석 추가 - 매개변수 설명` |
| **rename** | 파일/폴더명 변경 | `rename: 컴포넌트 파일명 변경 - Button.tsx로 수정` |

### Folder Convention
```
폴더명: kebab-case
파일명: PascalCase
단, .ts 파일은 kebab-case

└── auth-form/
    ├── LoginForm.tsx
    ├── RegisterForm.tsx
    ├── PasswordResetForm.tsx
    └── index.ts
```

### Branch Convention
```
기능/#이슈번호/기능명
```


## 📁 폴더 구조
```
├── apis/                     
├── public/                   
├── src/
│   ├── App.tsx / main.tsx             
│   ├── pages/                         
│   │   ├── home/
│   │   │   ├── Home.tsx / Home.client.tsx
│   │   │   ├── api/use-api-request.ts
│   │   │   ├── components/Carousel.tsx
│   │   │   └── hooks/use-movie.ts
│   │   ├── movie-detail/
│   │   │   ├── MovieDetail.tsx
│   │   │   ├── @section/ (InfoSection, ReviewSection)
│   │   │   ├── api/, components/, constants/, hooks/, styles/, types/, mock.ts
│   │   ├── movie-reservation/
│   │   │   ├── Reservation.tsx
│   │   │   ├── components/, constants/, hooks/, section/, types/, utils/
│   │   └── payment/
│   │       ├── Payment.tsx
│   │       ├── @section/, components/, constants/, hooks/, schemas/, mock.ts
│   ├── router/                        # 라우터 및 Layout
│   ├── shared/                        # 공용 자원 (assets, components, constants, hooks, query-key, store, styles, types, utils)
│   └── vite-env.d.ts
├── dist/                              # Vite 빌드 산출물
├── package.json / pnpm-lock.yaml      # 의존성 관리
├── tsconfig.*                         # TypeScript 설정
└── vite.config.ts                     # Vite 설정
```

