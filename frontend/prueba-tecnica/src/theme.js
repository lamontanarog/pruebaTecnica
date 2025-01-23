import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
      violet: '#f0f0f0',
      aquaBlue: '#e0e5e6',
    },
  },
  typography: {
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: '1.1rem',
      lineHeight: 1.5,
      color: '#666',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '2px',
          textTransform: 'none',
          padding: '8px 24px',
        },
        contained: {
          backgroundColor: '#000',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#333',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          boxShadow: 'none',
        },
      },
    },
  },
});
