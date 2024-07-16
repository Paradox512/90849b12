import React, { useEffect, useState } from 'react';
import CallList from './CallsList.jsx';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { getAllCalls, resetAllCalls } from './helpers.js';

const CallsViewer = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    async function fetchData(){
      try {
        const response = await getAllCalls();
        setCalls(response);
      } catch(error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {

  }, [activeTab]);

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
    >
      <Grid item>
        <Tabs
          value={activeTab}
          onChange={(_, newValue) => setActiveTab(newValue)}
        >
          <Tab value="all" label="All Calls" />
          <Tab value="archived" label="Archived Calls" />
        </Tabs>
      </Grid>
      <Grid item>
        <CallList calls={calls.filter((call) => (activeTab==="all") === !call.is_archived)}/>
      </Grid>
    </Grid>
  );
};

export default CallsViewer;
