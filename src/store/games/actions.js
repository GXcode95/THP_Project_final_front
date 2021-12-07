import {
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_ERROR,
  FETCH_GAMES_SUCCESS
} from './types.js'

export const fetchGamesRequest = () => {
  return {
    type: FETCH_GAMES_REQUEST
  }
}

export const fetchGamesError = () => {
  return {
    type: FETCH_GAMES_ERROR,
    error
  }
}

export const fetchGamesSuccess = () => {
  return {
    type: FETCH_GAMES_SUCCESS,
    games
  }
}