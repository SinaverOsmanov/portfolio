import { useState, ChangeEvent, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguagePanel() {
    const {
        t,
        i18n: { language, changeLanguage, languages },
    } = useTranslation();
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [lang, setLang] = useState<string>(language);
    const [showList, setShowList] = useState<boolean>(false);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            console.log('Clicked outside the dropdown');
            setShowList(false);
        }
    };

    useEffect(() => {
        if (lang !== language) {
            changeLanguage(lang);
        }
    }, [lang]);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <>
            <label htmlFor="languages" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                {t('navigation.lang')}
            </label>
            <div id="languages" ref={dropdownRef}>
                <div
                    onClick={() => setShowList(!showList)}
                    className="cursor-pointer custom-select w-16 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[--skin-color] focus:border-[--skin-color] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[--skin-color] dark:focus:border-[--skin-color]"
                >
                    {lang.toUpperCase()}
                </div>
                <div className={`transition-all duration-500 overflow-hidden ${showList ? 'h-28' : 'h-0'}`}>
                    <div onClick={() => setLang('en')}>EN</div>
                    <div onClick={() => setLang('ru')}>RU</div>
                </div>
            </div>
        </>
    );
}
