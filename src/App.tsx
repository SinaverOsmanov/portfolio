import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Switcher from '@components/Switcher';
import Navigation from '@components/Navigation';
import Home from '@pages/Home';
import About from '@pages/About';
import Services from '@pages/Services';
import Portfolio from '@pages/Portfolio';
import Contact from '@pages/Contact';
import ScrollToTop from '@components/ScrollToTop';

// const Home = lazy(() => import('./pages/Home'));
// const About = lazy(() => import('./pages/About'));
// const Portfolio = lazy(() => import('./pages/Portfolio'));
// const Services = lazy(() => import('./pages/Services'));
// const Contact = lazy(() => import('./pages/Contact'));

function App() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    function handleOpenMenu(payload: boolean) {
        setIsOpenMenu(payload);
    }

    return (
        <div className="h-full min-h-full">
            <div className={``}>
                <Navigation isOpen={isOpenMenu} setOpen={handleOpenMenu} />
                <div className={`flex-col flex-custom-full lg:pl-64`} onClick={() => setIsOpenMenu(false)}>
                    <Routes>
                        <Route path="/" Component={Home} />
                        <Route path="/about" Component={About} />
                        <Route path="/services" Component={Services} />
                        <Route path="/portfolio" Component={Portfolio} />
                        <Route path="/contact" Component={Contact} />
                    </Routes>
                </div>
            </div>
            <Switcher />
            <ScrollToTop />
        </div>
    );
}

export default App;
