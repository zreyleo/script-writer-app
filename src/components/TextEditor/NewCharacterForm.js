import { useContext, useState } from 'react';

import ScriptContext from '../../GlobalState/context';

import CancelButton from './CancelButton';
import {
    NEW_CHARACTER_FORM_LABELS,
    NEW_CHARACTER_FORM_INPUTS,
    NEW_CHARACTER_LONG_DESC,
    TEXTEDITOR_SCENE_ACTION_STYLE,
    TEXTEDITOR_INPUT_SUBMIT_STYLE
} from './style';

import './style.css';

const NewCharacterForm = () => {
    const { addCharacter, setForm } = useContext(ScriptContext);
    const [character, setCharacter] = useState({
        name: '',
        shortDesc: '',
        longDesc: ''
    });

    const handleChange = (event) => {
        setCharacter({
            ...character,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        addCharacter(character);
        setForm('NEW_SCENE');
    };

    return (
        <form
            className="NewCharacterForm h-full grid grid-cols-6 gap-4"
            onSubmit={handleSubmit}
        >
            <label className={NEW_CHARACTER_FORM_LABELS}>
                NAME
                <input
                    name="name"
                    value={character.name}
                    onChange={handleChange}
                    className={NEW_CHARACTER_FORM_INPUTS}
                />
            </label>
            <label className={NEW_CHARACTER_FORM_LABELS}>
                SHORT DESC
                <input
                    name="shortDesc"
                    value={character.shortDesc}
                    onChange={handleChange}
                    className={NEW_CHARACTER_FORM_INPUTS}
                />
            </label>
            <label className={`long-desc ${NEW_CHARACTER_LONG_DESC}`}>
                <span>LONG DESC</span>
                <textarea
                    name="longDesc"
                    value={character.longDesc}
                    onChange={handleChange}
                    className={`${TEXTEDITOR_SCENE_ACTION_STYLE}`}
                ></textarea>
            </label>
            <CancelButton />
            <input
                type="submit"
                className={`${TEXTEDITOR_INPUT_SUBMIT_STYLE}`}
                value="SAVE CHARACTER"
            />
        </form>
    );
};

export default NewCharacterForm;
