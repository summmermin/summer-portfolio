import React, { useState } from 'react';
import { Box, Typography, Modal, IconButton, Chip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CATEGORIES = [
    { key: 'all', label: '전체' },
    { key: 'web', label: '웹 · 풀스택' },
    { key: 'mobile', label: '모바일' },
    { key: 'ai', label: 'AI · 자동화' },
];

const CAT_STYLE = {
    web:    { label: 'Web', bg: '#fdf0f3', color: '#d4728a' },
    mobile: { label: 'Mobile', bg: '#f5f0fd', color: '#9c6ad4' },
    ai:     { label: 'AI · Auto', bg: '#fff8ed', color: '#c4882a' },
};

const projects = [
    {
        id: 'rtb-web',
        category: 'web',
        title: 'RTB 글로벌 부동산 운영 서비스',
        image: `${process.env.PUBLIC_URL}/imgs/rsquare.png`,
        description: '알스퀘어 내부 영업팀을 위한 부동산 운영 서비스 (한국·베트남 글로벌)',
        longDescription: `📅 기간: 2025.11 ~ 현재
🧩 역할: 풀스택 개발 (프론트엔드 & 백엔드 & 인프라)

💡 프로젝트 설명:
알스퀘어 내부 영업팀이 사용하는 부동산 운영 서비스 RTB의 글로벌 버전 개발.
한국과 베트남 시장을 동시에 지원하는 다국어·다지역 서비스로,
요구사항 정의 단계부터 개발·배포까지 전반에 걸쳐 참여.

주요 업무:
- 서비스 방향성 및 요구사항 협의 (영업팀·기획팀과 기능 우선순위 결정)
- React 기반 프론트엔드 개발 (다국어 지원)
- Kotlin 기반 백엔드 API 설계 및 개발
- 한국·베트남 글로벌 버전 분기 처리 및 배포
- PostgreSQL 데이터 모델링 및 쿼리 최적화
- AWS Kubernetes 환경 운영 및 GitHub Actions CI/CD 관리

🛠️ 기술 스택:
Frontend: React, TypeScript
Backend: Kotlin
Database: PostgreSQL
Infra: AWS, Kubernetes, GitHub Actions`,
        tags: ['#React', '#Kotlin', '#글로벌', '#풀스택', '#AWS'],
    },
    {
        id: 'rtb-mobile',
        category: 'mobile',
        title: 'RTB 모바일 앱 (Android & iOS)',
        image: `${process.env.PUBLIC_URL}/imgs/rsquare-erp.png`,
        description: 'RTB 서비스의 Android / iOS 네이티브 모바일 앱',
        longDescription: `📅 기간: 2025.11 ~ 현재
🧩 역할: Android / iOS 네이티브 개발

💡 프로젝트 설명:
RTB 부동산 운영 서비스의 모바일 버전.
내부 영업팀이 현장에서도 매물 확인 및 업무 처리를 할 수 있도록
Kotlin(AOS)과 Swift(iOS)로 각 플랫폼 특성에 맞게 구현.
공통 비즈니스 로직은 KMP(Kotlin Multiplatform) shared 모듈로 관리.

주요 업무:
- Android(Kotlin) 앱 개발 및 기능 구현
- iOS(Swift) 앱 개발 및 기능 구현
- KMP shared 모듈을 통한 공통 비즈니스 로직 관리
- Google Maps / Naver Maps 지도 연동 및 마커 커스터마이징
- AOS / iOS 테스트 및 배포 관리 (INT → STG → PRD)

🛠️ 기술 스택:
Android: Kotlin, Jetpack Compose
iOS: Swift
Cross Platform: KMP
Maps: Google Maps, Naver Maps`,
        tags: ['#Kotlin', '#Swift', '#KMP', '#Android', '#iOS'],
    },
    {
        id: 'listing',
        category: 'web',
        title: '대고객 매물 리스팅 서비스',
        image: `${process.env.PUBLIC_URL}/imgs/dashboard.png`,
        description: '알스퀘어 일반 고객을 위한 부동산 매물 검색·리스팅 웹서비스',
        longDescription: `📅 기간: 2025.11 ~ 현재
🧩 역할: 풀스택 개발 (프론트엔드 & 백엔드)

💡 프로젝트 설명:
알스퀘어의 일반 고객(B2C)을 대상으로 부동산 매물을 검색하고
리스팅할 수 있는 대고객 서비스 개발.
내부 운영 서비스(RTB)와 연계하여 데이터를 공유하며,
사용자 경험 중심의 UI/UX 설계에 중점.

주요 업무:
- 매물 검색·필터링·리스팅 UI 개발 (React)
- 매물 데이터 API 설계 및 백엔드 개발 (Kotlin)
- RTB 내부 데이터와의 연동 구조 설계 참여
- 검색 성능 최적화 및 반응형 레이아웃 구현

🛠️ 기술 스택:
Frontend: React, TypeScript
Backend: Kotlin
Database: PostgreSQL
Infra: AWS, Kubernetes`,
        tags: ['#React', '#Kotlin', '#B2C', '#부동산', '#풀스택'],
    },
    {
        id: 'ai-pdf',
        category: 'ai',
        title: 'LLM 친화적 PDF 파이프라인',
        image: `${process.env.PUBLIC_URL}/imgs/chatbot.png`,
        description: 'AI 팀과 협업하여 PDF 문서를 LLM이 효율적으로 읽을 수 있도록 처리하는 파이프라인',
        longDescription: `📅 기간: 2025.11 ~ 현재
🧩 역할: AI 파이프라인 개발 (AI 팀 협업)

💡 프로젝트 설명:
사내 AI 팀과 협업하여 부동산 관련 PDF 문서를
LLM이 효율적으로 파싱하고 활용할 수 있도록 전처리 파이프라인 구축.
PDF 구조 분석, 텍스트 추출 최적화, 청킹 전략 등에 관여하며
AI 팀과의 인터페이스 설계를 담당.

주요 업무:
- PDF 문서 구조 분석 및 LLM 가독성 개선 전처리 로직 구현
- 텍스트 추출 품질 향상 (레이아웃, 표, 이미지 캡션 처리)
- 청킹(chunking) 전략 설계 및 실험
- AI 팀과의 파이프라인 인터페이스 설계 협의

🛠️ 기술 스택:
Language: Python
AI/LLM: Claude API
Document: PDF 파싱, 텍스트 전처리`,
        tags: ['#AI', '#LLM', '#Python', '#PDF', '#Claude'],
    },
    {
        id: 'ai-automation',
        category: 'ai',
        title: '팀 업무 자동화 도구',
        image: `${process.env.PUBLIC_URL}/imgs/lions.png`,
        description: 'Claude API와 Jira/Notion/Figma API를 연결한 팀 업무 자동화 시스템',
        longDescription: `📅 기간: 2025.11 ~ 현재
🧩 역할: 자동화 도구 설계 및 개발

💡 프로젝트 설명:
팀 내 반복 업무를 자동화하기 위해 Claude API를 중심으로
Jira, Notion, Figma 등 협업 도구 API를 연동한 자동화 시스템 개발.
AI-hub, 팀 위키, 회의록 등 내부 레포지토리를 파싱하여
컨텍스트를 제공하고, 각 도구 간 데이터 흐름을 자동화.

주요 업무:
- 레포 파서: AI-hub / 팀 위키 / 회의록 등 내부 문서 파싱 모듈 개발
- Claude API 연동: 파싱된 컨텍스트 기반 자동 요약·분류·작업 생성
- Jira API 연동: 회의록 → 자동 티켓 생성 및 스프린트 연동
- Notion API 연동: 팀 위키 자동 업데이트 및 문서 동기화
- Figma API 연동: 디자인 변경사항 자동 감지 및 팀 공유

🛠️ 기술 스택:
AI: Claude API
APIs: Jira API, Notion API, Figma API
Language: Python / Node.js`,
        tags: ['#Claude', '#Jira', '#Notion', '#Figma', '#자동화'],
    },
    {
        id: 'kmp-app',
        category: 'mobile',
        title: '알스퀘어 업무용 솔루션 KMP 앱',
        image: `${process.env.PUBLIC_URL}/imgs/rsquare-erp.png`,
        description: '알스퀘어 내부 업무용 크로스플랫폼 모바일 앱',
        longDescription: `📅 기간: 2025.10 ~ 현재
🧩 역할: KMP 모바일 앱 유지보수 및 운영, 배포 관리, 서버 연동 개발

💡 프로젝트 설명:
알스퀘어 내부에서 사용하는 업무용 모바일 솔루션으로,
KMP 기반의 Android / iOS 크로스플랫폼 앱 유지보수 및 기능 개선 담당.

주요 업무:
- KMP 기반 앱 유지보수 및 기능 개선 (shared 모듈 관리)
- Android(Kotlin) / iOS(Swift) 플랫폼별 기능 구현 및 버그 수정
- AOS / iOS 테스트 및 배포 (INT → STG → PRD)
- 서버 API 수정 및 배포 작업 참여
- Google Maps / Naver Maps 연동 및 지도 마커 커스터마이징

🛠️ 기술 스택:
언어/플랫폼: Kotlin, Swift
Cross Platform: KMP
Mobile: Android, iOS`,
        tags: ['#KMP', '#Kotlin', '#Swift', '#Maps'],
    },
    {
        id: 'erp',
        category: 'web',
        title: '알스퀘어 ERP 서비스 웹 개발',
        image: `${process.env.PUBLIC_URL}/imgs/rsquare.png`,
        description: '알스퀘어 ERP 웹 서비스 프론트엔드 및 백엔드 개발',
        longDescription: `📅 기간: 2025.10 ~ 현재
🧩 역할: ERP 웹 서비스 프론트엔드/백엔드 개발 및 운영, 정기 배포 관리

💡 프로젝트 설명:
알스퀘어의 핵심 업무를 담당하는 ERP 웹 서비스 개발 프로젝트로,
React 기반 프론트엔드와 Kotlin 기반 서버를 직접 개발 및 운영.

주요 업무:
- ERP 웹 서비스 프론트엔드 개발 (React)
- Kotlin 기반 백엔드 API 설계 및 기능 개발
- PostgreSQL 데이터 모델링 및 쿼리 최적화
- AWS Kubernetes 환경 운영 및 관리
- CronJob 기반 일간/주간/월간 배치 설계 및 구현
- GitHub Actions 기반 CI/CD 파이프라인 관리

🛠️ 기술 스택:
Frontend: React, TypeScript
Backend: Kotlin
Database: PostgreSQL
Infra: AWS, Kubernetes, GitHub Actions`,
        tags: ['#React', '#Kotlin', '#ERP', '#AWS', '#CI/CD'],
    },
    {
        id: 'museum-app',
        category: 'mobile',
        title: '국립중앙박물관 기증관 안드로이드 앱',
        image: `${process.env.PUBLIC_URL}/imgs/donation.png`,
        description: '서비스 안내 로봇 안드로이드 앱',
        longDescription: `📅 기간: 2025.05 ~ 2025.07
🧩 역할: 안드로이드 앱 개발 (UI/UX 설계, 기능 구현, DB 연동)

💡 프로젝트 설명:
국립중앙박물관 기증관에서 운영되는 서비스 안내 로봇용 안드로이드 앱 개발.
MVVM 아키텍처 적용, Room DB를 활용한 로컬 데이터 관리 최적화.

주요 업무:
- 안드로이드 앱 UI/UX 설계 및 구현 (Jetpack Compose)
- MVVM 아키텍처 적용: ViewModel 및 LiveData로 데이터 흐름 관리
- Room Database 구축: 방문객 정보 및 안내 데이터 저장/조회
- 로봇 챗봇 기능 연동: Google Dialogflow API 연계
- AR 안내 서비스 개발: 기증관 내부 위치 기반 AR 가이드

🛠️ 기술 스택:
언어/플랫폼: Kotlin, Android Studio
아키텍처: MVVM
UI: Jetpack Compose
Database: Room`,
        tags: ['#Kotlin', '#JetpackCompose', '#MVVM', '#Room'],
    },
    {
        id: 'jongkundang',
        category: 'mobile',
        title: '종근당 서비스 안내 로봇 앱',
        image: `${process.env.PUBLIC_URL}/imgs/jongkundang_robot.png`,
        description: '종근당 방문객 맞춤형 안내 및 퀴즈/퍼즐 콘텐츠 제공 로봇 앱',
        longDescription: `📅 기간: 2025.08 ~ 진행 중
🧩 역할: 안드로이드 앱 개발 (UI/UX 설계, 기능 구현)

💡 프로젝트 설명:
종근당 사옥 방문객을 대상으로 한 서비스 안내 로봇 안드로이드 앱 개발.
퀴즈, 퍼즐 등 인터랙티브 콘텐츠와 기업 홍보, 시설 안내 서비스 제공.

주요 업무:
- 안드로이드 앱 UI/UX 설계 및 Jetpack Compose 기반 화면 구현
- MVVM 아키텍처: ViewModel + LiveData 데이터 관리
- Room Database 설계: 콘텐츠 기록 및 퀴즈/퍼즐 진행도 저장
- 퀴즈/퍼즐 등 연령대별 인터랙티브 콘텐츠 개발
- Firebase Realtime Database 연동: 실시간 데이터 업데이트

🛠️ 기술 스택:
언어/플랫폼: Kotlin, Android Studio
아키텍처: MVVM
UI: Jetpack Compose
Database: Room, Firebase Realtime Database`,
        tags: ['#Kotlin', '#JetpackCompose', '#Firebase', '#MVVM'],
    },
    {
        id: 'chatbot',
        category: 'ai',
        title: '지능형 안내 챗봇 시스템',
        image: `${process.env.PUBLIC_URL}/imgs/chatbot.png`,
        description: 'AI 기반 스마트 상담 챗봇 시스템',
        longDescription: `📅 기간: 2024.08 ~ 진행 중
🧩 역할: 풀스택 개발 (프론트엔드 & 백엔드, 유지보수 및 기능 고도화)

💡 프로젝트 설명:
PoC 단계에서 검증된 챗봇을 실제 서비스 환경에서 안정적으로 운영할 수 있도록
기능 확장 및 성능 최적화 진행. 종근당 사옥 안내 챗봇 개발 진행 중(2025 ~).

주요 업무:
- 초기 챗봇 시스템 설계 및 개발: Google Dialogflow ES 활용
- 챗봇 서버 개발: Node.js 기반
- 챗봇 UI 개발: React + Tailwind CSS
- 백엔드 구축 및 시나리오 설계
- Google Apps Scripts 활용: 스프레드시트 데이터 관리 및 연동

🛠️ 기술 스택:
Frontend: React, Zustand, MUI, TypeScript
Backend: Node.js
기타: Google Dialogflow, Google Apps Scripts`,
        tags: ['#Node.js', '#React', '#Dialogflow', '#Zustand'],
    },
    {
        id: 'dashboard',
        category: 'web',
        title: '로봇 관리 대시보드',
        image: `${process.env.PUBLIC_URL}/imgs/lions.png`,
        description: '로봇 상태 모니터링 및 관리 대시보드',
        longDescription: `📅 기간: 2024.02 ~ 진행 중
🧩 역할: 풀스택 개발 (프론트엔드 & 백엔드, 유지보수 및 기능 추가)

💡 프로젝트 설명:
로봇 운영 및 관리 기능을 제공하는 대시보드 시스템. 관리자가 로봇 상태를
실시간으로 확인하고, TTS 생성, 라이선스 발급, 로그 추출 등 기능 수행.

주요 업무:
- 로봇 상태 모니터링 시스템: 배터리·연결 상태 실시간 서비스 개발
- 로봇 라이선스 발급 시스템: 유효성 검증 및 발급 이력 관리
- 로그 추출 시스템: Firebase Realtime Database 활용
- Google TTS API 연동

🛠️ 기술 스택:
Frontend: Vue.js + Vite, Tailwind CSS, Pinia
Backend: Node.js, Express
Database: PostgreSQL, Redis`,
        tags: ['#Vue.js', '#Tailwind', '#PostgreSQL', '#Redis'],
    },
    {
        id: 'kiro',
        category: 'web',
        title: 'KIRO 무선 로봇 택배 운영 플랫폼',
        image: `${process.env.PUBLIC_URL}/imgs/delivery.png`,
        description: '한국로봇융합연구원(KIRO) 발주 프로젝트',
        longDescription: `📅 기간: 2023.12 ~ 2024.10
🧩 역할: 프론트엔드 개발, UI 구축 및 유지보수

💡 프로젝트 설명:
택배기사가 호실 별로 구분되지 않은 물품을 두면
로봇이 수신인의 집이나 지능형 무인택배함에 전달하는 시스템.

주요 업무:
- 지능형 무인 택배 송수신 UI 개발
- 택배 현황 실시간 모니터링 기능 설계
- Vuex 활용한 사용자 인증 및 보안 강화
- vue-i18n 적용 다국어 지원 시스템 구축

🛠️ 기술 스택:
Frontend: Vue.js, TypeScript, SCSS, Vuex
Build: Webpack, Babel, Vite
API: Axios
Database: MySQL`,
        tags: ['#Vue.js', '#Vuex', '#TypeScript', '#MySQL'],
    },
    {
        id: 'curating',
        category: 'web',
        title: '지능형 큐레이팅봇 UI 개발',
        image: `${process.env.PUBLIC_URL}/imgs/curating.png`,
        description: '박물관 방문객을 위한 지능형 큐레이팅봇 웹 인터페이스 — 8개 박물관 도입',
        longDescription: `📅 기간: 2022.12 ~ 진행 중
🧩 역할: 프론트엔드 개발 (UI 구축 및 유지보수)

💡 프로젝트 설명:
박물관 방문객을 위한 지능형 큐레이팅봇 웹 인터페이스 개발.
Vue.js 기반으로 웹 인터페이스 및 데이터 연동 시스템 개발.
개발 완료 후 8개 박물관에 도입, 현재까지 유지보수 및 기능 추가 진행 중.

도입 기관:
국립중앙박물관, 국립국악원, 국립어린이청소년도서관, 태권도박물관,
제주박물관, 제주항공박물관, 아시아문화전당, 나주박물관

주요 업무:
- 맞춤형 큐레이팅봇 UI 개발
- 로봇 프로그램 UI 개발
- vue-i18n 활용 다국어 지원 시스템 구축

🛠️ 기술 스택:
Frontend: Vue.js + Vite, SCSS, Pinia
Backend: Node.js, Express
Database: MySQL`,
        tags: ['#Vue.js', '#SCSS', '#vue-i18n', '#8개박물관'],
    },
    {
        id: 'catchping',
        category: 'web',
        title: 'CatchPing 게임 웹 개발',
        image: `${process.env.PUBLIC_URL}/imgs/catchping.png`,
        description: 'AI 이미지 힌트 기반 게임 — Stove 배포 완료',
        longDescription: `📅 기간: 2024.12 ~ 2025.01
🧩 역할: UI 개발

💡 프로젝트 설명:
2인 프로젝트. Catch Mind 방식의 게임으로 3회 게임 진행, 3개의 힌트로 답을 맞추는 방식.
AI를 활용한 이미지 생성 기능 도입. Stove 사이트에 배포 완료.

데모: https://www.youtube.com/watch?v=ix4JxFYojTY

주요 업무:
- Vue.js 기반 게임 UI 개발
- AI 이미지 생성 기능 연동

🛠️ 기술 스택:
Frontend: Vue.js, SCSS, Pinia
Design: Figma`,
        tags: ['#사이드프로젝트', '#Vue.js', '#AI이미지', '#배포완료'],
    },
];

const ProjectsGallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    const filtered = selectedCategory === 'all'
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <Box>
            {/* 필터 탭 */}
            <Box sx={{ display: 'flex', gap: 1, mb: 5, flexWrap: 'wrap' }}>
                {CATEGORIES.map(cat => (
                    <Box
                        key={cat.key}
                        onClick={() => setSelectedCategory(cat.key)}
                        sx={{
                            px: 2.2, py: 0.8,
                            borderRadius: '20px',
                            fontSize: '0.82rem',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            border: '1.5px solid',
                            borderColor: selectedCategory === cat.key ? '#d4728a' : '#ececec',
                            backgroundColor: selectedCategory === cat.key ? '#fdf0f3' : '#fff',
                            color: selectedCategory === cat.key ? '#d4728a' : '#9ca3af',
                            '&:hover': { borderColor: '#d4728a', color: '#d4728a' },
                        }}
                    >
                        {cat.label}
                    </Box>
                ))}
            </Box>

            {/* 프로젝트 그리드 */}
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: 3,
            }}>
                {filtered.map((project) => {
                    const cat = CAT_STYLE[project.category];
                    return (
                        <Box key={project.id}>
                            <Box
                                onClick={() => setSelectedProject(project)}
                                sx={{
                                    cursor: 'pointer',
                                    borderRadius: '16px',
                                    border: '1.5px solid #f0e8eb',
                                    overflow: 'hidden',
                                    backgroundColor: '#fff',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'box-shadow 0.25s, border-color 0.25s, transform 0.2s',
                                    '&:hover': {
                                        boxShadow: '0 6px 24px rgba(212,114,138,0.15)',
                                        borderColor: '#d4728a',
                                        transform: 'translateY(-3px)',
                                    },
                                }}
                            >
                                <Box sx={{ position: 'relative', overflow: 'hidden', height: 200, flexShrink: 0 }}>
                                    <Box
                                        component="img"
                                        src={project.image}
                                        alt={project.title}
                                        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                    {/* 카테고리 뱃지 */}
                                    <Box sx={{
                                        position: 'absolute', top: 10, left: 10,
                                        px: 1.2, py: 0.3,
                                        borderRadius: '6px',
                                        backgroundColor: cat.bg,
                                        color: cat.color,
                                        fontSize: '0.7rem',
                                        fontWeight: 'bold',
                                    }}>
                                        {cat.label}
                                    </Box>
                                </Box>
                                <Box sx={{ p: 2.8, display: 'flex', flexDirection: 'column', flex: 1 }}>
                                    <Typography fontWeight="bold" sx={{ fontSize: '0.95rem', mb: 1, color: '#1a1a1a', lineHeight: 1.5 }}>
                                        {project.title}
                                    </Typography>
                                    <Typography sx={{ fontSize: '0.8rem', color: '#9ca3af', mb: 2.5, lineHeight: 1.8, flex: 1 }}>
                                        {project.description}
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.6 }}>
                                        {project.tags.slice(0, 3).map(tag => (
                                            <Box key={tag} sx={{
                                                px: 1, py: 0.3,
                                                backgroundColor: '#fdf0f3',
                                                borderRadius: '5px',
                                                fontSize: '0.68rem',
                                                color: '#d4728a',
                                            }}>
                                                {tag}
                                            </Box>
                                        ))}
                                        {project.tags.length > 3 && (
                                            <Box sx={{ px: 1, py: 0.3, fontSize: '0.68rem', color: '#bbb' }}>
                                                +{project.tags.length - 3}
                                            </Box>
                                        )}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    );
                })}
            </Box>

            {/* 모달 */}
            <Modal
                open={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', px: 2 }}
            >
                <Box sx={{
                    width: '100%', maxWidth: 680,
                    maxHeight: '88vh',
                    backgroundColor: '#fff',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                }}>
                    {selectedProject && (
                        <>
                            {/* 이미지 */}
                            <Box sx={{ position: 'relative', height: 220, flexShrink: 0 }}>
                                <Box
                                    component="img"
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <Box sx={{
                                    position: 'absolute', inset: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)',
                                }} />
                                <IconButton
                                    onClick={() => setSelectedProject(null)}
                                    sx={{
                                        position: 'absolute', top: 12, right: 12,
                                        backgroundColor: 'rgba(255,255,255,0.9)',
                                        '&:hover': { backgroundColor: '#fff' },
                                        width: 32, height: 32,
                                    }}
                                >
                                    <CloseIcon sx={{ fontSize: 18 }} />
                                </IconButton>
                                {/* 카테고리 뱃지 */}
                                <Box sx={{
                                    position: 'absolute', bottom: 14, left: 16,
                                    px: 1.4, py: 0.4,
                                    borderRadius: '7px',
                                    backgroundColor: CAT_STYLE[selectedProject.category].bg,
                                    color: CAT_STYLE[selectedProject.category].color,
                                    fontSize: '0.72rem',
                                    fontWeight: 'bold',
                                }}>
                                    {CAT_STYLE[selectedProject.category].label}
                                </Box>
                            </Box>

                            {/* 컨텐츠 */}
                            <Box sx={{ p: 3.5, overflowY: 'auto', flex: 1 }}>
                                <Typography fontWeight="bold" sx={{ fontSize: '1.1rem', mb: 1, color: '#1a1a1a' }}>
                                    {selectedProject.title}
                                </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.7, mb: 3 }}>
                                    {selectedProject.tags.map(tag => (
                                        <Chip key={tag} label={tag} size="small" sx={{
                                            backgroundColor: '#fdf0f3',
                                            color: '#d4728a',
                                            border: '1px solid #f0c4cf',
                                            fontSize: '0.72rem',
                                            height: '24px',
                                        }} />
                                    ))}
                                </Box>
                                <Typography sx={{
                                    color: '#4b5563',
                                    fontSize: '0.85rem',
                                    lineHeight: 2,
                                    whiteSpace: 'pre-line',
                                }}>
                                    {selectedProject.longDescription}
                                </Typography>
                            </Box>
                        </>
                    )}
                </Box>
            </Modal>
        </Box>
    );
};

export default ProjectsGallery;
