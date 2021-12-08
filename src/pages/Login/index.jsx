import React from 'react'
import SignIn from 'components/forms/SignIn'
import SignUp from 'components/forms/SignUp'
import {Button, Box} from '@mui/material'
const Login = () => {
  const [isRegistered, setIsRegistered] = React.useState(true)

  const toggleIsRegistered = () => {
    setIsRegistered(!isRegistered)
  }
  return (
    <div className=''>
      {isRegistered ? <SignIn /> : <SignUp /> }

      <Box display="flex" flexDirection="column">
        <Button 
          variant="text"
          onClick={toggleIsRegistered}
        >
          {isRegistered ? "S'inscrire" : "Deja inscrit ?"} 
        </Button>
        <Button variant="text">
            Mot de passe oublié? 
        </Button>
      </Box>
    </div>
  )
}
    
export default Login
