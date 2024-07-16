import { useEffect, useState } from "react";
import { getAllCalls } from "./helpers";
import Call from "./Call.jsx";
import Stack from '@mui/material/Stack';

const CallList = ({calls}) => {
  return (
    <Stack
      spacing={2}
      alignItems="stretch"
    >
      {calls.map((call) => (
        <Call key={call.id} {...call}/>
      ))}
    </Stack>
  );
};

export default CallList;