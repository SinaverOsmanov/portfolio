import { TypeAnimation } from 'react-type-animation';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const { t } = useTranslation();

    return (
        <LazyMotion features={domAnimation}>
            <m.section
                initial={{ x: '100vw' }}
                animate={{ x: '0' }}
                transition={{ duration: 1, bounce: false, type: 'spring', damping: 15, stiffness: 70 }}
                className="home active section"
                id="home"
            >
                <div className="container ls:pt-52 max-ls:py-16">
                    <div className="flex flex-row flex-wrap">
                        <div className="flex-col basis-7/12 max-lg:basis-auto max-lg:mb-10 home-info">
                            <h3 className="hello">
                                {t('home-page.title')}
                                <span className="name sl:ml-2 max-sl:block">{t('name')}</span>
                            </h3>
                            <h3 className="my-profession max-sl:h-20 mb-5">
                                {t('home-page.profession.I-m')}
                                <TypeAnimate />
                            </h3>
                            <p>{t('home-page.description')}</p>
                            <button
                                className="btn"
                                onClick={() => (window.location.href = 'https://www.linkedin.com/in/sinaver-osmanov/')}
                            >
                                {t('home-page.linkedIn-button')}
                            </button>
                        </div>
                        <div className="flex-col max-lg:basis-full basis-5/12 flex items-center justify-center">
                            <div className="max-lg:after:hidden max-lg:before:hidden home-img w-52">
                                <img src={'./assets/avatar.png'} alt="hero" />
                            </div>
                        </div>
                    </div>
                </div>
            </m.section>
        </LazyMotion>
    );
}

export default Home;

function TypeAnimate() {
    const {
        t,
        i18n: { language },
    } = useTranslation();

    const navigate = useNavigate();

    useEffect(() => {
        navigate('/');
    }, [language]);

    return (
        <TypeAnimation
            sequence={[t('home-page.profession.list.item1'), 1000, t('home-page.profession.list.item2'), 1000]}
            wrapper="span"
            speed={50}
            className="ml-2"
            repeat={Infinity}
        />
    );
}
