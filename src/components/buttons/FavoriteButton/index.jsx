import React from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import APIManager from 'services/Api';
import isSigned from 'helpers/isSigned'
import { useDispatch } from 'react-redux';
import { fetchUserRequest, fetchUserError, fetchUpdateFavoriteSuccess } from 'store/users/actions';

const FavoriteButton = ({ gameID, userReducer }) => {

  const [isFav, setIsFav] = React.useState(false)
  const dispatch = useDispatch()

  const handleFavorite = async (e) => {

    dispatch(fetchUserRequest())
    const response = isFav ?
      await APIManager.deleteFavorite(gameID) :
      await APIManager.createFavorite(gameID, userReducer.user_info.id)
    if (response.error)
      dispatch(fetchUserError(response.error))
    else {
      dispatch(fetchUpdateFavoriteSuccess(response))
      setIsFav(!isFav)
    }
  }

  React.useEffect(
    () => {
      console.log("READUCER => ",userReducer)
      if (isSigned(userReducer) && userReducer.favorites && userReducer.favorites.find(game => game.id === gameID))
        setIsFav(true)
    }, [userReducer, gameID]
  )

  return (
    <>
      {console.log('FAVORIS', userReducer.favorites)}
      {isSigned(userReducer) &&
        <IconButton aria-label="favorite" onClick={handleFavorite}>
          {isFav ?
            <FavoriteIcon /> :
            <FavoriteBorderTwoToneIcon />
          }
        </IconButton>}
    </>
  );
};

export default FavoriteButton;