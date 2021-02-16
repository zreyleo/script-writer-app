import { useContext } from 'react';

import GlobalStateContext from '../GlobalState/context';

import { darkThemeIndexes, lightThemeIndexes } from '../styles';

const CharactersIndex = () => {
    const { turnOnDarkMode } = useContext(GlobalStateContext);

    return (
        <div
            className={`${
                turnOnDarkMode ? darkThemeIndexes() : lightThemeIndexes()
            }`}
        >
            CharactersIndex
        </div>
    );
};

export default CharactersIndex;
