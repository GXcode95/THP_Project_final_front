import {
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_ERROR,
  FETCH_GAMES_SUCCESS,
  FETCH_ONE_GAME_SUCCESS,
  FETCH_TAGS_SUCCESS,
} from './types.js'

export const fetchGamesRequest = () => {
  return {
    type: FETCH_GAMES_REQUEST
  }
}

export const fetchGamesError = (error) => {
  return {
    type: FETCH_GAMES_ERROR,
    error
  }
}

export const fetchGamesSuccess = (games) => {
  return {
    type: FETCH_GAMES_SUCCESS,
    games
  }
}

export const fetchOneGameSuccess = (game) => {
  return {
    type: FETCH_ONE_GAME_SUCCESS,
    game
  }
}

export const fetchTagsSuccess = (tags) => {
  return {
    type: FETCH_TAGS_SUCCESS,
    tags
  }
}


