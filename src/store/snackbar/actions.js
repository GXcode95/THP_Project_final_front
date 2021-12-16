import { SET_SNACKBAR } from "./types";

export const setSnackbar = (SNOpen, SNType, SNMessage) => {
  return {
    type: SET_SNACKBAR,
    SNOpen,
    SNType,
    SNMessage 
  }
}