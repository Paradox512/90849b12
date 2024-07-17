import CallIcon from './CallIcon.jsx';
import Stack from '@mui/material/Stack';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const Call = ({ id, created_at, from, to, call_type }) => {

  const getTimeOfDay = (date) => {
    let hour = date.getHours();
    let minute = date.getMinutes();
    let ampm = "AM";
    if(hour > 12){
      hour -= 12;
      ampm = "PM";
    }

    let formatted = `${hour}:`;
    if(minute < 10) formatted += "0";
    formatted += `${minute} ${ampm}`

    return formatted;
  }

  const formatPhoneNumber = (number) => {
    number = number.toString();
    const length = number.length;
    if(length < 10) return number;
    let format = `${number.substring(length-4)}`;
    format = `${number.substring(length-4-3, length-4)} ${format}`;
    format = `(${number.substring(length-4-3-3, length-4-3)}) ${format}`;
    if(length > 10) {
      format = `+${number.substring(0, length-10)} ${format}`;
    }
    return format;
  };

  const call_time = new Date(created_at);

  return (
    <ListItem sx={{ p: 0 }}>
      <ListItemButton>
        <Stack
          sx={{ width: "100%" }}
          direction="row"
          justifyContent="space-between"
        >
          <ListItemIcon><CallIcon call_type={call_type}/></ListItemIcon>
          <ListItemText primary={formatPhoneNumber(to)}/>
          <ListItemText primary={getTimeOfDay(call_time)}/>
        </Stack>
      </ListItemButton>
    </ListItem>
  );
};

export default Call;