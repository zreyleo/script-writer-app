import { useEffect, useState } from 'react';
import { TEXTEDITOR_SLUGLINE_STYLE } from './style';

const SlugLine = ({ setSlugLine }) => {
    const [location, setLocation] = useState('EXT.');
    const [stage, setStage] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        const slugLine = `${location} - ${stage} - ${time}`
            .toUpperCase()
            .trim();

        setSlugLine(slugLine);
    }, [location, stage, time]);

    return (
        <>
            <select
                className={`${TEXTEDITOR_SLUGLINE_STYLE}`}
                name="location"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
            >
                <option value="EXT.">EXT.</option>
                <option value="INT.">INT.</option>
                <option value="EXT/INT">EXT/INT</option>
            </select>
            <input
                type="text"
                className={`col-span-3 ${TEXTEDITOR_SLUGLINE_STYLE}`}
                name="stage"
                value={stage}
                onChange={(event) => setStage(event.target.value)}
            />
            <input
                type="text"
                className={`col-span-2 ${TEXTEDITOR_SLUGLINE_STYLE}`}
                name="time"
                value={time}
                onChange={(event) => setTime(event.target.value)}
            />
        </>
    );
};

export default SlugLine;
