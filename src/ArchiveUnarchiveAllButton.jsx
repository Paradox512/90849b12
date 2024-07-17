import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ArchiveIcon from '@mui/icons-material/Archive';
import Unarchive from '@mui/icons-material/Unarchive';
import CircularProgress from '@mui/material/CircularProgress';

const ArchiveUnarchiveAllButton = ({ is_archived, onClick }) => {

  const [isLoading, setIsLoading] = useState(false);

  let icon = <ArchiveIcon/>;
  let text = "Archive All";

  if(is_archived){
    icon = <Unarchive/>;
    text = "Unarchive All";
  }

  const handleOnClick = async () => {
    setIsLoading(true);
    await onClick(!is_archived);
    setIsLoading(false);
  };


  if(isLoading){
    return (
      <Button
        startIcon={<CircularProgress size={20}/>}
        variant="outlined"
        disabled
      >
        {is_archived ? "Unarchiving" : "Archiving"}
      </Button>
    );
  }

  return (
    <Button
      variant="outlined"
      startIcon={icon}
      onClick={handleOnClick}
    >
      {text}
    </Button>
  );
};

export default ArchiveUnarchiveAllButton;
