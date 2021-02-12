import { useContext } from 'react';

import { container } from '../styles';
import ChangeThemeButton from './ChangeThemeButton';
import ScriptActions from './ScriptActions';

import GlobalStateContext from '../GlobalState/context';

const Header = () => {
    const { theme } = useContext(GlobalStateContext);

    return (
        <header className={`Header ${theme}`}>
            <div className={`${container()} h-full grid grid-rows-2`}>
                <ChangeThemeButton />
                <ScriptActions />
            </div>
        </header>
    );
};

export default Header;
