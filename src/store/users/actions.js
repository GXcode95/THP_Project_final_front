
import {
  FETCH_USER_REQUEST, 
  FETCH_USER_ERROR,
  FETCH_USER_REGISTER_SUCCESS, 
  FETCH_USER_SIGN_IN_SUCCESS,
  FETCH_USER_SIGN_OUT_SUCCESS, 
  FETCH_USER_UPDATE_SUCCESS,
  FETCH_USER_AVATAR_SUCCESS, 
  FETCH_ALL_AVATAR_SUCCESS,
  FETCH_USER_PROFILE_SUCCESS
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

export const fetchUserProfileSuccess = () => {
  return {
    type: FETCH_USER_PROFILE_SUCCESS
  }
}