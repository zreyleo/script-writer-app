import { ADD_CHARACTER, CHANGE_THEME, SAVE_SCENE } from './actions';

const reducer = (state, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case CHANGE_THEME:
            newState = {
                ...newState,
                turnOnDarkMode: !newState.turnOnDarkMode
            };
            break;

        case SAVE_SCENE:
            newState = {
                ...newState,
                screenplay: [...newState.screenplay, action.payload.scene]
            };
            break;

        case ADD_CHARACTER:
            newState = {
                ...newState,
                characters: [...newState.characters, action.payload.character]
            };
            break;

        default:
            newState = state;
    }

    if (localStorage.getItem('savedState'))
        localStorage.removeItem('savedState');

    localStorage.setItem('savedState', JSON.stringify(newState));

    return newState;
};

export default reducer;
