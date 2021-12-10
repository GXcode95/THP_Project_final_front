import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router'
const LoginButton = () => {
  const navigate = useNavigate()

  return (
    <Button 
      variant="outlined"
      color="secondary"
      id="fade-button"
      className="login-button"
      onClick={e => navigate('/connexion')}
      sx={{ml: "1.2em"}}
    >
        Login
    </Button>
  )
}
    
export default LoginButton