import { TOGGLE_THEME } from "./types";
import { light, dark } from 'style/palette'

const initialState = {
    theme: light
}

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            const newTheme = state.theme.palette.mode === 'light' ? dark : light
                // Cookies.set('theme', newThemeCookies)
            return {
                theme: newTheme
            }
        default:
            return state;
    }
}

export default themeReducer