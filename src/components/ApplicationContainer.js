import CharactersIndex from './CharactersIndex';
import ScenesIndex from './ScenesIndex';
import TextEditor from './TextEditor';

const ApplicationContainer = () => {
    return (
        <div className="flex-grow grid grid-cols-5">
            <ScenesIndex />
            <TextEditor />
            <CharactersIndex />
        </div>
    );
};

export default ApplicationContainer;
