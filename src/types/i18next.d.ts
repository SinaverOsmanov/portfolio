import TranslationEN from '@locales/en/translation.json';
import TranslationRU from '@locales/ru/translation.json';
import { Resources } from 'i18next';
import resources from './resources';

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: 'en',
        resources: typeof resources 
    }
}

