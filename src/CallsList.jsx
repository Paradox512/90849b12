import Call from "./Call.jsx";
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

const CallList = ({calls}) => {

  let body = [];
  let previous_date = null;

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
      previous_date = call_date
      body.push(<Divider>{call_date.toLocaleDateString("en-US", options)}</Divider>);
    }
    body.push(<Call key={call.id} {...call}/>);
  });

  return (
    <Stack
      spacing={2}
      alignItems="stretch"
    >
      {body}
    </Stack>
  );
};

export default CallList;