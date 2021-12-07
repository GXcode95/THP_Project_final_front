import {
  FETCH_USER_REQUEST, 
  FETCH_USER_ERROR,
  FETCH_USER_REGISTER_SUCCESS, 
  FETCH_USER_SIGN_IN_SUCCESS,
  FETCH_USER_SIGN_OUT_SUCCESS, 
  FETCH_USER_UPDATE_SUCCESS
} from "./types";

const initialState = {
  loading: false,
  userInfo: {},
  favorite: {},
  rentedGames: {},
  rentGames: {},
  wishList: {},
  commandHistory: {},
  cart: {},
  error: ''
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case FETCH_USER_REGISTER_SUCCESS:
      // Cookies.set('user', ...action)
      return {
        ...state,
        ...action,
        loading: false,
      }
    case FETCH_USER_SIGN_IN_SUCCESS:
      // Cookies.set('user', ...action)
      return {
        ...state,
        ...action,
        loading: false
      }
    case FETCH_USER_SIGN_OUT_SUCCESS:
      // Cookies.set('user', "")
      return {
        ...state,
        ...action,
        loading: false,
      }
    case FETCH_USER_UPDATE_SUCCESS:
      // Cookies.set('user', action.user)
      return {
        ...state,
        loading: false,
        userInfo: action.userInfo
      }
  }
}

export default userReducer