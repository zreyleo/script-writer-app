import { useContext } from 'react';

import ScriptContext from '../../GlobalState/context';

const NewCharacterButton = () => {
    const { setForm } = useContext(ScriptContext);

    const setNewCharacterForm = () => {
        setForm('NEW_CHARACTER');
    };
    return <button onClick={setNewCharacterForm}>New Character</button>;
};

export default NewCharacterButton;
