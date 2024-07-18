import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import CallGroup from "./CallGroup.jsx";
import { Typography } from '@mui/material';

const CallList = ({calls, onChangeArchiveStatus}) => {

  let body = [];
  let previous_date = null;
  let group = [];

  calls.forEach((call) => {
    const call_date = new Date(call.created_at);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    if(previous_date === null
      || call_date.getDate() !== previous_date.getDate()
      || call_date.getMonth() !== previous_date.getMonth()
      || call_date.getFullYear() !== previous_date.getFullYear()
    ){
      previous_date = call_date;
      if(group.length > 0){
        body.push(
          <CallGroup
            key={body.length}
            calls={group}
            onChangeArchiveStatus={onChangeArchiveStatus}
          />
        );
        group = [];
      }
      body.push(
        <Divider key={body.length}>
          <Typography sx={{color: "divider"}}>
            {call_date.toLocaleDateString("en-US", options)}
          </Typography>
        </Divider>
      );
    }
    group.push(call);
  });

  if(group.length > 0){
    body.push(
      <CallGroup
        key={body.length}
        calls={group}
        onChangeArchiveStatus={onChangeArchiveStatus}
      />
    );
    group = [];
  }

  return (
    <Stack
      spacing={2}
      alignItems="stretch"
      sx={{ width: "100%" }}
    >
      {body.length > 0 && body}
      {body.length === 0 &&
          <Divider>
            <Typography
              variant="body"
              sx={{
                textAlign: "center",
                padding: "10px",
                color: "divider"
              }}
            >
              No calls to display
            </Typography>
          </Divider>
      }
    </Stack>
  );
};

export default CallList;