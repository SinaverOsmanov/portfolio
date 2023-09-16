import About from './components/About';
import Home from './components/Home';
import Switcher from './components/Switcher';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import { Contact } from './components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="h-full min-h-full">
                <div className="flex">
                    {/* <div className="md:hidden fixed left-5 top-5">
                        <i className="text-4xl fa-solid fa-burger"></i>
                    </div> */}
                    <Navbar />
                    <div className="flex-col md:flex-auto xs:flex-custom-full">
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
        </BrowserRouter>
    );
}

export default App;
