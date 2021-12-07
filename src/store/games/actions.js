import {
  FETCH_GAME_REQUEST,
  FETCH_GAME_ERROR,
  FETCH_ALL_GAME_SUCCESS
} from './types.js'

export const fetchGameRequest = () => {
  return {
    type: FETCH_GAME_REQUEST
  }
}

export const fetchGameRequest = () => {
  return {
    type: FETCH_GAME_ERROR,
    error
  }
}

export const fetchGameRequest = () => {
  return {
    type: FETCH_ALL_GAME_SUCCESS,
    games
  }
}