import { CHANGE_THEME, SAVE_SCENE } from './actions';

const reducer = (state, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return {
                ...state,
                turnOnDarkMode: !state.turnOnDarkMode
            };

        case SAVE_SCENE:
            return {
                ...state,
                screenplay: [...state.screenplay, action.payload.scene]
            };

        default:
            return state;
    }
};

export default reducer;
