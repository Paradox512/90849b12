import Card from '@mui/material/Card';
import CallIcon from './CallIcon.jsx';

const Call = ({ id, call_type }) => {

  return (
    <div className='container'>
      <Card><CallIcon call_type={call_type}/></Card>
    </div>
  );
};

export default Call;