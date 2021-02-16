const SlugLine = () => {
    const SLUGLINE_ELEMENTS_STYLE = 'uppercase px-3 rounded border-2 border-blue-300'

    return (
        <>
            <select className={`${SLUGLINE_ELEMENTS_STYLE}`}>
                <option value="EXT">EXT.</option>
                <option value="INT">INT.</option>
                <option value="EXT-INT">EXT/INT</option>
            </select>
            <input type="text" className={`col-span-3 ${SLUGLINE_ELEMENTS_STYLE}`} />
            <input type="text" className={`col-span-2 ${SLUGLINE_ELEMENTS_STYLE}`} />
        </>
    );
}
 
export default SlugLine;