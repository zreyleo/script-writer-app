import ScriptActions from './ScriptActions';
import HeaderTitle from './HeaderTitle';

import { THEME } from '../styles';

const Header = () => {
    return (
        <header className={`Header ${THEME}`}>
            <div className={`h-full grid grid-rows-3`}>
                <HeaderTitle />
                <ScriptActions />
            </div>
        </header>
    );
};

export default Header;
