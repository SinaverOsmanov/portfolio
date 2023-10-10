import localStorageService from '@services/localStorage.service';
import useStoreTheme from '../store/storeTheme';
import { useState, useEffect } from 'react';
import useClickOutsideRef from '@hooks/useClickOutsideRef';

export default function Switcher() {
    const [openColors, setOpenColors] = useState(false);
    const { getTokens, setTokens } = localStorageService;
    const colorRef = useClickOutsideRef(openColors, () => setOpenColors(false));

    const { dark, toggleDark } = useStoreTheme();

    function changeDark() {
        const isDark = document.body.classList.contains('dark');

        if (isDark) {
            document.body.classList.remove('dark');
            setTokens().darkTheme(false);
        } else {
            document.body.classList.add('dark');
            setTokens().darkTheme(true);
        }

        toggleDark();
    }

    function changeColors() {
        setOpenColors(prev => !prev);
    }

    function getColor(color?: string): string {
        let skinColor = '#1854b4';
        const hasColor = getTokens().skin;

        switch (color) {
            case 'color1':
                return '#ec1839';
            case 'color2':
                return '#fa5b0f';
            case 'color3':
                return '#37b182';
            case 'color4':
                return '#1854b4';
            case 'color5':
                return '#f021b2';
            default:
                return hasColor ? hasColor : skinColor;
        }
    }

    function setActiveStyle(c: string) {
        const color = getColor(c);

        setTokens().skin(color);

        document.body.style.setProperty('--skin-color', color);
    }

    useEffect(() => {
        const skinColor = getTokens().skin;
        const themeColor = getTokens().darkTheme;

        if (!skinColor) {
            const color = getColor();

            setTokens().skin(color);
            document.body.style.setProperty('--skin-color', color);
        } else {
            document.body.style.setProperty('--skin-color', skinColor);
        }

        if (!themeColor) {
            setTokens().darkTheme(false);
            document.body.classList.remove('dark');
        } else {
            setTokens().darkTheme(true);
            document.body.classList.add('dark');
        }
    }, []);

    return (
        <div className={`max-lg:top-20 top-5 relative style-switcher `}>
            <div className="flex flex-col btns">
                <div className="flex flex-row rounded-full mb-2">
                    <button className="s-icon shadow-md" onClick={changeDark}>
                        <i className={`fas fa-${dark ? 'sun' : 'moon'}`} />
                    </button>
                </div>
                <div
                    ref={colorRef}
                    className={`bg-[color:var(--bg-black-100)] flex flex-row transition-all duration-500 relative overflow-hidden shadow-md rounded-full ${
                        openColors ? 'h-[220px]' : 'h-10'
                    }`}
                >
                    <button className="z-20 rounded-full s-icon" onClick={changeColors}>
                        <i className="fa-solid fa-palette"></i>
                    </button>
                    <div className={`colors flex-col absolute left-0 bottom-1 z-10 rounded-full`}>
                        <span className="color-1 mb-1" onClick={() => setActiveStyle('color1')}></span>
                        <span className="color-2 mb-1" onClick={() => setActiveStyle('color2')}></span>
                        <span className="color-3 mb-1" onClick={() => setActiveStyle('color3')}></span>
                        <span className="color-4 mb-1" onClick={() => setActiveStyle('color4')}></span>
                        <span className="color-5 mb-1" onClick={() => setActiveStyle('color5')}></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
