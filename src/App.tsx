import { useEffect } from 'react';
import About from './components/About';
import Home from './components/Home';
import Switcher from './components/Switcher';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import { Contact } from './components/Contact';
import './App.css';

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
        <>
            <div className="main-container">
                <Navbar />
                <div className="main-content">
                    <Home />
                    <About />
                    <Services />
                    <Portfolio />
                    <Contact />
                </div>
            </div>
            <Switcher />
        </>
    );
}

export default App;
