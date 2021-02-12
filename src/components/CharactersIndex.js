import { useContext } from 'react';

import GlobalStateContext from '../GlobalState/context';

import { darkThemeIndexes, lightThemeIndexes } from '../styles';

const CharactersIndex = () => {
    const { turnOnDarkTheme } = useContext(GlobalStateContext);

    return (
        <div
            className={`${
                turnOnDarkTheme ? darkThemeIndexes() : lightThemeIndexes()
            }`}
        >
            CharactersIndex
        </div>
    );
};

export default CharactersIndex;
