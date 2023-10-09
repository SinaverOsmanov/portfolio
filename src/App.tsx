import { Suspense, lazy, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '@styles/App.css';

import Switcher from '@components/Switcher';
import Navigation from '@components/Navigation';
import ScrollToTop from '@components/ScrollToTop';
import { Loading } from '@components/Loading';
import I18nLoading from '@components/I18nLoading';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
    return (
        <div className="h-full min-h-full">
            <I18nLoading />
            <ScrollToTop />

            <Navigation />

            <Suspense fallback={<Loading />}>
                <main className={`flex-col flex-custom-full lg:pl-72`}>
                    <Routes>
                        <Route path="/" Component={Home} />
                        <Route path="/about" Component={About} />
                        <Route path="/services" Component={Services} />
                        <Route path="/portfolio" Component={Portfolio} />
                        <Route path="/contact" Component={Contact} />
                    </Routes>
                </main>
            </Suspense>

            <Switcher />
        </div>
    );
}

export default App;
