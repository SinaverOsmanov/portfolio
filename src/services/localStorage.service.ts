const LANG_KEY = 'i18nextLng';
const SKIN_KEY = 'skin';

const keys = LANG_KEY || SKIN_KEY

type LocalStorageType = {
    lang: (token: string) => void,
    skin: (token: string) => void
}


export function setTokens(): LocalStorageType {
    return {
        lang: (token: string) => localStorage.setItem(LANG_KEY, token),
        skin: (token: string) => localStorage.setItem(SKIN_KEY, token),
    };
}

export function getTokens() {
    return { lang: localStorage.getItem(LANG_KEY), skin: localStorage.getItem(SKIN_KEY) };
}

export function removeTokens() {
    return { lang: localStorage.removeItem(LANG_KEY), skin: localStorage.removeItem(SKIN_KEY) };
}

const localStorageService = {
    setTokens,
    getTokens,
    removeTokens,
};

export default localStorageService as typeof localStorageService;
