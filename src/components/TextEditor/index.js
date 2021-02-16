import { useContext } from 'react';

import GlobalStateContext from '../../GlobalState/context';

import SlugLine from './SlugLine';
import SceneAction from './SceneAction';

import { TEXTEDITOR_INPUT_SUBMIT_STYLE } from './style'

import './style.css'

const TextEditor = () => {
    const { turnOnDarkMode } = useContext(GlobalStateContext);

    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <div className={`col-span-3 bg-gray-400 p-12`}>
            <div className="bg-gray-50 dark:bg-gray-900 h-full p-8">
                <form className="TextEditor-form h-full grid grid-cols-6 gap-4" onSubmit={handleSubmit}>
                    <SlugLine />
                    <SceneAction />
                    <input 
                        type="submit" 
                        value="Save Scene" 
                        className={`${TEXTEDITOR_INPUT_SUBMIT_STYLE}`} />
                </form>
            </div>
        </div>
    );
}

export default TextEditor;