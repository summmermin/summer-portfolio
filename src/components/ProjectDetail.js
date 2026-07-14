import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Card, CardContent, Divider } from '@mui/material';

const projects = [
    { id: 1, title: '챗봇 프로그램 PoC (Google Dialogflow 활용)', image: '/imgs/chatbot.png', description: `소속: 클로봇\n\n기간: 2024.04 ~ 2024.08\n\n역할: 풀스택 개발 (프론트엔드 & 백엔드 개발)\n\n---\n\n프로젝트 설명\n박물관 방문객을 위한 AI 챗봇 프로그램의 개념 검증(POC) 단계.\n\n기존에는 외주업체를 통해 챗봇을 운영했으나, 직접 개발하여 비용 절감 및 맞춤형 기능 구현을 목표로 함.\n\n---\n\n주요 업무\n- 초기 챗봇 시스템 설계 및 개발: Google Dialogflow ES 활용\n- Firebase Functions 기반 백엔드 구축: 데이터 저장 및 챗봇 응답 처리\n- Google Apps Scripts 활용: 스프레드시트를 통한 데이터 관리 및 연동\n- 챗봇 UI 개발: Vue.js + TypeScript를 활용한 기본 사용자 인터페이스 구축\n\n---\n\n개발 스택\n- 프론트엔드: Vue.js, TypeScript, SCSS, Pinia\n- 백엔드: Firebase Functions\n- 기타: Google Dialogflow, Google Spreadsheet` },
    { id: 2, title: '프로젝트 B', image: '/imgs/curating.png', description: 'B 프로젝트 설명' },
    { id: 3, title: '프로젝트 C', image: '/imgs/lions.png', description: 'C 프로젝트 설명' },
    { id: 4, title: '프로젝트 D', image: '/imgs/delivery.png', description: 'D 프로젝트 설명' },
    { id: 5, title: '프로젝트 E', image: '/imgs/curating.png', description: 'E 프로젝트 설명' },
    { id: 6, title: '프로젝트 F', image: '/imgs/curating.png', description: 'F 프로젝트 설명' },
];

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) {
        return <Typography variant="h5" color="error">프로젝트를 찾을 수 없습니다.</Typography>;
    }

    return (
        <Box sx={{ textAlign: 'left', padding: 4, maxWidth: 800, margin: 'auto' }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>{project.title}</Typography>
            <Card sx={{ padding: 3, boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                    <Typography variant="subtitle1" fontWeight="bold">소속</Typography>
                    <Typography variant="body1" gutterBottom>{project.description.split('\n\n')[0]}</Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="subtitle1" fontWeight="bold">기간</Typography>
                    <Typography variant="body1" gutterBottom>{project.description.split('\n\n')[1]}</Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="subtitle1" fontWeight="bold">역할</Typography>
                    <Typography variant="body1" gutterBottom>{project.description.split('\n\n')[2]}</Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="subtitle1" fontWeight="bold">프로젝트 설명</Typography>
                    <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>{project.description.split('---')[1]}</Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="subtitle1" fontWeight="bold">주요 업무</Typography>
                    <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>{project.description.split('---')[2]}</Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="subtitle1" fontWeight="bold">개발 스택</Typography>
                    <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>{project.description.split('---')[3]}</Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ProjectDetail;