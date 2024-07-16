import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import VoicemailIcon from '@mui/icons-material/Voicemail';
import PhoneIcon from '@mui/icons-material/Phone';

const CallIcon = ({ call_type }) => {
  switch(call_type){
    case "missed":
      return <PhoneMissedIcon/>;
    case "answered":
      return <PhoneIcon/>;
    case "voicemail":
      return <VoicemailIcon/>;
  }
  return <></>;
};

export default CallIcon;