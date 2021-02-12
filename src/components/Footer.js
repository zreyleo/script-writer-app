import { darkTheme } from '../styles';

import { useContext } from 'react';

import GlobalStateContext from '../GlobalState/context';

const Footer = () => {
    const { theme } = useContext(GlobalStateContext);

    return (
        <footer className={`${theme} p-4 text-center`}>
            Regynald Zambrano
        </footer>
    );
};

export default Footer;
