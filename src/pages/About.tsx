import { Link } from 'react-router-dom';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { redirectToExternalLink } from '@/helpers/redirectToExternalLink';
import { ReactHelmet } from '@components/utils/ReactHelmet';

export default function About() {
    const { t } = useTranslation();

    return (
        <LazyMotion features={domAnimation}>
            <ReactHelmet title="About me" description="This page describe my experience and knowledge" />
            <m.section
                initial={{ x: '100vw' }}
                animate={{ x: '0' }}
                transition={{ duration: 1, bounce: false, type: 'spring', damping: 15, stiffness: 70 }}
                className="about section"
                id="about"
            >
                <div className="container py-16">
                    <div className="flex flex-row">
                        <div className="basis-full mb-14 section-title">
                            <h1>{t('about-page.title')}</h1>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex-col about-content">
                            <div className="flex flex-row mb-10">
                                <div className="flex-col about-text">
                                    <h3>
                                        {t('about-page.introduce_title', { name: t('name') })}
                                        <span>{t('profession')}</span>
                                    </h3>
                                    <p>{t('about-page.introduce_description')}</p>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between flex-wrap mb-20 max-sl:mb-5">
                                <div className="flex-col basis-6/12 max-sl:basis-full flex-wrap personal-info">
                                    <div className="flex flex-row flex-wrap">
                                        <h3 className="title">{t('about-page.soft-skills.title')}</h3>
                                        <div className="flex-custom-full info-item mb-6">
                                            <p>
                                                {t('about-page.soft-skills.languages.ru.key')} :
                                                <span>{t('about-page.soft-skills.languages.ru.value')}</span>
                                            </p>
                                        </div>
                                        <div className="flex-custom-full info-item mb-6">
                                            <p>
                                                {t('about-page.soft-skills.languages.en.key')} :
                                                <span>{t('about-page.soft-skills.languages.en.value')}</span>
                                            </p>
                                        </div>
                                        <div className="flex-custom-full info-item mb-6">
                                            <p>
                                                {t('about-page.soft-skills.website')} :
                                                <span
                                                    onClick={() =>
                                                        redirectToExternalLink('https://sinaverosmanov.github.io/')
                                                    }
                                                >
                                                    https://sinaverosmanov.github.io/
                                                </span>
                                            </p>
                                        </div>
                                        <div className="flex-custom-full info-item mb-6">
                                            <p>
                                                {t('about-page.soft-skills.email')} :
                                                <span>sinaver.osmanov@gmail.com</span>
                                            </p>
                                        </div>
                                        <div className="flex-custom-full info-item mb-6">
                                            <p>
                                                {t('about-page.soft-skills.freelance.key')} :
                                                <span>{t('about-page.soft-skills.freelance.value')}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row flex-wrap">
                                        <div className="buttons">
                                            <Link to="/contact" className="btn hire-me">
                                                {t('about-page.hire-button')}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-col basis-5/12 max-sl:mt-10 max-sl:basis-full skills">
                                    <div className="flex flex-row flex-wrap">
                                        <h3 className="title">{t('about-page.hard-skills.title')}</h3>
                                        <div className="flex-custom-full skills-item mb-6">
                                            <h5>HTML</h5>
                                            <div className="progress">
                                                <div className="progress-in" style={{ width: '96%' }}></div>
                                                <div className="skills-percent">96%</div>
                                            </div>
                                        </div>
                                        <div className="flex-custom-full skills-item mb-6">
                                            <h5>CSS</h5>
                                            <div className="progress">
                                                <div className="progress-in" style={{ width: '86%' }}></div>
                                                <div className="skills-percent">86%</div>
                                            </div>
                                        </div>
                                        <div className="flex-custom-full skills-item mb-6">
                                            <h5>JavaScript</h5>
                                            <div className="progress">
                                                <div className="progress-in" style={{ width: '85%' }}></div>
                                                <div className="skills-percent">85%</div>
                                            </div>
                                        </div>
                                        <div className="flex-custom-full skills-item mb-6">
                                            <h5>React</h5>
                                            <div className="progress">
                                                <div className="progress-in" style={{ width: '80%' }}></div>
                                                <div className="skills-percent">80%</div>
                                            </div>
                                        </div>
                                        <div className="flex-custom-full skills-item mb-6">
                                            <h5>Redux</h5>
                                            <div className="progress">
                                                <div className="progress-in" style={{ width: '80%' }}></div>
                                                <div className="skills-percent">80%</div>
                                            </div>
                                        </div>
                                        <div className="flex-custom-full skills-item mb-6">
                                            <h5>Vue</h5>
                                            <div className="progress">
                                                <div className="progress-in" style={{ width: '30%' }}></div>
                                                <div className="skills-percent">30%</div>
                                            </div>
                                        </div>
                                        <div className="flex-custom-full skills-item mb-6">
                                            <h5>Git</h5>
                                            <div className="progress">
                                                <div className="progress-in" style={{ width: '70%' }}></div>
                                                <div className="skills-percent">70%</div>
                                            </div>
                                        </div>
                                        <div className="flex-custom-full skills-item mb-6">
                                            <h5>Typescript</h5>
                                            <div className="progress">
                                                <div className="progress-in" style={{ width: '60%' }}></div>
                                                <div className="skills-percent">60%</div>
                                            </div>
                                        </div>
                                        <div className="flex-custom-full skills-item mb-6">
                                            <h5>Bootstrap, Material UI, Antd, Blueprint.js, Tailwind</h5>
                                            <div className="progress">
                                                <div className="progress-in" style={{ width: '70%' }}></div>
                                                <div className="skills-percent">70%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row flex-wrap justify-between">
                                <div className="max-sl:flex-custom-full flex-custom-1/2 sl:pr-5">
                                    <h3 className="title">{t('about-page.education.title')}</h3>
                                    <div className="flex flex-row">
                                        <div className="timeline-box">
                                            <div className="timeline shadow-lg">
                                                {t('about-page.education.education1.timeline')}
                                                <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-data">
                                                        <i className="fa fa-calendar"></i>
                                                        {t('about-page.education.education1.date.from')} 2021 —
                                                        {t('about-page.education.education1.date.to')} 2022
                                                    </h3>
                                                    <h4 className="timeline-title">
                                                        {t('about-page.education.education1.title')}
                                                    </h4>
                                                    <p className="timeline-text">
                                                        {t('about-page.education.education1.text')}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="max-sl:flex-custom-full max-sl:mt-10 flex-custom-1/2">
                                    <h3 className="title">{t('about-page.experience.title')}</h3>
                                    <div className="flex flex-row">
                                        <div className="timeline-box">
                                            <div className="timeline shadow-lg">
                                                {t('about-page.experience.experience1.timeline')}
                                                <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-data">
                                                        <i className="fa fa-calendar"></i>
                                                        {t('about-page.experience.experience1.date.from')} 2023 —
                                                        {t('about-page.experience.experience1.date.to')}
                                                    </h3>
                                                    <h4 className="timeline-title">
                                                        {t('about-page.experience.experience1.title')}
                                                    </h4>
                                                    <p className="timeline-text">
                                                        {t('about-page.experience.experience1.texts.text1.subtext')}
                                                    </p>
                                                </div>
                                                {t('about-page.experience.experience2.timeline')}
                                                <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-data">
                                                        <i className="fa fa-calendar"></i>
                                                        {t('about-page.experience.experience2.date.from')} 2022 —
                                                        {t('about-page.experience.experience2.date.to')} 2023
                                                    </h3>
                                                    <h4 className="timeline-title">
                                                        {t('about-page.experience.experience2.title')}
                                                    </h4>
                                                    <p className="timeline-text">
                                                        <h5>
                                                            1.{' '}
                                                            {t('about-page.experience.experience2.texts.text1.title')}:
                                                        </h5>
                                                        <ul>
                                                            <li>
                                                                -{' '}
                                                                {t(
                                                                    'about-page.experience.experience2.texts.text1.subtexts.sub1',
                                                                )}
                                                                .
                                                            </li>
                                                            <li>
                                                                -{' '}
                                                                {t(
                                                                    'about-page.experience.experience2.texts.text1.subtexts.sub2',
                                                                )}
                                                            </li>
                                                            <li>
                                                                -{' '}
                                                                {t(
                                                                    'about-page.experience.experience2.texts.text1.subtexts.sub3',
                                                                )}
                                                            </li>
                                                            <li>
                                                                -{' '}
                                                                {t(
                                                                    'about-page.experience.experience2.texts.text1.subtexts.sub4',
                                                                )}
                                                            </li>
                                                            <li>
                                                                -{' '}
                                                                {t(
                                                                    'about-page.experience.experience2.texts.text1.subtexts.sub5',
                                                                )}
                                                            </li>
                                                            <li>
                                                                -{' '}
                                                                {t(
                                                                    'about-page.experience.experience2.texts.text1.subtexts.sub6',
                                                                )}
                                                            </li>
                                                        </ul>
                                                        <h5>
                                                            2.{' '}
                                                            {t('about-page.experience.experience2.texts.text2.title')}:{' '}
                                                            <a
                                                                href="https://github.com/SinaverOsmanov/chat"
                                                                target="_blank"
                                                            >
                                                                Chat
                                                            </a>
                                                        </h5>
                                                        <ul>
                                                            <li>
                                                                -{' '}
                                                                {t(
                                                                    'about-page.experience.experience2.texts.text2.subtexts.sub1',
                                                                )}
                                                            </li>
                                                            <li>
                                                                -{' '}
                                                                {t(
                                                                    'about-page.experience.experience2.texts.text2.subtexts.sub2',
                                                                )}
                                                            </li>
                                                            <li>
                                                                -{' '}
                                                                {t(
                                                                    'about-page.experience.experience2.texts.text2.subtexts.sub3',
                                                                )}
                                                            </li>
                                                            <li>
                                                                -{' '}
                                                                {t(
                                                                    'about-page.experience.experience2.texts.text2.subtexts.sub4',
                                                                )}
                                                            </li>
                                                            <li>
                                                                -{' '}
                                                                {t(
                                                                    'about-page.experience.experience2.texts.text2.subtexts.sub5',
                                                                )}
                                                            </li>
                                                            <li>
                                                                -{' '}
                                                                {t(
                                                                    'about-page.experience.experience2.texts.text2.subtexts.sub6',
                                                                )}
                                                            </li>
                                                            <li>
                                                                -{' '}
                                                                {t(
                                                                    'about-page.experience.experience2.texts.text2.subtexts.sub7',
                                                                )}
                                                            </li>
                                                        </ul>
                                                        <h5>
                                                            3.{' '}
                                                            {t('about-page.experience.experience2.texts.text3.title')}:{' '}
                                                            <a href="https://ryadom.media/" target="_blank">
                                                                ryadom.media
                                                            </a>
                                                        </h5>
                                                        <ul>
                                                            <li>
                                                                -{' '}
                                                                {t(
                                                                    'about-page.experience.experience2.texts.text3.subtexts.sub1',
                                                                )}
                                                            </li>
                                                            <li>
                                                                -{' '}
                                                                {t(
                                                                    'about-page.experience.experience2.texts.text3.subtexts.sub2',
                                                                )}
                                                            </li>
                                                            <li>
                                                                -{' '}
                                                                {t(
                                                                    'about-page.experience.experience2.texts.text3.subtexts.sub3',
                                                                )}
                                                            </li>
                                                        </ul>
                                                    </p>
                                                </div>
                                                {t('about-page.experience.experience3.timeline')}
                                                <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h3 className="timeline-data">
                                                        <i className="fa fa-calendar"></i>
                                                        {t('about-page.experience.experience3.date.from')} 2020 —
                                                        {t('about-page.experience.experience3.date.to')} 2022
                                                    </h3>
                                                    <h4 className="timeline-title">
                                                        {t('about-page.experience.experience3.title')}
                                                    </h4>
                                                    <p className="timeline-text">
                                                        <h5>
                                                            1.{' '}
                                                            {t('about-page.experience.experience3.texts.text1.title')}
                                                        </h5>
                                                        <ul>
                                                            <li>
                                                                -{' '}
                                                                {t(
                                                                    'about-page.experience.experience3.texts.text1.subtexts.sub1',
                                                                )}
                                                            </li>
                                                            <li>
                                                                -{' '}
                                                                {t(
                                                                    'about-page.experience.experience3.texts.text1.subtexts.sub2',
                                                                )}
                                                            </li>
                                                            <li>
                                                                -{' '}
                                                                {t(
                                                                    'about-page.experience.experience3.texts.text1.subtexts.sub3',
                                                                )}
                                                            </li>
                                                        </ul>
                                                        <h5>
                                                            2.{' '}
                                                            {t('about-page.experience.experience3.texts.text2.title')}:{' '}
                                                            <a href="https://breakoutmessaging.com/" target="_blank">
                                                                breakoutmessaging
                                                            </a>
                                                        </h5>
                                                        <ul>
                                                            <li>
                                                                -{' '}
                                                                {t(
                                                                    'about-page.experience.experience3.texts.text2.subtexts.sub1',
                                                                )}
                                                            </li>
                                                        </ul>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </m.section>
        </LazyMotion>
    );
}
