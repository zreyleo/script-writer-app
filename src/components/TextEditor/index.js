import { useContext } from 'react';

import ScriptContext from '../../GlobalState/context';

import NewCharacterForm from './NewCharacterForm';
import NewSceneForm from './NewSceneForm';

import './style.css';

const TextEditor = () => {
    const { form } = useContext(ScriptContext);

    return (
        <div className={`col-span-3 bg-gray-400 p-12`}>
            <div className="bg-gray-50 dark:bg-gray-900 h-full p-8">
                {form === 'NEW_CHARACTER' ? (
                    <NewCharacterForm />
                ) : (
                    <NewSceneForm />
                )}
            </div>
        </div>
    );
};

export default TextEditor;
