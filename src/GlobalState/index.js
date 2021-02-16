import { useContext, useReducer, useState } from 'react';

import { darkThemeHF, lightThemeHF } from '../styles';
import { CHANGE_THEME } from './actions';

import GlobalStateContext from './context';
import reducer from './reducer';

const initialState = {
    turnOnDarkMode: true,
};

const GlobalState = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const changeTheme = () => {
        dispatch({
            type: CHANGE_THEME,
        });
    };

    return (
        <GlobalStateContext.Provider
            value={{
                turnOnDarkMode: state.turnOnDarkMode,
                changeTheme,
            }}
        >
            {props.children}
        </GlobalStateContext.Provider>
    );
};

export default GlobalState;
