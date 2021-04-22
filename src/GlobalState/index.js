import { useReducer } from 'react';

import { ADD_CHARACTER, CHANGE_THEME, SAVE_SCENE, SET_FORM } from './actions';

import GlobalStateContext from './context';
import reducer from './reducer';

import initialState from './initialState';

const GlobalState = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const changeTheme = () => {
        dispatch({
            type: CHANGE_THEME
        });
    };

    const saveScene = (scene) => {
        dispatch({
            type: SAVE_SCENE,
            payload: { scene }
        });
    };

    const addCharacter = (character) => {
        dispatch({
            type: ADD_CHARACTER,
            payload: { character }
        });
    };

    const setForm = (wichForm) => {
        dispatch({
            type: SET_FORM,
            payload: { wichForm }
        });
    };

    return (
        <GlobalStateContext.Provider
            value={{
                ...state,
                changeTheme,
                saveScene,
                addCharacter,
                setForm
            }}
        >
            {props.children}
        </GlobalStateContext.Provider>
    );
};

export default GlobalState;
