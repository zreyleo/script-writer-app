import { useContext } from 'react';

import GlobalStateContext from '../GlobalState/context';

import { darkThemeIndexes, lightThemeIndexes } from '../styles';

const ScenesIndex = () => {
    const { turnOnDarkTheme } = useContext(GlobalStateContext);

    return (
        <div
            className={`${
                turnOnDarkTheme ? darkThemeIndexes() : lightThemeIndexes()
            }`}
        >
            <button>New Scene</button>
        </div>
    );
};

export default ScenesIndex;
