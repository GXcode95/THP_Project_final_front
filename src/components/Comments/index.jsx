import React from 'react'
import { Grid,  Typography} from '@mui/material'
import CommentCard from './CommentCard'
import CommentForm from './CommentForm'
import APIManager from 'services/Api'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import isSigned from 'helpers/isSigned'
import { setSnackbar } from 'store/snackbar/actions';

const Comments = ({comments, game, setGame}) => {
  const userReducer = useSelector(state => state.userReducer)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmitCreate = async (e) => {
    e.preventDefault()
    if (!isSigned(userReducer)) navigate('/connexion')

    const content = e.target.content.value
    const response = await APIManager.createComment(game.id, content)
    if(response.error){
      dispatch(setSnackbar(true, "error", "response.error"))
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
          <CommentCard comment={comment} setGame={setGame} user={userReducer} />
        </Grid>
      ))}
    </Grid>
  )
}
    
export default Comments
