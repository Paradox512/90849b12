import { createTheme } from '@mui/material/styles';

const commonSettings = {
  typography: {
    fontFamily: 'Rubik',
    body2: {
      fontSize: '0.8rem',
      alignContent: 'center'
    },
  }
};

export const darkTheme = createTheme({
  ...commonSettings,
  palette: {
    mode: 'dark',
    primary: {
      main: '#f06400',
    },
    secondary: {
      main: '#008cf0',
    },
    divider: '#757575',
    logo: '#bdbdbd'
  }
});

export const lightTheme = createTheme({
  ...commonSettings,
  palette: {
    divider: '#9e9e9e',
    logo: '#424242'
  }
});