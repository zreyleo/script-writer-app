import { useContext } from 'react';

import GlobalStateContext from '../GlobalState/context';

const ChangeThemeButton = () => {
    const { changeTheme, turnOnDarkMode } = useContext(GlobalStateContext);

    return (
        <div className="flex items-center justify-center">
            <label
                htmlFor="toogleA"
                className="flex items-center cursor-pointer"
            >
                <div className="relative">
                    <input
                        id="toogleA"
                        type="checkbox"
                        className="hidden"
                        defaultChecked={turnOnDarkMode}
                        onChange={changeTheme}
                    />
                    <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                    <div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"></div>
                </div>
                <div className="ml-3 font-medium">
                    Dark Mode {turnOnDarkMode ? 'On' : 'Off'}
                </div>
            </label>
        </div>
    );
};

export default ChangeThemeButton;
