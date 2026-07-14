import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import Header from '../layout/Header';
import TypingText from '../components/TypingText';
import Capabilities from '../components/Capabilities';
import ExperienceTabs from '../components/ExperienceTabs';
import ProjectsGallery from '../components/ProjectsGallery';

const SectionLabel = ({ children }) => (
    <Typography sx={{ fontSize: '0.72rem', color: '#d4728a', letterSpacing: '3px', mb: 1 }}>
        {children}
    </Typography>
);

const Home = () => {
    const profileRef = useRef(null);
    const projectsRef = useRef(null);

    const scrollToSection = (index) => {
        if (index === 0) window.scrollTo({ top: 0, behavior: 'smooth' });
        if (index === 1) profileRef.current?.scrollIntoView({ behavior: 'smooth' });
        if (index === 2) projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Box sx={{ width: '100%', overflow: 'hidden' }}>
            <Header onNavigate={scrollToSection} />

            {/* 히어로 */}
            <TypingText />

            {/* Capabilities */}
            <Box sx={{ backgroundColor: '#fafafa', borderTop: '1px solid #f5f0f2', borderBottom: '1px solid #f5f0f2' }}>
                <Capabilities />
            </Box>

            {/* 프로필 */}
            <Box
                ref={profileRef}
                sx={{ py: 12, px: { xs: 3, sm: 6, md: 12 }, maxWidth: '1100px', margin: 'auto' }}
            >
                <SectionLabel>ABOUT</SectionLabel>
                <Typography variant="h4" fontWeight="bold" sx={{ mb: 8, color: '#1a1a1a' }}>
                    프로필
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: { xs: 5, md: 8 },
                    alignItems: 'flex-start',
                }}>
                    {/* 프로필 이미지 */}
                    <Box sx={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                        <Box
                            component="img"
                            src={`${process.env.PUBLIC_URL}/imgs/summer.png`}
                            alt="Profile"
                            sx={{
                                width: 160,
                                height: 160,
                                objectFit: 'cover',
                                boxShadow: '0 4px 20px rgba(212,114,138,0.2)',
                            }}
                        />
                        <Typography sx={{ fontSize: '1rem', fontWeight: 'bold', color: '#1a1a1a' }}>
                            김민정
                        </Typography>
                        <Typography sx={{ fontSize: '0.8rem', color: '#d4728a' }}>
                            Software Developer
                        </Typography>
                    </Box>

                    {/* 경력/스킬 탭 */}
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                        <ExperienceTabs />
                    </Box>
                </Box>
            </Box>

            {/* 프로젝트 */}
            <Box
                ref={projectsRef}
                id="projects-section"
                sx={{ backgroundColor: '#fafafa', borderTop: '1px solid #f5f0f2', py: 12, px: { xs: 3, sm: 6, md: 12 } }}
            >
                <Box sx={{ maxWidth: '1100px', margin: 'auto' }}>
                    <SectionLabel>PROJECTS</SectionLabel>
                    <Typography variant="h4" fontWeight="bold" sx={{ mb: 8, color: '#1a1a1a' }}>
                        프로젝트
                    </Typography>
                    <ProjectsGallery />
                </Box>
            </Box>

            {/* 푸터 */}
            <Box sx={{
                py: 5, textAlign: 'center',
                borderTop: '1px solid #f5f0f2',
                backgroundColor: '#fff',
            }}>
                <Typography sx={{ fontSize: '0.78rem', color: '#d4c0c5' }}>
                    © 2026 김민정 · Built with React
                </Typography>
            </Box>
        </Box>
    );
};

export default Home;
