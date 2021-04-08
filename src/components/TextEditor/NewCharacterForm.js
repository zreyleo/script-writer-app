import CancelButton from './CancelButton';
import {
    NEW_CHARACTER_FORM_LABELS,
    NEW_CHARACTER_FORM_INPUTS,
    NEW_CHARACTER_LONG_DESC,
    TEXTEDITOR_SCENE_ACTION_STYLE,
    TEXTEDITOR_INPUT_SUBMIT_STYLE,
} from './style';

import './style.css';

const NewCharacterForm = () => {
    return (
        <form className="NewCharacterForm h-full grid grid-cols-6 gap-4">
            <label className={NEW_CHARACTER_FORM_LABELS}>
                NAME
                <input className={NEW_CHARACTER_FORM_INPUTS} />
            </label>
            <label className={NEW_CHARACTER_FORM_LABELS}>
                SHORT DESC
                <input className={NEW_CHARACTER_FORM_INPUTS} />
            </label>
            <label className={`long-desc ${NEW_CHARACTER_LONG_DESC}`}>
                <span>LONG DESC</span>
                <textarea
                    className={`${TEXTEDITOR_SCENE_ACTION_STYLE}`}
                ></textarea>
            </label>
            <CancelButton />
            <input
                className={`${TEXTEDITOR_INPUT_SUBMIT_STYLE}`}
                value="SAVE CHARACTER"
            />
        </form>
    );
};

export default NewCharacterForm;
