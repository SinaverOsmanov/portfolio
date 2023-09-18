import useStoreColors from '../store/storeColors';
import useStoreTheme from '../store/storeTheme';
import { useState, useEffect } from 'react';

export default function Switcher() {
    const [openColors, setOpenColors] = useState(false);

    const { dark, toggleDark } = useStoreTheme();

    function changeDark() {
        const isDark = document.body.classList.contains('dark');

        if (isDark) {
            document.body.classList.remove('dark');
        } else {
            document.body.classList.add('dark');
        }

        toggleDark();
    }

    function changeColors() {
        setOpenColors(prev => !prev);
    }

    function getColor(color?: string): string {
        let skinColor = '#1854b4';
        const hasColor = JSON.parse(localStorage.getItem('skin')!);

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

        localStorage.setItem('skin', JSON.stringify(color));

        document.body.style.setProperty('--skin-color', color);
    }

    useEffect(() => {
        const body = document.body;

        const computedStyle = getComputedStyle(body);
        const colorValue = computedStyle.getPropertyValue('--skin-color');
        const skinColor = JSON.parse(localStorage.getItem('skin') || JSON.stringify(''));

        if (!skinColor) {
            const color = getColor();
            localStorage.setItem('skin', JSON.stringify(colorValue));
            document.body.style.setProperty('--skin-color', color);
        } else {
            document.body.style.setProperty('--skin-color', skinColor);
        }
    }, []);

    return (
        <div className={`max-lg:hidden style-switcher ${openColors ? 'open' : ''}`}>
            <div className="flex flex-col btns">
                <div className="flex flex-row mb-2">
                    <div className="style-switcher-toggler s-icon" onClick={changeColors}>
                        <i className="fas fa-cog fa-spin"></i>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="s-icon" onClick={changeDark}>
                        <i className={`fas fa-${dark ? 'sun' : 'moon'}`} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <h4>Theme Colors</h4>
                <div className="colors">
                    <span className="color-1" onClick={() => setActiveStyle('color1')}></span>
                    <span className="color-2" onClick={() => setActiveStyle('color2')}></span>
                    <span className="color-3" onClick={() => setActiveStyle('color3')}></span>
                    <span className="color-4" onClick={() => setActiveStyle('color4')}></span>
                    <span className="color-5" onClick={() => setActiveStyle('color5')}></span>
                </div>
            </div>
        </div>
    );
}
