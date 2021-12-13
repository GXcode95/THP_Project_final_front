import React from 'react'
import { Box, Grid,  Typography} from '@mui/material'
import CommentCard from './CommentCard'
import CommentForm from './CommentForm'

const Comments = () => {
  const comments = [
    {
      content :" 11111 dqmofk mqskdfm dqsmf ksdqmkf mlsdqmf ksqdkf mlqsdmf ksdmqkfm lqsdmfk mqlsdfm lksqmdkf msdfqk mdkqsfo kopea fznefeaznfn",
      updated_at: "12-12-12",
      created_at: "02-02-12",
      id:1
    },
    {
      content :" 222222 dqmofk mqskdfm dqsmf ksdqmkf mlsdqmf ksqdkf mlqsdmf ksdmqkfm lqsdmfk mqlsdfm lksqmdkf msdfqk mdkqsfo kopea fznefeaznfn",
      updated_at: "12-12-12",
      created_at: "02-02-12",
      id:2
    },
    {
      content :" 33333 dqmofk mqskdfm dqsmf ksdqmkf mlsdqmf ksqdkf mlqsdmf ksdmqkfm lqsdmfk mqlsdfm lksqmdkf msdfqk mdkqsfo kopea fznefeaznfn",
      updated_at: "12-12-12",
      created_at: "02-02-12",
      id:3
    },
    {
      content :" 44444 dqmofk mqskdfm dqsmf ksdqmkf mlsdqmf ksqdkf mlqsdmf ksdmqkfm lqsdmfk mqlsdfm lksqmdkf msdfqk mdkqsfo kopea fznefeaznfn",
      updated_at: "12-12-12",
      created_at: "02-02-12",
      id:4
    },

  ]
  const handleSubmit = (e) => {
    e.preventDefault()
      console.log("ezfjf", e.target.comment.value)
  }
  return (
    <Grid container spacing={2} >
      <Grid item md={12}>
        <Typography variant="h4" component="p" align="center" pb={2}>
          Ajouter un commentaire
        </Typography>
        <CommentForm minRows={8} handleSubmit={handleSubmit}/>
      </Grid>
      {comments.map(comment => (
        <Grid item md={12} key={comment.id}>
          <CommentCard comment={comment} />
        </Grid>
      ))}
    
    </Grid>
  )
}
    
export default Comments
