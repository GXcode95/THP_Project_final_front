import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router'
const LoginButton = () => {
  const navigate = useNavigate()

  return (
    <Button 
      variant="contained"
        color="secondary"
        id="fade-button"
        className="login-button"
        onClick={e => navigate('/connexion')}
      >
        Login
    </Button>
  )
}
    
export default LoginButton