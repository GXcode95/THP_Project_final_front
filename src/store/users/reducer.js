import {
  FETCH_USER_REQUEST,
  FETCH_USER_ERROR,
  FETCH_USER_REGISTER_SUCCESS,
  FETCH_USER_SIGN_IN_SUCCESS,
  FETCH_USER_SIGN_OUT_SUCCESS,
  FETCH_USER_UPDATE_SUCCESS,
  FETCH_POST_WISHLIST_SUCCESS,
  FETCH_UPDATE_WISHLIST_SUCCESS,
  FETCH_DELETE_WISHLIST_SUCCESS,
  FETCH_UPDATE_CART_SUCCESS,
  FETCH_UPDATE_FAVORITE_SUCCESS,
  FETCH_POST_ORDER_SUCCESS,
  FETCH_UPDATE_ORDER_SUCCESS,
  FETCH_DELETE_ORDER_SUCCESS
} from "./types";

const initialState = {
  loading: false,
  user_info: {},
  favorites: [],
  rent: {},
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
    case FETCH_USER_SIGN_IN_SUCCESS:
      return {
        ...state,
        ...action.user,
        loading: false
      }
    case FETCH_USER_SIGN_OUT_SUCCESS:
      return {
        loading: false,
        user_info: {},
        favorites: [],
        rent: {},
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
    case FETCH_UPDATE_WISHLIST_SUCCESS:
    case FETCH_DELETE_WISHLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        rent: {
          ...state.rent,
          wishlist: action.wishlist
        }
      }
    case FETCH_UPDATE_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: action.cart,
        command_history: action.command_history
      }
    case FETCH_POST_ORDER_SUCCESS:
    case FETCH_UPDATE_ORDER_SUCCESS:
    case FETCH_DELETE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: action.cart
      }
    case FETCH_UPDATE_FAVORITE_SUCCESS:
      return {
        ...state,
        loading: false,
        favorites: action.favorites
      }
    default:
      return state
  }
}

export default userReducer