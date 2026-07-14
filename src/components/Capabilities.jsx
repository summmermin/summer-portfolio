import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import StorageIcon from '@mui/icons-material/Storage';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const capabilities = [
    {
        icon: <LanguageIcon sx={{ fontSize: 32 }} />,
        color: '#d4728a',
        title: 'Web Frontend',
        desc: 'React · Vue · TypeScript로 사용자 중심의 웹 인터페이스를 구현합니다. 글로벌 서비스의 다국어 대응과 반응형 레이아웃 경험이 있습니다.',
        tags: ['React', 'Vue', 'TypeScript', 'MUI', 'Tailwind CSS'],
    },
    {
        icon: <SmartphoneIcon sx={{ fontSize: 32 }} />,
        color: '#c4587a',
        title: 'Native Mobile',
        desc: 'Kotlin(Android)과 Swift(iOS)로 네이티브 앱을 개발합니다. KMP로 공통 비즈니스 로직을 관리하며 AOS/iOS 배포를 직접 담당합니다.',
        tags: ['Kotlin', 'Swift', 'KMP', 'Jetpack Compose', 'Android', 'iOS'],
    },
    {
        icon: <StorageIcon sx={{ fontSize: 32 }} />,
        color: '#a8456e',
        title: 'Backend',
        desc: 'Kotlin/Java 기반 API 설계부터 PostgreSQL 최적화, AWS Kubernetes 인프라 운영, GitHub Actions CI/CD 구성까지 담당합니다.',
        tags: ['Kotlin', 'Java', 'PostgreSQL', 'AWS', 'Kubernetes'],
    },
    {
        icon: <AutoAwesomeIcon sx={{ fontSize: 32 }} />,
        color: '#e8a0b0',
        title: 'AI · Automation',
        desc: 'Claude API를 중심으로 Jira·Notion·Figma를 연동한 팀 업무 자동화와, LLM이 잘 읽을 수 있는 문서 파이프라인을 구축합니다.',
        tags: ['Claude API', 'LLM Pipeline', 'Jira API', 'Notion API', 'Figma API'],
    },
];

const Capabilities = () => (
    <Box sx={{ py: 10, px: { xs: 3, md: 10 }, maxWidth: '1100px', margin: 'auto' }}>
        <Typography sx={{ fontSize: '0.75rem', color: '#d4728a', letterSpacing: '3px', mb: 1 }}>
            WHAT I DO
        </Typography>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 6, color: '#1a1a1a' }}>
            전문 영역
        </Typography>

        <Grid container spacing={2.5}>
            {capabilities.map((cap) => (
                <Grid item xs={12} sm={6} key={cap.title}>
                    <Box sx={{
                        p: 3.5,
                        borderRadius: '16px',
                        backgroundColor: '#fff',
                        border: '1.5px solid #f0e8eb',
                        height: '100%',
                        transition: 'border-color 0.25s, box-shadow 0.25s',
                        '&:hover': {
                            borderColor: '#d4728a',
                            boxShadow: '0 4px 20px rgba(212,114,138,0.12)',
                        },
                    }}>
                        <Box sx={{
                            width: 52, height: 52,
                            borderRadius: '12px',
                            backgroundColor: '#fdf0f3',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            mb: 2,
                            color: cap.color,
                        }}>
                            {cap.icon}
                        </Box>
                        <Typography fontWeight="bold" sx={{ mb: 1.2, fontSize: '1rem', color: '#1a1a1a' }}>
                            {cap.title}
                        </Typography>
                        <Typography sx={{ color: '#9ca3af', fontSize: '0.85rem', lineHeight: 1.9, mb: 2.5 }}>
                            {cap.desc}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                            {cap.tags.map(tag => (
                                <Box key={tag} sx={{
                                    px: 1.3, py: 0.4,
                                    backgroundColor: '#fdf0f3',
                                    borderRadius: '6px',
                                    fontSize: '0.72rem',
                                    color: '#d4728a',
                                }}>
                                    {tag}
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Grid>
            ))}
        </Grid>
    </Box>
);

export default Capabilities;
