import { SET_SNACKBAR } from "./types"

const initialState = {
  SNOpen: false,
  SNType: "",
  SNMessage: ""
}

const snackbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SNACKBAR:
      return {
        ...state,
        SNOpen: action.SNOpen,
        SNType: action.SNType,
        SNMessage: action.SNMessage
      }
    default:
      return state;
  }
}

export default snackbarReducer