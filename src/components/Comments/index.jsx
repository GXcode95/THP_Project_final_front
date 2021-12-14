import React from 'react'
import { Grid,  Typography} from '@mui/material'
import CommentCard from './CommentCard'
import CommentForm from './CommentForm'
import APIManager from 'services/Api'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import isSigned from 'helpers/isSigned'

const Comments = ({comments,game, setGame}) => {
  const user = useSelector(state => state.userReducer)
  const navigate = useNavigate()

  const handleSubmitCreate = async (e) => {
    e.preventDefault()
    if (!isSigned(user)) navigate('/connexion')

    const content = e.target.content.value
    const response = await APIManager.createComment(game.id, content)
    if(response.error){
      alert(response.error)
    } else {
      setGame(response)
      e.target.content.value = ""
    }
  }


  return (
    <Grid container spacing={2} >
      <Grid item md={12}>
        <Typography variant="h4" component="p" align="center" pb={2}>
          Ajouter un commentaire
        </Typography>
        <CommentForm minRows={8} handleSubmit={handleSubmitCreate}/>
      </Grid>
      {comments && comments.map(comment => (
        <Grid item md={12} key={comment.id}>
          <CommentCard comment={comment} setGame={setGame} user={user} />
        </Grid>
      ))}
    </Grid>
  )
}
    
export default Comments
