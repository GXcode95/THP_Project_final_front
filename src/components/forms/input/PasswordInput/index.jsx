import React from 'react'
import { TextField } from '@mui/material';


const PasswordInput = (props) => {

  return (
    <TextField
    margin="normal"
    required
    fullWidth
    label="Mot de passe"
    type="password"
    name="password"
    {...props}
  />
      
    
  )
}
    
export default PasswordInput
