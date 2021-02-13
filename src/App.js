import GlobalState from './GlobalState';

import ApplicationContainer from './components/ApplicationContainer';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
    return (
        <GlobalState>
            <div className="App h-screen flex flex-col">
                <Header />
                <div className="flex-grow grid grid-cols-5">
                    <ApplicationContainer />
                </div>
                <Footer />
            </div>
        </GlobalState>
    );
}

export default App;
