import { FETCH_USER_REQUEST } from 'store/users/types.js'
import {
  FETCH_GAME_REQUEST,
  FETCH_GAME_ERROR,
  FETCH_ALL_GAME_SUCCESS
} from './types.js'

const initialState = {
  loading: false,
  games: {},
  error: ''
}

const gameReducer = (state = initialState, action) => {
  switch(action.types) {
    case FETCH_GAME_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_GAME_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case FETCH_ALL_GAME_SUCCESS:
      return {
        ...state,
        loading: false,
        games: action.games
      }
  }
}