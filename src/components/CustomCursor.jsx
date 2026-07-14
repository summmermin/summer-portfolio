import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const update = (e) => setPosition({ x: e.clientX, y: e.clientY });
        window.addEventListener('mousemove', update);
        return () => window.removeEventListener('mousemove', update);
    }, []);

    return (
        <Box sx={{
            position: 'fixed',
            top: 0, left: 0,
            width: '18px', height: '18px',
            backgroundColor: 'rgba(212, 114, 138, 0.65)',
            borderRadius: '50%',
            pointerEvents: 'none',
            transform: `translate(${position.x - 9}px, ${position.y - 9}px)`,
            transition: 'transform 0.1s ease-out',
            zIndex: 9999,
        }} />
    );
};

export default CustomCursor;
