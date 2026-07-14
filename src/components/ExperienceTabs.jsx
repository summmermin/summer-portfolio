import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, Chip } from '@mui/material';

const skillGroups = [
    { label: 'Frontend', color: '#d4728a', skills: ['React', 'Vue', 'TypeScript', 'JavaScript', 'MUI', 'Tailwind CSS', 'Pinia', 'Zustand'] },
    { label: 'Mobile', color: '#c4587a', skills: ['Kotlin', 'Swift', 'KMP', 'Jetpack Compose', 'Android', 'iOS'] },
    { label: 'Backend', color: '#a8456e', skills: ['Kotlin/Java', 'Node.js', 'NestJS', 'Express', 'Python'] },
    { label: 'Database', color: '#b56e8a', skills: ['PostgreSQL', 'MySQL', 'Redis', 'Firebase'] },
    { label: 'AI · Automation', color: '#e8a0b0', skills: ['Claude API', 'LLM Pipeline', 'Jira API', 'Notion API', 'Figma API', 'Google Dialogflow', 'Google Apps Script'] },
    { label: 'Infra · Cloud', color: '#c4849a', skills: ['AWS (EC2, S3, IAM, Athena)', 'Kubernetes', 'GitHub Actions'] },
];

const experiences = [
    {
        period: '2025.11 ~ 현재',
        company: '알스퀘어 IT부문',
        role: '소프트웨어 개발자',
        current: true,
        items: [
            'RTB 부동산 운영 서비스 풀스택 개발 (한국·베트남 글로벌)',
            'RTB 모바일 앱 개발 (Android / iOS)',
            '대고객 매물 리스팅 서비스 풀스택 개발',
            'AI 팀 협업 · LLM 친화적 PDF 파이프라인 구축',
            'Claude + Jira / Notion / Figma API 팀 자동화 도구 개발',
        ],
    },
    {
        period: '2022 ~ 2025.10',
        company: '클로봇 서비스로봇사업부',
        role: '소프트웨어 개발자',
        current: false,
        items: [
            '로봇 관리자 대시보드 풀스택 개발 (Vue + Node.js)',
            '지능형 큐레이팅봇 UI 개발 — 8개 박물관 도입',
            '안내 로봇 챗봇 시스템 개발 (Google Dialogflow)',
            'KIRO 무선 로봇 택배 운영 플랫폼 프론트엔드 개발',
            '국립중앙박물관 기증관 안드로이드 앱 개발',
        ],
    },
];

const ExperienceTabs = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={tabIndex}
                onChange={(_, v) => setTabIndex(v)}
                sx={{
                    mb: 4,
                    '& .MuiTabs-indicator': { backgroundColor: '#d4728a' },
                    '& .MuiTab-root': { color: '#bbb', fontSize: '0.82rem', letterSpacing: '1px', minWidth: 'auto', px: 2 },
                    '& .MuiTab-root.Mui-selected': { color: '#d4728a' },
                }}
            >
                <Tab label="경력 & 학력" />
                <Tab label="기술 스택" />
            </Tabs>

            {tabIndex === 0 && (
                <Box>
                    {experiences.map((exp) => (
                        <Box key={exp.company} sx={{
                            mb: 4.5, pl: 2.5,
                            borderLeft: `2px solid ${exp.current ? '#d4728a' : '#ececec'}`,
                        }}>
                            <Typography sx={{ fontSize: '0.74rem', color: exp.current ? '#d4728a' : '#bbb', mb: 0.5, letterSpacing: '0.5px' }}>
                                {exp.period}
                            </Typography>
                            <Typography fontWeight="bold" sx={{ color: '#1a1a1a', mb: 0.3, fontSize: '1rem' }}>
                                {exp.company}
                            </Typography>
                            <Typography sx={{ color: '#d4728a', fontSize: '0.82rem', mb: 1.5 }}>
                                {exp.role}
                            </Typography>
                            {exp.items.map(item => (
                                <Typography key={item} sx={{ fontSize: '0.84rem', color: '#6b7280', mb: 0.6, lineHeight: 1.8 }}>
                                    · {item}
                                </Typography>
                            ))}
                        </Box>
                    ))}

                    <Box sx={{ pl: 2.5, borderLeft: '2px solid #ececec', mb: 1 }}>
                        <Typography sx={{ fontSize: '0.74rem', color: '#bbb', mb: 0.5 }}>학력</Typography>
                        {['경희사이버대학교 컴퓨터공학과', '성신여자대학교 법학과'].map(edu => (
                            <Typography key={edu} sx={{ fontSize: '0.84rem', color: '#6b7280', mb: 0.5 }}>
                                · {edu}
                            </Typography>
                        ))}
                    </Box>
                </Box>
            )}

            {tabIndex === 1 && (
                <Box>
                    {skillGroups.map(group => (
                        <Box key={group.label} sx={{ mb: 3 }}>
                            <Typography sx={{ fontSize: '0.72rem', color: group.color, letterSpacing: '1.5px', mb: 1.2 }}>
                                {group.label}
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                                {group.skills.map(skill => (
                                    <Chip key={skill} label={skill} size="small" sx={{
                                        backgroundColor: '#fdf0f3',
                                        color: '#d4728a',
                                        border: '1px solid #f0c4cf',
                                        fontSize: '0.75rem',
                                        height: '26px',
                                    }} />
                                ))}
                            </Box>
                        </Box>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default ExperienceTabs;
