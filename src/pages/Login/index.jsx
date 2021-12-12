import React from 'react'
import SignIn from 'components/forms/SignIn'
import SignUp from 'components/forms/SignUp'
import PasswordReset from 'components/forms/PasswordReset'
import {Button, Box,Typography} from '@mui/material'
const Login = () => {
  const [isRegistered, setIsRegistered] = React.useState(true)
  const [passwordReset, setPasswordReset] = React.useState(false)
  const toggleIsRegistered = () => {
    setIsRegistered(!isRegistered)
  }

  const togglePasswordReset = async() => {
    setPasswordReset(!passwordReset)
  }

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      justifyContent="space-evenly"
      minHeight="90vh"
    >
      <Typography variant="h2" color="primary" align="center" >
        {isRegistered ? "Se connecter" : "S'inscrire"}
      </Typography>

      {isRegistered ? <SignIn /> : <SignUp /> }
      
      <Box display="flex" flexDirection="column">
        
        <Button variant="text" onClick={toggleIsRegistered}>
          {isRegistered ? "S'inscrire" : "Deja inscrit ?"} 
        </Button>
        
        <Button variant="text" onClick={togglePasswordReset}>
            Mot de passe oublié ?
        </Button>
      </Box>
      {passwordReset && <PasswordReset togglePasswordReset={togglePasswordReset}/>}
    </Box>
  )
}
    
export default Login
