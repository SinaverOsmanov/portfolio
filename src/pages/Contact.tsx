import { useForm } from 'react-hook-form';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import ContactForm from '@components/ContactForm';
import { redirectToExternalLink } from '@/helpers/redirectToExternalLink';
import { ReactHelmet } from '@components/ReactHelmet';

export default function Contact() {
    const { t } = useTranslation();

    return (
        <LazyMotion features={domAnimation}>
            <ReactHelmet title="Contact" description="Portfolio ContactPage" />
            <m.section
                initial={{ x: '100vw' }}
                animate={{ x: '0' }}
                transition={{ duration: 1, bounce: false, type: 'spring', damping: 15, stiffness: 70 }}
                className="contact section"
                id="contact"
            >
                <div className="container py-16">
                    <div className="row">
                        <div className="flex-custom-full mb-14 section-title">
                            <h1>{t('contact-page.title')}</h1>
                        </div>
                    </div>
                    <h3 className="contact-title">{t('contact-page.contact-question-title')}</h3>
                    <h4 className="contact-sub-title">{t('contact-page.contact-question-subtitle')}</h4>
                    <div className="row flex-wrap">
                        {/* Contact info item start  */}
                        <div className="md:flex-custom-1/3 max-md:flex-custom-full contact-info-item break-words">
                            <div className="icon">
                                <i className="fa fa-brands fa-telegram"></i>
                            </div>
                            <h4>{t('contact-page.services.write-me')}</h4>
                            <p
                                className="cursor-pointer hover:underline hover:text-[var(--skin-color)]"
                                onClick={() => redirectToExternalLink('https://t.me/mr_osmanov')}
                            >
                                @Mr_Osmanov
                            </p>
                        </div>
                        {/* Contact info item end  */}
                        {/* Contact info item start  */}
                        <div className="md:flex-custom-1/3 max-md:flex-custom-full contact-info-item break-words">
                            <div className="icon">
                                <i className="fa fa-envelope"></i>
                            </div>
                            <h4>{t('contact-page.services.mail')}</h4>
                            <p
                                className="cursor-pointer hover:underline hover:text-[var(--skin-color)]"
                                onClick={() => redirectToExternalLink('https://mail.google.com/')}
                            >
                                sinaver.osmanov@gmail.com
                            </p>
                        </div>
                        {/* Contact info item end  */}
                        {/* Contact info item start  */}
                        <div className="md:flex-custom-1/3 max-md:flex-custom-full contact-info-item break-words">
                            <div className="icon">
                                <i className="fa fa-globe-asia"></i>
                            </div>
                            <h4>{t('contact-page.services.git')}</h4>
                            <p
                                className="cursor-pointer hover:underline hover:text-[var(--skin-color)]"
                                onClick={() => redirectToExternalLink('https://github.com/SinaverOsmanov')}
                            >
                                SinaverOsmanov
                            </p>
                            <p
                                className="cursor-pointer hover:underline hover:text-[var(--skin-color)]"
                                onClick={() => redirectToExternalLink('https://github.com/SinaverFrontend')}
                            >
                                SinaverFrontent
                            </p>
                        </div>
                        {/* Contact info item end  */}
                    </div>
                    <h3 className="contact-title">{t('contact-page.form-title')}</h3>
                    <h4 className="contact-sub-title">{t('contact-page.form-description')}</h4>
                    {/* Contact Form  */}
                    <div className="row">
                        <ContactForm />
                    </div>
                </div>
            </m.section>
        </LazyMotion>
    );
}
