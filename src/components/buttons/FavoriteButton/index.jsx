import React from 'react';
import APIManager from 'services/Api';
import isSigned from 'helpers/isSigned'
import { useDispatch } from 'react-redux';
import { setSnackbar } from 'store/snackbar/actions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';

const FavoriteButton = ({ gameID, userReducer }) => {
  const dispatch = useDispatch()
  const isFavInit = userReducer.favorites.find(game => game.id === gameID) ? true : false
  const [isFav, setIsFav] = React.useState(isFavInit)

  const handleFavorite = async (e) => {
    const response = isFav ?
      await APIManager.deleteFavorite(gameID) :
      await APIManager.createFavorite(gameID, userReducer.user_info.id)
    if (response.errors) {
      dispatch(setSnackbar(true, "error", response.errors))
    } else {
      setIsFav(!isFav)
      isFav ?
        dispatch(setSnackbar(true, "success", "Le jeu a bien été retiré de vos favoris"))
        :
        dispatch(setSnackbar(true, "success", "Le jeu a bien été ajouté à vos favoris"))
    }
  }

  React.useEffect(
    () => {
      if (isSigned(userReducer) && userReducer.favorites && userReducer.favorites.find(game => game.id === gameID))
        setIsFav(true)
    }
    ,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return (
    <>
      {isSigned(userReducer) &&
        <IconButton aria-label="favorite" onClick={handleFavorite}>
          {isFav ?
            <FavoriteIcon color="error" /> :
            <FavoriteBorderTwoToneIcon />
          }
        </IconButton>
      }
    </>
  );
};

export default FavoriteButton;