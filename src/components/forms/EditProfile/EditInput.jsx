import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserUpdateSuccess, fetchUserRequest, fetchUserError } from 'store/users/actions';
import APIManager from 'services/Api';
import { Grid, Box, Button } from '@mui/material';

const EditInputGrid = (props) => {
  const dispatch = useDispatch()
  const user = useSelector( state => state.userReducer.user_info )
  const handleSubmit = async (event) => {
    event.preventDefault();
    const targetInput =  event.target.parentElement.querySelector(".MuiInputBase-input")
    const infoToUpdate = {}
    infoToUpdate[targetInput.name] = targetInput.value
    dispatch(fetchUserRequest())
    const response = await APIManager.updateUserInfo(user.id, infoToUpdate)
    if (response.error) {
      dispatch(fetchUserError(response.error))
    } else {
      dispatch(fetchUserUpdateSuccess(response.user_info))
    }
  };

  return (
    <Grid container display="flex" alignItems="center" flexDirection="column">
        {Object.values(props).map( (component,i) =>
            (
              <Box key={i} component="form" noValidate sx={{ mt: 1 }} >
                <Grid item xs={12} sx={{display: 'flex', gap:"10px", alignItems: 'center'}}>
                  {component}
                  <Button type="submit" onClick={handleSubmit} variant="outlined">Edit</Button>
                </Grid>
              </Box>
            )
          )}
    </Grid>
  );
};

export default EditInputGrid;