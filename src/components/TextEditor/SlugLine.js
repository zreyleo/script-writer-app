import { TEXTEDITOR_SLUGLINE_STYLE } from './style';

const SlugLine = () => {
    return (
        <>
            <select className={`${TEXTEDITOR_SLUGLINE_STYLE}`}>
                <option value="EXT">EXT.</option>
                <option value="INT">INT.</option>
                <option value="EXT-INT">EXT/INT</option>
            </select>
            <input type="text" className={`col-span-3 ${TEXTEDITOR_SLUGLINE_STYLE}`} />
            <input type="text" className={`col-span-2 ${TEXTEDITOR_SLUGLINE_STYLE}`} />
        </>
    );
}
 
export default SlugLine;