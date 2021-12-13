import React from 'react'
import EmailInput from '../input/EmailInput'
import APIManager from 'services/Api'
import {Button, Box, Typography, Card} from '@mui/material' 
import CloseButton from 'components/buttons/CloseButton'

const PasswordReset = ({togglePasswordReset}) => {
  const [email, setEmail] = React.useState()
  
  const handlePasswordRequest = async() => {
    const response = await APIManager.changePasswordRequest(email)
    response.error ? alert("message envoyé") : alert("une erreur est survenue")
    setEmail(null)
    togglePasswordReset()
  }
  return (
    <Box position="absolute" sx={{
      top: 0,
      left: 0,
      ml: "auto",
      mr: "auto",
      height: "100%",
      width: "100%",
      display:"flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: "5"
    }}>
      <Card 
        maxWidth="300px" 
        elevation={12} 
        sx={{
          border: "1px solid",
          borderColor: "primary.main"
        }}
      >

        <CloseButton onClick={togglePasswordReset} />
      
        <Typography variant="body" component="p" maxWidth='400px' align="center" >
          Veuillez renseignez votre email, si il est valide nous 
          vous enverrons un lien de récupération de mot de passe.
        </Typography>
      
        <Box width="80%" ml="10%">
          <EmailInput onChange={e => setEmail(e.target.value)} />
        </Box>
      
        <Box display="flex" justifyContent="center" my="1em">
          <Button onClick={handlePasswordRequest}>
            Valider
          </Button>
        </Box>
      </Card>
    </Box>
  )
}
    
export default PasswordReset
