
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
  FETCH_UPDATE_CART_SUCCESS
} from "./types";

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  }
}

export const fetchUserError = (error) => {
  return {
    type: FETCH_USER_ERROR,
    error
  }
}

export const fetchUserRegisterSuccess = (user) => {
  return {
    type: FETCH_USER_REGISTER_SUCCESS,
    user
  }
}

export const fetchUserSignInSuccess = (user) => {
  return {
    type: FETCH_USER_SIGN_IN_SUCCESS,
    user
  }
}

export const fetchUserSignOutSuccess = () => {
  return {
    type: FETCH_USER_SIGN_OUT_SUCCESS,
  }
}

export const fetchUserUpdateSuccess = (user) => {
  return {
    type: FETCH_USER_UPDATE_SUCCESS,
    user
  }
}

export const fetchPostWishListSuccess = (wishList) => {
  return {
    type: FETCH_POST_WISHLIST_SUCCESS,
    wishList
  }
}

export const fetchUpdateWishListSuccess = (wishList) => {
  return {
    type: FETCH_UPDATE_WISHLIST_SUCCESS,
    wishList
  }
}

export const fetchDeleteWishListSuccess = (wishList) => {
  return {
    type: FETCH_DELETE_WISHLIST_SUCCESS,
    wishList
  }
}

export const fetchUpdateCartSuccess = (cart) => {
  return {
    type: FETCH_UPDATE_CART_SUCCESS,
    cart
  }
}