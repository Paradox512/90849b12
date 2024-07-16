import Card from '@mui/material/Card';

const Call = ({ id }) => {

  return (
    <div className='container'>
      <Card>{id}</Card>
    </div>
  );
};

export default Call;