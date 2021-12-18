import React from 'react';
import { Snackbar, Alert, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { setSnackbar } from 'store/snackbar/actions';

const SendAlert = () => {
  const dispatch = useDispatch()
  const snackbarReducer = useSelector(state => state.snackbarReducer)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(setSnackbar(false, "", ""))
  };

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackbarReducer.SNOpen}
        autoHideDuration={7000}
        onClose={handleClose}
        action={action}
        sx={{ mt: 5 }}
      >
        <Alert onClose={handleClose} severity={snackbarReducer.SNType} sx={{ width: '100%' }}>
          {snackbarReducer.SNMessage}
        </Alert>
      </Snackbar>
    </>
  );
}

export default SendAlert