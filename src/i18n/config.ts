import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import resources from '@/@types/resources';

const defineLang = localStorage.getItem('i18nextLng') ?? "en"

i18next
    .use(Backend)
    .use(initReactI18next)
    .init({
        lng: defineLang,
        debug: true,
        resources: {
            en: {translation: resources.en},
            ru: {translation: resources.ru},
        },
        fallbackLng: ['en', 'ru'],
        supportedLngs: ['en', 'ru'],
        load: 'languageOnly',
        interpolation: {
            escapeValue: false,
        }
    });

export default i18next;
