import React from 'react';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';

const Header = ({ onNavigate }) => (
    <AppBar position="fixed" elevation={0} sx={{
        background: 'rgba(255,255,255,0.88)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid #f0e8eb',
    }}>
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 3, md: 8 } }}>
            <Typography
                onClick={() => onNavigate(0)}
                sx={{
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '1.15rem',
                    color: '#d4728a',
                    letterSpacing: '1px',
                }}
            >
                MJ.
            </Typography>
            <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
                {[['PROFILE', 1], ['PROJECTS', 2]].map(([label, idx]) => (
                    <Button key={label} onClick={() => onNavigate(idx)} sx={{
                        color: '#6b7280',
                        fontSize: '0.8rem',
                        letterSpacing: '1.5px',
                        '&:hover': { color: '#d4728a', backgroundColor: 'transparent' },
                    }}>
                        {label}
                    </Button>
                ))}
                <Button
                    onClick={() => window.open(`${process.env.PUBLIC_URL}/pdf/resume_250805.pdf`, '_blank')}
                    variant="outlined"
                    size="small"
                    sx={{
                        ml: 1,
                        borderColor: '#d4728a',
                        color: '#d4728a',
                        fontSize: '0.75rem',
                        letterSpacing: '1px',
                        '&:hover': { backgroundColor: '#fdf0f3', borderColor: '#d4728a' },
                    }}
                >
                    RESUME
                </Button>
            </Box>
        </Toolbar>
    </AppBar>
);

export default Header;
