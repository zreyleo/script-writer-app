import { CANCEL_BUTTON } from './style';

const CancelButton = ({ setForm }) => {
    return (
        <button onClick={() => setForm('')} className={`${CANCEL_BUTTON}`}>
            CANCEL
        </button>
    );
};

export default CancelButton;
