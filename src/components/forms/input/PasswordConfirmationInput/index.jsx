import React from 'react'
import TextField from '@mui/material/TextField'

const PasswordConfirmationInput = (props) => {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      label="Confirmation mot de passe"
      type="password"
      name="password_confirmation"
      {...props}
    />
  )
}
    
export default PasswordConfirmationInput