# Netflix Clone

TMDB API를 활용한 넷플릭스 클론 프로젝트입니다.

## Tech Stack

| 분류             | 기술                         |
| ---------------- | ---------------------------- |
| Frontend         | React 19, Vite 8             |
| Routing          | React Router DOM 7           |
| 상태관리(로그인) | Zustand                      |
| 데이터 패칭      | TanStack React Query         |
| HTTP Client      | Axios                        |
| UI               | Bootstrap 5, React Bootstrap |
| 애니메이션       | Framer Motion                |
| 아이콘           | Font Awesome                 |
| API              | TMDB (The Movie Database)    |

## 주요 기능

### 프로필 선택 & 로그인

- 4개의 프로필 중 선택하여 로그인
- Zustand 기반 인증 상태 관리
- 미로그인 시 로그인 페이지로 리다이렉트

### 홈페이지

- 랜덤 인기 영화 배너
- 인기순 / 평점순 / 개봉예정 영화 슬라이더 (react-multi-carousel)
- Framer Motion 페이지 전환 애니메이션

### 영화 목록 페이지 (/movies)

- 키워드 검색 (navbar 검색바 연동)
- 장르별 필터링 (드롭다운)
- 인기순 정렬 (높은순 / 낮은순)
- 페이지네이션 (react-paginate)
- 검색어 변경 시 페이지 자동 초기화
- 검색 결과 없을 시 안내 메시지

### 영화 카드

- 포스터, 평점, 연령 등급, 장르 태그 표시
- PC: hover 시 상세 정보 드롭다운 (재생, 찜, 좋아요 버튼)
- 모바일: 카드 하단 정보 표시

### 반응형 디자인

- PC / 모바일 레이아웃 분리
- 모바일: 검색 인풋 상시 노출, 캐러셀 아이템 수 조절

## 프로젝트 구조

```
src/
├── common/          # 공통 컴포넌트 (MovieCard, MovieSlider)
├── constants/       # 반응형 설정
├── hooks/           # React Query 커스텀 훅
├── layout/          # AppLayout, Footer
├── pages/
│   ├── Homepage/    # 메인 페이지 + Banner, 슬라이드 컴포넌트
│   ├── Login/       # 프로필 선택 페이지
│   ├── Movies/      # 영화 목록 (검색, 필터, 정렬, 페이지네이션)
│   ├── MovieDetail/ # 영화 상세 페이지
│   └── NotFoundPage/# 404 페이지
├── store/           # Zustand 스토어
├── utils/           # Axios 인스턴스
└── App.jsx          # 라우팅 설정
```

## 실행 방법

```bash
npm install
npm run dev
```

`.env` 파일에 TMDB API 키가 필요합니다:

```
VITE_API_KEY=your_tmdb_api_key
```
