import { useReducer } from 'react';

import { CHANGE_THEME, SAVE_SCENE } from './actions';

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

    return (
        <GlobalStateContext.Provider
            value={{
                turnOnDarkMode: state.turnOnDarkMode,
                changeTheme,
                saveScene
            }}
        >
            {props.children}
        </GlobalStateContext.Provider>
    );
};

export default GlobalState;
