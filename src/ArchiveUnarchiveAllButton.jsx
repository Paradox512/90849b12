import React from 'react';
import Button from '@mui/material/Button';
import ArchiveIcon from '@mui/icons-material/Archive';
import Unarchive from '@mui/icons-material/Unarchive';

const ArchiveUnarchiveAllButton = ({ is_archived, onClick }) => {

  let icon = <ArchiveIcon/>;
  let text = "Archive All";

  if(is_archived){
    icon = <Unarchive/>;
    text = "Unarchive All";
  }

  return (
    <Button
      variant="outlined"
      startIcon={icon}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default ArchiveUnarchiveAllButton;
