import { useContext } from 'react';

import GlobalStateContext from '../GlobalState/context';

import { darkThemeIndexes, lightThemeIndexes } from '../styles';

const ScenesIndex = () => {
    const { turnOnDarkMode } = useContext(GlobalStateContext);

    return (
        <div
            className={`${
                turnOnDarkMode ? darkThemeIndexes() : lightThemeIndexes()
            }`}
        >
            <button>New Scene</button>
        </div>
    );
};

export default ScenesIndex;
