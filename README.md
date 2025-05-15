# Weebur List 과제

Next.js 14(App Router) 기반의 제품 리스트 과제 프로젝트입니다.  
검색, 정렬, 무한스크롤 기능이 포함되어 있으며, 뷰 모드(grid/list)를 랜덤으로 설정하여 사용자 경험을 실험합니다.

## 🛠 기능 요약

- 🔍 **검색**: 헤더에서 검색어 입력 시 제품 필터링
- ⭐ **정렬**: 추천순(기본), 인기순(별점 내림차순) 정렬 기능
- 🔁 **무한스크롤**: Intersection Observer를 활용한 페이징 처리
- 🧱 **그리드 / 리스트 뷰 전환**: 랜덤 뷰 설정 및 24시간 유지(localStorage)
- 🦴 **로딩 중 Skeleton UI** 표시
- ❌ **결과 없음 / 더 이상 없음** 메시지 출력

## 🔧 실행 방법

### 1. 패키지 설치

```bash
yarn install
```

### 2. 개발 서버 실행

```bash
yarn dev
```

### 3. 접속

```bash
http://localhost:3000
```

## 📁 디렉토리 구조

```bash
├── app/
│   └── page.tsx              # 메인 엔트리
├── components/
│   └── common/
│       ├── ProductList/      # 주요 컴포넌트
│       ├── Skeleton/
│       └── PageContainer.tsx
├── hooks/
│   └── useViewMode.ts        # localStorage 기반 viewMode 관리
├── utils/
│   └── url.ts                # queryString 유틸 함수
├── styles/
├── public/
└── README.md
```

## 📦 주요 기술 스택

- **Next.js 14** (App Router)
- **TypeScript**
- **React Query** (@tanstack/react-query)
- **styled-components**
- **react-intersection-observer**
- **react-loading-skeleton**

## 📄 참고 API

- DummyJSON: https://dummyjson.com/docs/products

## 🙋‍♀️ 기타 참고사항

- 검색 API(`/products/search`)는 정렬 파라미터(`sortBy`, `order`)를 지원하지 않아 정렬은 기본 API에서만 동작합니다.
- 무한 스크롤은 각 페이지별 데이터를 누적해 보여줍니다.
