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
    const dropdownRef = useClickOutsideRef(showList, () => handleCloseList());

    function handleToggleList() {
        setShowList(prev => !prev);
    }

    function handleCloseList() {
        setShowList(false);
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
                    className={`p-[7px] font-bold cursor-pointer bg-[--bg-black-900] transition-all relative text-[--text-black-900] text-sm ${
                        showList ? 'border-b-[1px] border-opacity-50 border-[--bg-black-50]' : ''
                    }`}
                >
                    <div>{lang.toUpperCase()}</div>
                    <div
                        className={`transition-transform duration-500 absolute right-2 top-[9px]  ${
                            showList ? 'rotate-180' : 'rotate-0'
                        }`}
                    >
                        <ArrowDownIcon />
                    </div>
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

function ArrowDownIcon() {
    return (
        <svg
            style={{ fill: 'var(--text-black-900)' }}
            height="14px"
            width="14px"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 330 330"
        >
            <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path>
        </svg>
    );
}
