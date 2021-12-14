import React from 'react'
import { Box, Button, TextField } from '@mui/material'

const CommentForm = ({ comment, minRows, handleSubmit }) => {

  return (
    <Box component="form" display="flex" alignItems="end" flexDirection="column" gap={2} onSubmit={handleSubmit}>
      <TextField multiline name="content" fullWidth defaultValue={comment && comment.content} minRows={minRows} />
      <Button type="submit" >Valider</Button>
    </Box>
  )
}

export default CommentForm