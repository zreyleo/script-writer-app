import GlobalState from './GlobalState';

import ScreenplayWritingApp from './components/ScreenplayWritingApp';

function App() {
    return (
        <GlobalState>
            <ScreenplayWritingApp />
        </GlobalState>
    );
}

export default App;
