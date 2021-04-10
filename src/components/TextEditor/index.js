import { useState } from 'react';

import NewCharacterForm from './NewCharacterForm';
import NewSceneForm from './NewSceneForm';

import './style.css';

const TextEditor = () => {
    const [form, setForm] = useState('');

    return (
        <div className={`col-span-3 bg-gray-400 p-12`}>
            <div className="bg-gray-50 dark:bg-gray-900 h-full p-8">
                {form === 'NEW_CHARACTER' ? (
                    <NewCharacterForm setForm={setForm} />
                ) : (
                    <NewSceneForm setForm={setForm} />
                )}
            </div>
        </div>
    );
};

export default TextEditor;
