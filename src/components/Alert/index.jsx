import React from 'react'
import {Box, Typography} from '@mui/material'
import CloseButton from 'components/buttons/CloseButton'

const Alert = ({message, type="main"}) => {

  const handleClick = () => {
    let messages = document.querySelectorAll('.alert-message')
    const message = messages[messages.length-1]
    message.remove()
  }

  return (
    <Box 
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width:"100%",
        bgcolor: `alert.${type}`,
        display:"flex",
        alignItems: "center",
        transition: "1s",
      }} 
      className="alert-message"
    >
        <Typography vaiant="p" paddingLeft="5%" align="center" width="95%">
          {message}
        </Typography>
      <CloseButton sx={{width:"5%"}} onClick={handleClick}/>
    </Box>
  )
}
    
export default Alert
