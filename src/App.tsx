import { Suspense, lazy, useEffect, useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import '@styles/App.css';

import Switcher from '@components/ui/Switcher';
import ScrollToTop from '@components/utils/ScrollToTop';
import { Loading } from '@components/ui/Loading';
import I18nLoading from '@components/I18nLoading';
import Navigation from '@components/navigation/Navigation';

// import Home from '@pages/Home';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Cases = lazy(() => import('./pages/Cases'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
    const [load, setLoad] = useState(false);

    const memoizedLoad = useMemo(() => <Loading />, [load]);

    function triggerLoad() {
        setLoad(true);
    }

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
                        <Route path="/cases" Component={Cases} />
                        <Route path="/contact" Component={Contact} />
                    </Routes>
                </main>
            </Suspense>

            <Switcher />
        </div>
    );
}

export default App;
