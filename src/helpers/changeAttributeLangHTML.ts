import i18next from 'i18next';

function changeAttributeLangHTML() {

    const language = i18next.language
    debugger
    const lang = localStorage.getItem('i18nextLng') ?? language ?? 'en';

    if (lang !== language) document.querySelector('html')!.setAttribute('lang', lang);


    return language;
}

export default changeAttributeLangHTML;
