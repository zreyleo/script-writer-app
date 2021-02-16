import { darkTheme } from '../styles';

import { useContext } from 'react';

import GlobalStateContext from '../GlobalState/context';

import { darkThemeHF, lightThemeHF } from '../styles';

const Footer = () => {
    const { turnOnDarkMode } = useContext(GlobalStateContext);

    return (
        <footer
            className={`${
                turnOnDarkMode ? darkThemeHF() : lightThemeHF()
            } p-4 text-center`}
        >
            Regynald Zambrano
        </footer>
    );
};

export default Footer;
