import { useContext, useReducer, useState } from 'react';

import { darkTheme, lightTheme } from '../styles';
import { CHANGE_THEME } from './actions';

import GlobalStateContext from './context';
import reducer from './reducer';

const initialState = {
    themes: {
        light: lightTheme(),
        dark: darkTheme(),
    },
    turnOnDarkTheme: true,
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
                theme: state.turnOnDarkTheme
                    ? state.themes.dark
                    : state.themes.light,
                turnOnDarkTheme: state.turnOnDarkTheme,
                changeTheme,
            }}
        >
            {props.children}
        </GlobalStateContext.Provider>
    );
};

export default GlobalState;
