import VoicemailIcon from '@mui/icons-material/Voicemail';
import CallMissedIcon from '@mui/icons-material/CallMissed';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';

const CallIcon = ({ call_type, direction }) => {
  switch(call_type){
    case "missed":
      return direction === "outbound" ? <CallMissedOutgoingIcon/> : <CallMissedIcon/>;
    case "answered":
      return direction === "outbound" ? <CallMadeIcon/> : <CallReceivedIcon/>;
    case "voicemail":
      return <VoicemailIcon/>;
  }
  return <></>;
};

export default CallIcon;