import { useReducer } from 'react';

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

    const GlobalStateProvider = (props) => (
        <GlobalStateContext.Provider
            value={{
                turnOnDarkMode: state.turnOnDarkMode,
                changeTheme,
            }}
        >
            {props.children}
        </GlobalStateContext.Provider>
    )

    // return (
    //     <GlobalStateContext.Provider
    //         value={{
    //             turnOnDarkMode: state.turnOnDarkMode,
    //             changeTheme,
    //         }}
    //     >
    //         {props.children}
    //     </GlobalStateContext.Provider>
    // );

    return {
        state,
        GlobalStateProvider
    }
};

export default GlobalState;
