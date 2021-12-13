import React from 'react'
import { Grid } from '@mui/material'
import CommentCard from './CommentCard'

const Comments = () => {
  const comments = [
    {
      content :" 11111 dqmofk mqskdfm dqsmf ksdqmkf mlsdqmf ksqdkf mlqsdmf ksdmqkfm lqsdmfk mqlsdfm lksqmdkf msdfqk mdkqsfo kopea fznefeaznfn",
      updated_at: "12-12-12",
    },
    {
      content :" 222222 dqmofk mqskdfm dqsmf ksdqmkf mlsdqmf ksqdkf mlqsdmf ksdmqkfm lqsdmfk mqlsdfm lksqmdkf msdfqk mdkqsfo kopea fznefeaznfn",
      updated_at: "12-12-12",
    },
    {
      content :" 33333 dqmofk mqskdfm dqsmf ksdqmkf mlsdqmf ksqdkf mlqsdmf ksdmqkfm lqsdmfk mqlsdfm lksqmdkf msdfqk mdkqsfo kopea fznefeaznfn",
      updated_at: "12-12-12",
    },
    {
      content :" 44444 dqmofk mqskdfm dqsmf ksdqmkf mlsdqmf ksqdkf mlqsdmf ksdmqkfm lqsdmfk mqlsdfm lksqmdkf msdfqk mdkqsfo kopea fznefeaznfn",
      updated_at: "12-12-12",
    },
    {
      content :" 55555 dqmofk mqskdfm dqsmf ksdqmkf mlsdqmf ksqdkf mlqsdmf ksdmqkfm lqsdmfk mqlsdfm lksqmdkf msdfqk mdkqsfo kopea fznefeaznfn",
      updated_at: "12-12-12",
    },
    {
      content :" 666666 dqmofk mqskdfm dqsmf ksdqmkf mlsdqmf ksqdkf mlqsdmf ksdmqkfm lqsdmfk mqlsdfm lksqmdkf msdfqk mdkqsfo kopea fznefeaznfn",
      updated_at: "12-12-12",
    },
  ]

  return (
    <Grid container spacing={2} >
      {comments.map(comment => (
        <Grid item md={12}>
          <CommentCard comment={comment} />
        </Grid>
      ))}
    </Grid>
  )
}
    
export default Comments
