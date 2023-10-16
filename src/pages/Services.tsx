import { ReactHelmet } from '@components/utils/ReactHelmet';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Services() {
    const { t } = useTranslation();

    return (
        <LazyMotion features={domAnimation}>
            <ReactHelmet title="Services" description="You can see what I can do" />
            <m.section
                initial={{ x: '100vw' }}
                animate={{ x: '0' }}
                transition={{ duration: 1, bounce: false, type: 'spring', damping: 15, stiffness: 70 }}
                className="service section"
                id="services"
            >
                <div className="container py-16">
                    <div className="row">
                        <div className="basis-full mb-14 section-title">
                            <h1>{t('services-page.title')}</h1>
                        </div>
                    </div>
                    <div className="row max-md:flex-wrap justify-between">
                        {/* Service item Start  */}
                        <m.div className="flex-custom-1/3 max-mg:flex-custom-full service-item mg:pr-3 max-mg:mb-5">
                            <div className="service-item-inner">
                                <div className="icon">
                                    <i className="fa fa-mobile-alt"></i>
                                </div>
                                <h4>{t('services-page.services.service1.title')}</h4>
                                <p>{t('services-page.services.service1.description')}</p>
                            </div>
                        </m.div>
                        {/* Service item End  */}
                        {/* Service item Start  */}
                        <m.div className="flex-custom-1/3 max-mg:flex-custom-full service-item mg:pr-3 max-mg:mb-5">
                            <div className="service-item-inner">
                                <div className="icon">
                                    <i className="fa fa-palette"></i>
                                </div>
                                <h4>{t('services-page.services.service2.title')}</h4>
                                <p>{t('services-page.services.service2.description')}</p>
                            </div>
                        </m.div>
                        {/* Service item End  */}
                        {/* Service item Start  */}
                        <m.div className="flex-custom-1/3 max-mg:flex-custom-full service-item max-mg:mb-5">
                            <div className="service-item-inner">
                                <div className="icon">
                                    <i className="fa fa-code"></i>
                                </div>
                                <h4>{t('services-page.services.service3.title')}</h4>
                                <p>{t('services-page.services.service3.description')}</p>
                            </div>
                        </m.div>
                        {/* Service item End  */}
                    </div>
                </div>
            </m.section>
        </LazyMotion>
    );
}
