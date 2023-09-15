import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import TranslationEN from './locales/en/translation.json';
import TranslationRU from './locales/ru/translation.json';

const resources = {
    en: { translation: TranslationEN },
    ru: { translation: TranslationRU },
};

i18next
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: resources,
        debug: true,
        lng: 'en',
        fallbackLng: ['en', 'ru'],
        supportedLngs: ['en', 'ru'],
        load: 'languageOnly',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18next;
