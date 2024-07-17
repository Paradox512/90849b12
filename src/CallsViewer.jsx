import React, { useEffect, useState } from 'react';
import CallList from './CallsList.jsx';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { getAllCalls } from './helpers.js';
import { Stack } from '@mui/material';

const CallsViewer = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    async function fetchData(){
      try {
        const response = await getAllCalls();
        response.sort((a, b) => {
          const time_a = new Date(a.created_at).getTime();
          const time_b = new Date(b.created_at).getTime();
          if(time_a > time_b) return -1;
          else if(time_a < time_b) return 1;
          return 0;
        });
        setCalls(response);
      } catch(error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Stack
      spacing={2}
      direction="column"
      alignItems="center"
      sx={{ width: 350 }}
    >
      <Tabs
        value={activeTab}
        onChange={(_, newValue) => setActiveTab(newValue)}
      >
        <Tab value="all" label="All Calls" />
        <Tab value="archived" label="Archived Calls" />
      </Tabs>
      <CallList calls={calls.filter((call) => (activeTab==="all") === !call.is_archived)}/>
    </Stack>
  );
};

export default CallsViewer;
