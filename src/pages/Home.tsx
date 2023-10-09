import { LazyMotion, domAnimation, m } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import TypeAnimate from '@components/TypeAnimate';
import { redirectToExternalLink } from '@/helpers/redirectToExternalLink';

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
                                <TypeAnimate
                                    sequence={[
                                        t('home-page.profession.list.item1'),
                                        1000,
                                        t('home-page.profession.list.item2'),
                                        1000,
                                    ]}
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </h3>
                            <p>{t('home-page.description')}</p>
                            <button
                                className="btn"
                                onClick={() => redirectToExternalLink('https://www.linkedin.com/in/sinaver-osmanov/')}
                            >
                                {t('home-page.linkedIn-button')}
                            </button>
                        </div>
                        <div className="lg:pl-10 flex-col max-lg:basis-full basis-5/12 flex items-center justify-center">
                            <div className="max-w-[300px] max-lg:after:hidden max-lg:before:hidden home-img">
                                <img src={'./assets/avatar.webp'} alt="hero" />
                            </div>
                        </div>
                    </div>
                </div>
            </m.section>
        </LazyMotion>
    );
}

export default Home;
