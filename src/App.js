import ApplicationContainer from './components/ApplicationContainer';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
    return (
        <div className="App min-h-screen flex flex-col">
            <Header />
            <div className="flex-grow flex flex-col">
                <ApplicationContainer />
            </div>
            <Footer />
        </div>
    );
}

export default App;
