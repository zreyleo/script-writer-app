import SlugLine from './SlugLine';
import SceneAction from './SceneAction';

import {
    TEXTEDITOR_INPUT_SUBMIT_STYLE,
    BUTTON_NEW_CHARACTER_DIALOG,
} from './style';

import NewCharacterForm from './NewCharacterForm';

import './style.css';

const TextEditor = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className={`col-span-3 bg-gray-400 p-12`}>
            <div className="bg-gray-50 dark:bg-gray-900 h-full p-8">
                {/* <form
                    className="TextEditor-form h-full grid grid-cols-6 gap-4"
                    onSubmit={handleSubmit}
                >
                    <SlugLine />
                    <SceneAction />
                    <button className={`${BUTTON_NEW_CHARACTER_DIALOG}`}>
                        + CHARACTER
                    </button>
                    <button className={`${BUTTON_NEW_CHARACTER_DIALOG}`}>
                        + DIALOG SECUENCE
                    </button>
                    <input
                        type="submit"
                        value="Save Scene"
                        className={`${TEXTEDITOR_INPUT_SUBMIT_STYLE}`}
                    />
                </form> */}
                <NewCharacterForm />
            </div>
        </div>
    );
};

export default TextEditor;
