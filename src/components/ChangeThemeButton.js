import { useContext } from 'react';

import GlobalStateContext from '../GlobalState/context';

const ChangeThemeButton = () => {
    const { changeTheme, turnOnDarkTheme } = useContext(GlobalStateContext);

    const onClick = () => {
        changeTheme();
    };
    return <button onClick={onClick}>Cambiar tehma</button>;
};

export default ChangeThemeButton;
