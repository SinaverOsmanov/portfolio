import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

type FormValues = {
    name: string;
    subject: string;
    email: string;
    message: string;
};

export default function ContactForm() {
    const form = useRef(null);
    const { register, handleSubmit } = useForm<FormValues>();
    const { t } = useTranslation();

    const onSubmit = () => {};

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
