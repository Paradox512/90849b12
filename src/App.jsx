import React from 'react';
import { createRoot } from 'react-dom/client';

import Header from './Header.jsx';
import Grid from '@mui/material/Grid';
import CallsViewer from './CallsViewer.jsx';

const App = () => {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
    >
      <Grid item>
        <Header/>
      </Grid>
      <Grid item>
        <CallsViewer/>
      </Grid>
    </Grid>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App/>);

export default App;
