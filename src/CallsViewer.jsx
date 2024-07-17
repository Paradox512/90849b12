import React, { useEffect, useState } from 'react';
import CallList from './CallsList.jsx';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { getAllCalls, updateCallById } from './helpers.js';
import { Stack } from '@mui/material';
import ArchiveUnarchiveAllButton from './ArchiveUnarchiveAllButton.jsx';

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

  const changeArchiveStatus = (callId) => {
    setCalls((current_calls) =>
      current_calls.map((call) => {
        if(call.id !== callId) return call;
        return {...call, is_archived: !call.is_archived};
      })
    );
  };

  const changeAllArchiveStatus = async () => {
    const promises = calls.map((call) => updateCallById(call.id, !call.is_archived));
    await Promise.all(promises);
    setCalls((current_calls) => 
      current_calls.map((call) => {
        return {
          ...call,
          is_archived: !call.is_archived
        };
      })
    );
  };

  return (
    <Stack
      spacing={2}
      direction="column"
      alignItems="center"
      sx={{ width: 400 }}
    >
      <Stack direction="row" justifyContent="space-between" sx={{ width: "100%" }}>
        <Tabs
          value={activeTab}
          onChange={(_, newValue) => setActiveTab(newValue)}
        >
          <Tab value="all" label="All" />
          <Tab value="archived" label="Archived" />
        </Tabs>
        <ArchiveUnarchiveAllButton
          is_archived={activeTab==="archived"}
          onClick={changeAllArchiveStatus}
        />
      </Stack>
      <CallList
        calls={calls.filter((call) => (activeTab==="all") === !call.is_archived)}
        onChangeArchiveStatus={changeArchiveStatus}
      />
    </Stack>
  );
};

export default CallsViewer;
