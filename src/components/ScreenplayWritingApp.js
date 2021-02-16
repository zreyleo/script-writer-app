import { useContext } from 'react';

import GlobalStateContext from '../GlobalState/context'

import Header from './Header';
import Footer from './Footer';
import ApplicationContainer from './ApplicationContainer';

const ScreenplayWritingApp = () => {
    const { turnOnDarkMode } = useContext(GlobalStateContext)

    console.log(turnOnDarkMode)

    return (
        <div className={`h-screen flex flex-col ${turnOnDarkMode && 'dark'}`}>
            <Header />
            <div className="flex-grow grid grid-cols-5">
                <ApplicationContainer />
            </div>
            <Footer />
        </div>
    );
}

export default ScreenplayWritingApp;