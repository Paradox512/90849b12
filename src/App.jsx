import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import CallList from './CallsList.jsx';
import Grid from '@mui/material/Grid';

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
        <CallList/>
      </Grid>
    </Grid>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
