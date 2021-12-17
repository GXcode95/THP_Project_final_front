import React from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteButton = (props) => {
  return (
    <IconButton {...props}>
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteButton;