import GlobalState from './GlobalState';

import ApplicationContainer from './components/ApplicationContainer';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
    return (
        <GlobalState>
            <div className="App min-h-screen flex flex-col">
                <Header />
                <div className="flex-grow flex flex-col">
                    <ApplicationContainer />
                </div>
                <Footer />
            </div>
        </GlobalState>
    );
}

export default App;
