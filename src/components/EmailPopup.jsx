import React, { useState } from 'react';
import { Box, Fab, Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';

const EmailPopup = () => {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('');

    // 팝업 열고 닫기
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // 이메일 전송 기능 (예시)
    const handleSendEmail = () => {
        alert(`📨 이메일 전송: ${email}`);
        handleClose();
    };

    return (
        <>
            {/* 오른쪽 아래 플로팅 버튼 */}
            <Box sx={{ position: 'fixed', bottom: 20, right: 20 }}>
                <Fab color="rgba(255, 255, 255, 0.8)" onClick={handleClickOpen}>
                    <EmailIcon />
                </Fab>
            </Box>

            {/* 이메일 입력 팝업 */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>이메일 보내기</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="이메일 주소"
                        type="email"
                        fullWidth
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Box sx={{ textAlign: 'right', marginTop: 2 }}>
                        <Button onClick={handleClose} sx={{ marginRight: 1 }}>취소</Button>
                        <Button variant="contained" endIcon={<SendIcon />} onClick={handleSendEmail}>
                            전송
                        </Button>
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default EmailPopup;
