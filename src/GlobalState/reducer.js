import { CHANGE_THEME } from './actions';

const reducer = (state, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return {
                ...state,
                turnOnDarkTheme: !state.turnOnDarkTheme,
            };

        default:
            return state;
    }
};

export default reducer;
