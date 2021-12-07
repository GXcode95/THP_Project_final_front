import { FETCH_USER_REQUEST } from 'store/users/types.js'
import {
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_ERROR,
  FETCH_GAMES_SUCCESS
} from './types.js'

const initialState = {
  loading: false,
  games: {},
  error: ''
}

const gamesReducer = (state = initialState, action) => {
  switch(action.types) {
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
      return {
        ...state,
        loading: false,
        games: action.games
      }
  }
}

export default gamesReducer