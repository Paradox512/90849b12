import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ArchiveIcon from '@mui/icons-material/Archive';
import Unarchive from '@mui/icons-material/Unarchive';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';

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

  return (
    <Box sx={{ m:1, position: "relative" }}>
      <Button
        variant="outlined"
        startIcon={icon}
        onClick={handleOnClick}
        disabled={isLoading}
      >
        {text}
      </Button>
      {isLoading &&
        <CircularProgress
          size={20}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: "-10px",
            marginLeft: "-10px"
          }}
        />
      }
    </Box>
  );
};

export default ArchiveUnarchiveAllButton;
