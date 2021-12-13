import React from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'
const CloseButton = (props) => {

  return (
    <IconButton {...props}>
      <CloseIcon fontSize={props.fontSize}/>
    </IconButton>
  );
};

export default CloseButton;