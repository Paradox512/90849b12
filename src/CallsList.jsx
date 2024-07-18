import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import CallGroup from "./CallGroup.jsx";
import { Typography } from '@mui/material';
import { formateDate, sameDayOfTheYear } from './helpers.js';

const CallList = ({calls, onChangeArchiveStatus}) => {

  let body = [];
  let previous_date = null;
  let group = [];

  calls.forEach((call) => {
    const call_date = new Date(call.created_at);
    
    if(previous_date === null
      || sameDayOfTheYear(previous_date, call_date)
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
            {formateDate(call_date)}
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