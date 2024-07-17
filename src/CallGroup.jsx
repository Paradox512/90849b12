import Call from "./Call.jsx";
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import { Fragment } from "react";

const CallGroup = ({calls, onChangeArchiveStatus}) => {
  return (
    <List
      sx={{
        p: 0,
        borderRadius: "15px",
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      {calls.map((call, index) => 
        <Fragment key={call.id}>
          <Call
            onChangeArchiveStatus={onChangeArchiveStatus}
            {...call}
          />
          {index+1 !== calls.length && <Divider component="li" />}
        </Fragment>
      )}
    </List>
  );
};

export default CallGroup;