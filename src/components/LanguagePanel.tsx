import useClickOutsideRef from '@hooks/useClickOutsideRef';
import localStorageService from '@services/localStorage.service';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguagePanel() {
    const {
        t,
        i18n: { language, changeLanguage },
    } = useTranslation();
    const [lang, setLang] = useState<string>(language);
    const [showList, setShowList] = useState<boolean>(false);
    const { elementRef: dropdownRef, off } = useClickOutsideRef(showList, () => handleCloseList());

    function handleToggleList() {
        setShowList(prev => !prev);
    }

    function handleCloseList() {
        setShowList(false);
        off();
    }

    function clickHandleLanguage(language: 'en' | 'ru') {
        setLang(language);
        localStorageService.setTokens().lang(language);
    }

    useEffect(() => {
        if (lang !== language) {
            changeLanguage(lang);
        }
    }, [lang]);

    useEffect(() => {
        if (!localStorageService.getTokens().lang) {
            localStorageService.setTokens().lang(language);
        }
    }, []);

    return (
        <>
            <h3 className="block mb-2 text-sm font-bold text-[--text-black-900]">{t('navigation.lang')}</h3>
            <div
                className="languages w-16 border border-[--skin-color] transition-all rounded-lg focus:ring-[--skin-color] focus:border-[--skin-color] dark:focus:ring-[--skin-color] dark:focus:border-[--skin-color] overflow-hidden"
                id="languages"
                ref={dropdownRef}
            >
                <div
                    onClick={handleToggleList}
                    className={`p-[7px] font-bold cursor-pointer bg-[--bg-black-900] transition-all  text-[--text-black-900] text-sm ${
                        showList ? 'border-b-[1px] border-opacity-50 border-[--bg-black-50]' : ''
                    }`}
                >
                    {lang.toUpperCase()}
                </div>
                <div
                    className={`lang-list cursor-pointer bg-[--bg-black-100] transition-all duration-500 overflow-hidden text-[--text-black-900] ${
                        showList ? 'h-[68px]' : 'h-0'
                    }`}
                >
                    <div onClick={() => clickHandleLanguage('en')}>EN</div>
                    <div onClick={() => clickHandleLanguage('ru')}>RU</div>
                </div>
            </div>
        </>
    );
}
