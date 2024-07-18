import CallIcon from './CallIcon.jsx';
import Stack from '@mui/material/Stack';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import PhoneIcon from '@mui/icons-material/Phone';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import VideocamIcon from '@mui/icons-material/Videocam';
import ArchiveIcon from '@mui/icons-material/Archive';
import Unarchive from '@mui/icons-material/Unarchive';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import { Box, Collapse, IconButton, Typography } from '@mui/material';
import { updateCallById } from './helpers.js';

const Call = ({ id, created_at, from, to, direction, duration, call_type, is_archived, via, onChangeArchiveStatus }) => {

  const [expanded, setExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  const formatCallDuration = (callDuration) => {
    const seconds = callDuration % 60;
    callDuration = (callDuration - seconds) / 60;
    const minutes = callDuration % 60;
    callDuration = (callDuration - minutes) / 60;
    const hours = callDuration;

    let format = `${seconds} seconds`;
    if(minutes > 0) format = `${minutes} minutes, ${format}`;
    if(hours > 0) format = `${hours} hours, ${format}`;
    return format;
  };

  const changeArchiveStatus = async () => {
    try {
      setIsLoading(true);
      await updateCallById(id, !is_archived);
      onChangeArchiveStatus(id);
      setIsLoading(false);
      setExpanded(false);
    } catch(error) {
      console.error(error);
    }
  };

  const call_time = new Date(created_at);

  return (
    <ListItem
      sx={{
        p: 0,
        width: "100%",
      }}
      onClick={() => setExpanded(!expanded)}
    >
      <ListItemButton>
        <Stack sx={{width: "100%"}}>
          <Stack direction="row" sx={{width: "100%"}} justifyContent="space-between">
            <ListItemIcon><CallIcon call_type={call_type} direction={direction}/></ListItemIcon>
            <Typography variant="body">{formatPhoneNumber(to)}</Typography>
            <Typography variant="body2">{getTimeOfDay(call_time)}</Typography>
          </Stack>
          <Collapse in={expanded}>
            <Stack direction="column" sx={{width: "100%"}} alignItems="center">
            {call_type === "answered" &&
              <Typography variant="body2">
                {(direction === "inbound" ? "Incoming" : "Outgoing") + " call, " + formatCallDuration(duration)}
              </Typography>
            }
            {call_type === "missed" &&
              <Typography variant="body2">Missed call</Typography>
            }
            <Typography variant="body2">From {formatPhoneNumber(from)}</Typography>
            <Typography variant="body2">Via {formatPhoneNumber(via)}</Typography>
            </Stack>
            <Stack direction="row" sx={{width: "100%"}} justifyContent="space-evenly">
              <IconButton disabled><PhoneIcon/></IconButton>
              <IconButton disabled><ChatBubbleIcon/></IconButton>
              <IconButton disabled><VideocamIcon/></IconButton>
                <Box sx={{ m: 1, position: "relative" }}>
                  <IconButton disabled={isLoading} onClick={(e) => { e.stopPropagation(); changeArchiveStatus(); }}>
                   {is_archived ? <Unarchive/> : <ArchiveIcon/>}
                  </IconButton>
                  {isLoading &&
                    <CircularProgress
                      size={32}
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        marginTop: "-16px",
                        marginLeft: "-16px"
                      }}
                    />
                  }
                </Box>
            </Stack>
          </Collapse>
        </Stack>
      </ListItemButton>
    </ListItem>
  );
};

export default Call;