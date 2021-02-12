import { darkTheme, container } from '../styles';
import ScriptActions from './ScriptActions';

const Header = () => {
    return (
        <header className={`Header ${darkTheme()}`}>
            <div className={`${container()} h-full grid grid-rows-2`}>
                Script Writer App
                <ScriptActions />
            </div>
        </header>
    );
};

export default Header;
