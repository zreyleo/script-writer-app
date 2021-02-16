import { useContext } from 'react';

import ScriptActions from './ScriptActions';

import GlobalStateContext from '../GlobalState/context';

import HeaderTitle from './HeaderTitle';
import { darkThemeHF, lightThemeHF } from '../styles';

const Header = () => {
    const { turnOnDarkMode } = useContext(GlobalStateContext);

    return (
        <header
            className={`Header ${
                turnOnDarkMode ? darkThemeHF() : lightThemeHF()
            }`}
        >
            <div className={`h-full grid grid-rows-3`}>
                <HeaderTitle />
                <ScriptActions />
            </div>
        </header>
    );
};

export default Header;
