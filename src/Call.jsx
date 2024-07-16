import Card from '@mui/material/Card';
import CallIcon from './CallIcon.jsx';
import Grid from '@mui/material/Grid';


const Call = ({ id, created_at, to, call_type }) => {

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

  const call_time = new Date(created_at);

  console.log(call_time);

  return (
    <Card>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item><CallIcon call_type={call_type}/></Grid>
        <Grid item>{to}</Grid>
        <Grid item>{getTimeOfDay(call_time)}</Grid>
      </Grid>
    </Card>
  );
};

export default Call;