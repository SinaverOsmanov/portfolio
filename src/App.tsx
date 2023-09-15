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
            <div className="flex">
                <div className="flex-col">
                    <Navbar />
                </div>
                <div className="flex-col grow px-56">
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
        </BrowserRouter>
    );
}

export default App;
