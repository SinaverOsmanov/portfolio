import { useForm } from 'react-hook-form';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';

export default function Contact() {
    const { t } = useTranslation();

    return (
        <LazyMotion features={domAnimation}>
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
                        <div className="flex-custom-1/4 max-ls:flex-custom-1/2 max-md:flex-custom-full contact-info-item break-words">
                            <div className="icon">
                                <i className="fa fa-brands fa-telegram"></i>
                            </div>
                            <h4>{t('contact-page.services.write-me')}</h4>
                            <p
                                className="cursor-pointer hover:underline hover:text-[var(--skin-color)]"
                                onClick={() => (window.location.href = 'https://t.me/mr_osmanov')}
                            >
                                @Mr_Osmanov
                            </p>
                        </div>
                        {/* Contact info item end  */}
                        {/* Contact info item start  */}
                        <div className="flex-custom-1/4 max-ls:flex-custom-1/2 max-md:flex-custom-full contact-info-item break-words">
                            <div className="icon">
                                <i className="fa fa-map-marker-alt"></i>
                            </div>
                            <h4>{t('contact-page.services.address')}</h4>
                            <p>Crimea, Evpatoriya</p>
                        </div>
                        {/* Contact info item end  */}
                        {/* Contact info item start  */}
                        <div className="flex-custom-1/4 max-ls:flex-custom-1/2 max-md:flex-custom-full contact-info-item break-words">
                            <div className="icon">
                                <i className="fa fa-envelope"></i>
                            </div>
                            <h4>{t('contact-page.services.mail')}</h4>
                            <p
                                className="cursor-pointer hover:underline hover:text-[var(--skin-color)]"
                                onClick={() => (window.location.href = 'https://mail.google.com/')}
                            >
                                sinaver.osmanov@gmail.com
                            </p>
                        </div>
                        {/* Contact info item end  */}
                        {/* Contact info item start  */}
                        <div className="flex-custom-1/4 max-ls:flex-custom-1/2 max-md:flex-custom-full contact-info-item break-words">
                            <div className="icon">
                                <i className="fa fa-globe-asia"></i>
                            </div>
                            <h4>{t('contact-page.services.git')}</h4>
                            <p
                                className="cursor-pointer hover:underline hover:text-[var(--skin-color)]"
                                onClick={() => (window.location.href = 'https://github.com/SinaverOsmanov')}
                            >
                                SinaverOsmanov
                            </p>
                            <p
                                className="cursor-pointer hover:underline hover:text-[var(--skin-color)]"
                                onClick={() => (window.location.href = 'https://github.com/SinaverFrontend')}
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

type FormValues = {
    name: string;
    subject: string;
    email: string;
    message: string;
};

function ContactForm() {
    const form = useRef(null);
    const { register, handleSubmit } = useForm<FormValues>();
    const { t } = useTranslation();

    const onSubmit = (data: any) => {
        // emailjs.sendForm(process.env.SERVICE_ID, 'template_dijtokg', form.current!, 'OiAYajDR_DHv1IuAj').then(
        //     result => {
        //         console.log(result.text);
        //     },
        //     error => {
        //         console.log(error.text);
        //     },
        // );
    };

    return (
        <div className="flex-custom-full contact-form">
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                <div className="row gap-x-3">
                    <div className="flex-col grow form-item">
                        <div className="form-group">
                            <input
                                {...register('name')}
                                type="text"
                                className="form-control"
                                placeholder={t('contact-page.form.name')}
                            />
                        </div>
                    </div>
                    <div className="flex-col grow form-item">
                        <div className="form-group">
                            <input
                                {...register('email')}
                                type="email"
                                className="form-control"
                                placeholder={t('contact-page.form.email')}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="flex-custom-full form-item">
                        <div className="form-group">
                            <input
                                {...register('subject')}
                                type="text"
                                className="form-control"
                                placeholder={t('contact-page.form.subject')}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="flex-custom-full form-item">
                        <div className="form-group">
                            <textarea
                                {...register('message')}
                                className="form-control"
                                placeholder={t('contact-page.form.message')}
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="flex-custom-full form-item">
                        <button type="submit" className="btn">
                            {t('contact-page.form-button')}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
