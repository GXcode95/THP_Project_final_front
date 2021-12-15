import React from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import APIManager from 'services/Api';
import isSigned from 'helpers/isSigned'
import { useSelector } from 'react-redux';
import { fetchUserRequest, fetchUserError, fetchUpdateFavoriteSuccess } from 'store/users/actions';

const FavoriteButton = ({ gameID, userReducer }) => {
  const isFavInit = userReducer.favorites.find(game => game.id === gameID)? true : false
  const [isFav, setIsFav] = React.useState(isFavInit)
  const store = useSelector(state => state)
  
  const handleFavorite = async (e) => {
    console.log('store', store)
    const response = isFav ?
      await APIManager.deleteFavorite(gameID) :
      await APIManager.createFavorite(gameID, userReducer.user_info.id)
    !response.errors && setIsFav(!isFav)
  }

  React.useEffect(
    () => {
      if (isSigned(userReducer) && userReducer.favorites && userReducer.favorites.find(game => game.id === gameID))
        setIsFav(true)
    }
    ,
    []
  )

  return (
    <>
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