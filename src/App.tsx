import { useEffect } from 'react';
import About from './components/About';
import Home from './components/Home';
import Switcher from './components/Switcher';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import { Contact } from './components/Contact';
import './App.css';
import './i18n';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    useEffect(() => {
        const dayNight = document.querySelector('.day-night');

        if (dayNight) {
            dayNight.addEventListener('click', () => {
                dayNight.querySelector('i')?.classList.toggle('fa-sun');
                dayNight.querySelector('i')?.classList.toggle('fa-moon');
                document.body.classList.toggle('dark');
            });

            window.addEventListener('load', () => {
                if (document.body.classList.contains('dark')) {
                    dayNight.querySelector('i')?.classList.add('fa-sun');
                } else {
                    dayNight.querySelector('i')?.classList.add('fa-moon');
                }
            });
        }
        return () => {
            window.removeEventListener('load', () => {});
        };
    }, []);

    return (
        <BrowserRouter>
            <div className="flex flex-row h-screen">
                <div className="flex flex-col">
                    <Navbar />
                </div>
                <div className="flex flex-col pl-10">
                    <Routes>
                        <Route path="/" Component={Home} />
                        <Route path="/about" Component={About} />
                        <Route path="/services" Component={Services} />
                        <Route path="/portfolio" Component={Portfolio} />
                        <Route path="/contact" Component={Contact} />
                    </Routes>
                </div>
            </div>
            {/* <Switcher /> */}
        </BrowserRouter>
    );
}

export default App;
