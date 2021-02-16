import GlobalState from './GlobalState';

import ApplicationContainer from './components/ApplicationContainer';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
    const { state: { turnOnDarkMode }, GlobalStateProvider } = GlobalState()

    return (
        <GlobalStateProvider>
            <div className={`App h-screen flex flex-col ${turnOnDarkMode && 'dark'}`}>
                <Header />
                <div className="flex-grow grid grid-cols-5">
                    <ApplicationContainer />
                </div>
                <Footer />
            </div>
        </GlobalStateProvider>
    );
}

export default App;
