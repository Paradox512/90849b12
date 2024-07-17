import Call from "./Call.jsx";
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';

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
        <>
          <Call {...call} onChangeArchiveStatus={onChangeArchiveStatus}/>
          {index+1 !== calls.length && <Divider component="li" />}
        </>
      )}
    </List>
  );
};

export default CallGroup;