import {
  FETCH_USER_REQUEST, 
  FETCH_USER_ERROR,
  FETCH_USER_REGISTER_SUCCESS, 
  FETCH_USER_SIGN_IN_SUCCESS,
  FETCH_USER_SIGN_OUT_SUCCESS, 
  FETCH_USER_UPDATE_SUCCESS,
  FETCH_POST_WISHLIST_SUCCESS,
  FETCH_DELETE_WISHLIST_SUCCESS,
  FETCH_UPDATE_CART_SUCCESS
} from "./types";

const initialState = {
  loading: false,
  user_info: {},
  favorite: {},
  rented_games: {},
  rent_games: {},
  wishlist: {},
  command_history: {},
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
        ...action.user,
        loading: false
      }
    case FETCH_USER_SIGN_IN_SUCCESS:
      // Cookies.set('user', ...action)
      return {
        ...state,
        ...action.user,
        loading: false
      }
    case FETCH_USER_SIGN_OUT_SUCCESS:
      // Cookies.set('user', "")
      return {
        loading: false,
        user_info: {},
        favorite: {},
        rented_games: {},
        rent_games: {},
        wishlist: {},
        command_history: {},
        cart: {},
        error: ''
      }
    case FETCH_USER_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.userInfo
      }
    case FETCH_POST_WISHLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        wishList: action.wishList
      }
    case FETCH_DELETE_WISHLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        wishList: action.wishList
      }
    case FETCH_UPDATE_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: action.cart
      }
    default:
      return state
  }
}

export default userReducer