// import Cookies from 'js-cookie'
import {
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_ERROR,
  FETCH_GAMES_SUCCESS
} from './types.js'

const initialState = {
  loading: false,
  games: [],
  error: ''
}

const gamesReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_GAMES_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_GAMES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case FETCH_GAMES_SUCCESS:
      // Cookies.set('games', action.games)
      return {
        ...state,
        loading: false,
        games: action.games
      }
    default: 
      return state
  }
}

export default gamesReducer