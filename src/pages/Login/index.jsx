import React from 'react'
import SignIn from 'components/forms/SignIn'
import SignUp from 'components/forms/SignUp'
import {Button, Box,Typography} from '@mui/material'
import Cookies from 'js-cookie'

const Login = () => {
  const [isRegistered, setIsRegistered] = React.useState(true)

  const toggleIsRegistered = () => {
    setIsRegistered(!isRegistered)
  }
  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      justifyContent="space-evenly"
      minHeight="90vh"
      pb="3em"
    >
      <Typography variant="h2" color="primary" align="center" >
        {isRegistered ? "Se connecter" : "S'inscrire"}
      </Typography>

      {isRegistered ? <SignIn /> : <SignUp /> }
      
      <Box display="flex" flexDirection="column">
        
        <Button variant="text" onClick={toggleIsRegistered}>
          {isRegistered ? "S'inscrire" : "Deja inscrit ?"} 
        </Button>
        
        <Button variant="text">
            Mot de passe oublié? 
        </Button>
      </Box>
{console.log(Cookies.get('token'))}
    </Box>
  )
}
    
export default Login
