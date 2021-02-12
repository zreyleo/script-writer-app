import { container } from '../styles';
import ChangeThemeButton from './ChangeThemeButton';

const HeaderTitle = () => {
    return (
        <div className="bg-blue-900 text-white">
            <div
                className={`${container()} h-full items-center grid grid-cols-3`}
            >
                ScriptWriterApp
                <ChangeThemeButton />
                <p className="text-right">User</p>
            </div>
        </div>
    );
};

export default HeaderTitle;
