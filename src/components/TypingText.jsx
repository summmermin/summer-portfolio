import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Chip } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const roles = ['풀스택 개발자', '모바일 개발자', 'AI 자동화 엔지니어'];

const TypingText = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const speed = isDeleting ? 60 : 110;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                if (charIndex < currentRole.length) {
                    setDisplayText(currentRole.slice(0, charIndex + 1));
                    setCharIndex(c => c + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (charIndex > 0) {
                    setDisplayText(currentRole.slice(0, charIndex - 1));
                    setCharIndex(c => c - 1);
                } else {
                    setIsDeleting(false);
                    setRoleIndex(i => (i + 1) % roles.length);
                }
            }
        }, speed);

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, roleIndex]);

    const scrollToProjects = () =>
        document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });

    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            px: { xs: 3, sm: 6, md: 12 },
            position: 'relative',
            backgroundColor: '#fff',
        }}>
            {/* 배경 장식 */}
            <Box sx={{
                position: 'absolute', top: '-10%', right: '-5%',
                width: { xs: '300px', md: '500px' },
                height: { xs: '300px', md: '500px' },
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(212,114,138,0.1) 0%, transparent 65%)',
                pointerEvents: 'none',
            }} />
            <Box sx={{
                position: 'absolute', bottom: '5%', left: '-8%',
                width: '350px', height: '350px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(212,114,138,0.07) 0%, transparent 65%)',
                pointerEvents: 'none',
            }} />

            <Box sx={{
                width: '100%',
                maxWidth: '1100px',
                margin: 'auto',
                display: 'flex',
                flexDirection: { xs: 'column-reverse', md: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: { xs: 5, md: 8 },
            }}>
                {/* 텍스트 영역 */}
                <Box sx={{ flex: 1 }}>
                    {/* 도메인 칩 */}
                    <Box sx={{ display: 'flex', gap: 1, mb: 4, flexWrap: 'wrap' }}>
                        {['Web · Frontend', 'Native Mobile', 'Backend', 'AI · Automation'].map(d => (
                            <Chip key={d} label={d} size="small" sx={{
                                backgroundColor: '#fdf0f3',
                                color: '#d4728a',
                                border: '1px solid #f0c4cf',
                                fontSize: '0.72rem',
                                letterSpacing: '0.5px',
                            }} />
                        ))}
                    </Box>

                    {/* 이름 */}
                    <Typography sx={{
                        fontSize: { xs: '3rem', sm: '4rem', md: '5.2rem' },
                        fontWeight: 'bold',
                        lineHeight: 1.05,
                        color: '#1a1a1a',
                        mb: 1.5,
                    }}>
                        김민정
                    </Typography>

                    {/* 타이핑 역할 */}
                    <Box sx={{ height: { xs: '2.2rem', md: '2.6rem' }, mb: 3, display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{
                            fontSize: { xs: '1.1rem', md: '1.45rem' },
                            color: '#d4728a',
                            fontWeight: 'bold',
                        }}>
                            {displayText}
                            <span style={{ opacity: 0.5 }}>|</span>
                        </Typography>
                    </Box>

                    {/* 태그라인 */}
                    <Typography sx={{
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        color: '#9ca3af',
                        lineHeight: 2,
                        mb: 5,
                        maxWidth: '440px',
                    }}>
                        방향을 함께 고민하고, 코드로 실현합니다.
                        <br />
                        기획부터 배포까지, 제품의 전 과정을 함께합니다.
                    </Typography>

                    {/* CTA 버튼 */}
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button
                            variant="contained"
                            href={`${process.env.PUBLIC_URL}/pdf/resume_250805.pdf`}
                            target="_blank"
                            sx={{
                                backgroundColor: '#d4728a',
                                px: 3.5, py: 1.2,
                                fontSize: '0.88rem',
                                boxShadow: '0 4px 20px rgba(212,114,138,0.35)',
                                '&:hover': { backgroundColor: '#b5566e', boxShadow: '0 4px 24px rgba(212,114,138,0.45)' },
                            }}
                        >
                            이력서 보기
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={scrollToProjects}
                            sx={{
                                borderColor: '#e8c4cc',
                                color: '#d4728a',
                                px: 3.5, py: 1.2,
                                fontSize: '0.88rem',
                                '&:hover': { backgroundColor: '#fdf0f3', borderColor: '#d4728a' },
                            }}
                        >
                            프로젝트 보기
                        </Button>
                    </Box>
                </Box>

                {/* 프로필 사진 */}
                <Box sx={{
                    flexShrink: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignSelf: { xs: 'center', md: 'flex-end' },
                    mt: { xs: 0, md: 8 },
                }}>
                    <Box
                        component="img"
                        src={`${process.env.PUBLIC_URL}/imgs/home.png`}
                        alt="김민정"
                        sx={{
                            width: { xs: 200, sm: 240, md: 460 },
                            height: { xs: 200, sm: 240, md: 'auto' },
                            display: 'block',
                            objectFit: { xs: 'cover', md: 'unset' },
                            objectPosition: { xs: 'top', md: 'unset' },
                            borderRadius: { xs: '50%', md: 0 },
                            border: { xs: '4px solid #f0c4cf', md: 'none' },
                            boxShadow: { xs: '0 4px 20px rgba(212,114,138,0.25)', md: 'none' },
                        }}
                    />
                </Box>
            </Box>

            {/* 스크롤 인디케이터 */}
            <Box sx={{
                position: 'absolute', bottom: 28, left: '50%',
                transform: 'translateX(-50%)',
                animation: 'bounce 2s ease-in-out infinite',
                '@keyframes bounce': {
                    '0%,100%': { transform: 'translateX(-50%) translateY(0)' },
                    '50%': { transform: 'translateX(-50%) translateY(8px)' },
                },
            }}>
                <KeyboardArrowDownIcon sx={{ color: '#d4c0c5', fontSize: 30 }} />
            </Box>
        </Box>
    );
};

export default TypingText;
