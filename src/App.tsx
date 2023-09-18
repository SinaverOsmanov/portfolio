import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Switcher from './components/Switcher';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

function App() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    function handleOpenMenu(payload: boolean) {
        setIsOpenMenu(payload);
    }

    return (
        <div className="h-full min-h-full">
            <div className={`flex`}>
                <Navigation isOpen={isOpenMenu} setOpen={handleOpenMenu} />
                <div
                    className={`flex-col flex-custom-full lg:pl-64  ${isOpenMenu ? 'blur-md' : ''}`}
                    onClick={() => setIsOpenMenu(false)}
                >
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
        </div>
    );
}

export default App;
