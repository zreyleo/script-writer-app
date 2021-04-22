import { useContext } from 'react';

import ScriptContext from '../../GlobalState/context';

import { CANCEL_BUTTON } from './style';

const CancelButton = () => {
    const { setForm } = useContext(ScriptContext);
    return (
        <button
            onClick={() => setForm('NEW_SCENE')}
            className={`${CANCEL_BUTTON}`}
        >
            CANCEL
        </button>
    );
};

export default CancelButton;
