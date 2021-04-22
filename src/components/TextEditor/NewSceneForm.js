import { useContext, useState } from 'react';

import ScriptContext from '../../GlobalState/context';

import SceneAction from './SceneAction';
import SlugLine from './SlugLine';

import {
    TEXTEDITOR_INPUT_SUBMIT_STYLE,
    BUTTON_NEW_CHARACTER_DIALOG
} from './style';

const sceneBody = {
    slugLine: '',
    sceneActions: [
        {
            sceneDescription: '',
            diaologues: [
                {
                    character: '',
                    annotation: '',
                    line: ''
                }
            ]
        }
    ]
};

const NewSceneForm = () => {
    const { setForm } = useContext(ScriptContext);

    const [slugLine, setSlugLine] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form
            className="TextEditor-form h-full grid grid-cols-6 gap-4"
            onSubmit={handleSubmit}
        >
            <SlugLine setSlugLine={setSlugLine} />
            <SceneAction />
            <button className={`${BUTTON_NEW_CHARACTER_DIALOG}`}>
                + DIALOGUE SECUENCE
            </button>
            <input
                type="submit"
                value="Save Scene"
                className={`${TEXTEDITOR_INPUT_SUBMIT_STYLE}`}
            />
        </form>
    );
};

export default NewSceneForm;
