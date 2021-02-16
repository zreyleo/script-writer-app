import { useEffect, useState } from 'react';

import GlobalState from './GlobalState';

import ApplicationContainer from './components/ApplicationContainer';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
    const {
        state: { turnOnDarkMode },
        GlobalStateProvider,
    } = GlobalState();

    const [darkmode, setDarkMode] = useState(turnOnDarkMode);

    let appStyles = 'App h-screen flex flex-col';

    useEffect(() => {
        if (darkmode) appStyles += ' dark';
        else appStyles = 'App h-screen flex flex-col';
    }, [darkmode]);

    return (
        <GlobalStateProvider>
            <div className={appStyles}>
                <Header setDarkMode={setDarkMode} />
                <div className="flex-grow grid grid-cols-5">
                    <ApplicationContainer />
                </div>
                <Footer />
            </div>
        </GlobalStateProvider>
    );
}

export default App;
