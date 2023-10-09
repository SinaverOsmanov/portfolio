const LANG_KEY = 'i18nextLng';
const SKIN_KEY = 'skin';
const DARK_THEME_KEY = 'dark-theme';

type LocalStorageType = {
    lang: (token: string) => void,
    skin: (token: string) => void,
    darkTheme: (token: boolean) => void,
}

export function setTokens(): LocalStorageType {
    return {
        lang: (token) => localStorage.setItem(LANG_KEY, token),
        skin: (token) => localStorage.setItem(SKIN_KEY, token),
        darkTheme: (token) => localStorage.setItem(DARK_THEME_KEY, JSON.stringify(token)),
    };
}



export function getTokens() {
    return { 
        lang: localStorage.getItem(LANG_KEY), 
        skin: localStorage.getItem(SKIN_KEY),
        darkTheme: JSON.parse(localStorage.getItem(DARK_THEME_KEY) ?? JSON.stringify(false)),
    };
}

export function removeTokens() {
    return { 
        lang: localStorage.removeItem(LANG_KEY), 
        skin: localStorage.removeItem(SKIN_KEY),
        darkTheme: localStorage.removeItem(DARK_THEME_KEY),
    };
}

const localStorageService = {
    setTokens,
    getTokens,
    removeTokens,
};

export default localStorageService as typeof localStorageService;
