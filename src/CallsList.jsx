import { useEffect, useState } from "react";
import { getAllCalls } from "./helpers";
import Call from "./Call.jsx";
import Stack from '@mui/material/Stack';

const CallList = () => {
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

  return (
    <Stack spacing={2}>
      {calls.map((call) => (
        <Call key={call.id} {...call}/>
      ))}
    </Stack>
  );
};

export default CallList;