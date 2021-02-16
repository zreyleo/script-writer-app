import { CHANGE_THEME } from './actions';

const reducer = (state, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return {
                ...state,
                turnOnDarkMode: !state.turnOnDarkMode,
            };

        default:
            return state;
    }
};

export default reducer;
