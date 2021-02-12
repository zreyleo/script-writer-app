import { useContext } from 'react';

import GlobalStateContext from '../GlobalState/context';

const ScriptActions = () => {
    const { theme } = useContext(GlobalStateContext);

    return <div className={`${theme}`}>ScriptActions</div>;
};

export default ScriptActions;
