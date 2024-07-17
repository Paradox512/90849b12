import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import Header from './Header.jsx';
import Grid from '@mui/material/Grid';
import CallsViewer from './CallsViewer.jsx';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import { Stack } from '@mui/material';
import { darkTheme, lightTheme } from './theme.js';
import ThemeToggleSwitch from './ThemeToggleSwitch.jsx';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleDarkTheme = () => {
    setIsDarkTheme((current) => !current);
  };

  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          sx={{ paddingTop: 2 }}
        >
          <Grid item>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ width: 450 }}
            >
              <Header/>
              <ThemeToggleSwitch checked={isDarkTheme} onChange={toggleDarkTheme}/>
            </Stack>
          </Grid>
          <Grid item>
            <CallsViewer/>
          </Grid>
        </Grid>
      
    </ThemeProvider>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App/>);

export default App;
