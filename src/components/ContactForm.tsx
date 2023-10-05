import emailjs from '@emailjs/browser';
import { SVGProps, useEffect, useRef, useState } from 'react';
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
    const {
        register,
        handleSubmit,
        formState: {},
    } = useForm<FormValues>();
    const { t } = useTranslation();
    const [formResult, setFormResult] = useState(false);
    const [animate, setAnimate] = useState(false);

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
                                required
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
                                required
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
                                required
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
                                required
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="flex-custom-full form-item">
                        <button type="submit" className={`btn h-12 ${animate && '!p-4'}`}>
                            <div>{t('contact-page.form-button')}</div>
                            <div className={`transition-all ${animate ? 'opacity-100 block' : 'opacity-0 hidden'}`}>
                                {formResult ? <AcceptIcon /> : <DeniedIcon />}
                            </div>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

function AcceptIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="#7fff00"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="35px"
            height="35px"
            {...props}
        >
            <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.5,0-8-3.5-8-8s3.5-8,8-8s8,3.5,8,8S16.5,20,12,20z"></path>
            <polygon points="9.8,16.8 6.1,13.2 7.5,11.7 9.8,14 15.5,7.9 17,9.3 "></polygon>
        </svg>
    );
}

function DeniedIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ff0000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="35px"
            height="35px"
            {...props}
        >
            <line x1="15" y1="15" x2="9" y2="9"></line>
            <line x1="9" y1="15" x2="15" y2="9"></line>
            <circle cx="12" cy="12" r="9" style={{ fill: 'none', stroke: '#ff0000', strokeWidth: 2 }}></circle>
        </svg>
    );
}
