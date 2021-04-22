import { useContext } from 'react';

import GlobalStateContext from '../../GlobalState/context';
import NewCharacterButton from './NewCharacterButton';

const ScriptActions = () => {
    // const {  } = useContext(GlobalStateContext);

    return (
        <div className={``}>
            <NewCharacterButton />
        </div>
    );
};

export default ScriptActions;
