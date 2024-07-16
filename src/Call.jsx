import Card from '@mui/material/Card';
import CallIcon from './CallIcon.jsx';
import Grid from '@mui/material/Grid';


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
    <Card>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item><CallIcon call_type={call_type}/></Grid>
        <Grid item>{formatPhoneNumber(to)}</Grid>
        <Grid item>{getTimeOfDay(call_time)}</Grid>
      </Grid>
    </Card>
  );
};

export default Call;