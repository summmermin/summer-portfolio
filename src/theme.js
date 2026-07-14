import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: { main: '#d4728a', dark: '#b5566e', light: '#e8a0b0' },
        background: { default: '#ffffff', paper: '#ffffff' },
        text: { primary: '#1a1a1a', secondary: '#6b7280' },
        divider: '#ececec',
    },
    typography: {
        fontFamily: 'GmarketSansMedium, sans-serif',
    },
});

export default theme;
