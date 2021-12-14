// import Cookies from 'js-cookie'
import {
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_ERROR,
  FETCH_GAMES_SUCCESS,
  FETCH_ONE_GAME_SUCCESS,
  FETCH_TAGS_SUCCESS
} from './types.js'

const initialState = {
  loading: false,
  games: [],
  tags:[]
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
      return {
        ...state,
        loading: false,
        games: action.games
      }

    case FETCH_ONE_GAME_SUCCESS:
      // DOIS METTRE A JOUR LES COMMENTAIRE D'UN JEU
      const games_copy = []
      state.games.forEach(game => games_copy.push(game))
      const gameIndex = games_copy.indexOf(games_copy.find(game => game.id === 2))
      games_copy[gameIndex] = action.game
      return {
        ...state,
        loading: false,
        games: games_copy
      }
      
    case FETCH_TAGS_SUCCESS:
      return {
        ...state,
        loading: false,
        tags: action.tags
      }
    default: 
      return state
  }
}

export default gamesReducer