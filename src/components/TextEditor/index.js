import { useContext } from 'react';

import GlobalStateContext from '../../GlobalState/context';

import SlugLine from './SlugLine'
import SceneAction from './SceneAction'

import './style.css'

const TextEditor = () => {
    const { turnOnDarkMode } = useContext(GlobalStateContext);

    return (
        <div className={`col-span-3 bg-gray-400 p-12 ${turnOnDarkMode && 'dark'}`}>
            <div className="bg-gray-50 dark:bg-gray-900 h-full p-8">
                <form className="TextEditor-form h-full grid grid-cols-6 gap-4">
                    <SlugLine />
                    <SceneAction />
                    <input type="submit" value="Save Scene" className="col-start-5 col-end-7 uppercase cursor-pointer" />
                </form>
            </div>
        </div>
    );
}
 
export default TextEditor;