import { useContext } from 'react';

import GlobalStateContext from '../GlobalState/context';

import Header from './Header';
import Footer from './Footer';
import ApplicationContainer from './ApplicationContainer';

const ScreenplayWritingApp = () => {
    const { turnOnDarkMode } = useContext(GlobalStateContext);

    return (
        <div className={`h-screen flex flex-col ${turnOnDarkMode && 'dark'}`}>
            <Header />
            <ApplicationContainer />
            <Footer />
        </div>
    );
};

export default ScreenplayWritingApp;
