import React from 'react'
import { Avatar, Box, Card, Grid, Typography } from '@mui/material'
const CommentCard = ({ comment }) => {
  
  
  return (
      <Card elevation="8" >
    <Grid container sx={{py:"2.5em", px:"0.5em", bgcolor:"grey.300"}}>
      <Grid item md={1} >
        <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="100%">
          <Avatar>A</Avatar>
        </Box>
      </Grid>
      <Grid item md={11}> 
        <Typography variant="p" color="grey.500" display="block" fontSize="0.9rem">
          Crée le {comment.updated_at}
        </Typography>
        <Typography variant="paragraph" fontSize="1.1rem">
          {comment.content}
        </Typography> 
      </Grid>
    </Grid>
      </Card>
  )
}
export default CommentCard