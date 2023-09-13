import { useEffect, useState } from 'react';

export default function Switcher() {
    const [dark, setDark] = useState(false);
    const [colors, setColors] = useState(false);

    function changeDark() {
        const isDark = document.body.classList.contains('dark');

        if (isDark) {
            document.body.classList.remove('dark');
        } else {
            document.body.classList.add('dark');
        }

        setDark(prev => !prev);
    }

    function changeColors() {
        setColors(prev => !prev);
    }
    // useEffect(() => {
    //     const dayNight = document.querySelector('.day-night');

    //     if (dayNight) {
    //         dayNight.addEventListener('click', () => {
    //             dayNight.querySelector('i')?.classList.toggle('fa-sun');
    //             dayNight.querySelector('i')?.classList.toggle('fa-moon');
    //             document.body.classList.toggle('dark');
    //         });

    //         window.addEventListener('load', () => {
    //             if (document.body.classList.contains('dark')) {
    //                 dayNight.querySelector('i')?.classList.add('fa-sun');
    //             } else {
    //                 dayNight.querySelector('i')?.classList.add('fa-moon');
    //             }
    //         });
    //     }
    //     return () => {
    //         window.removeEventListener('load', () => {});
    //     };
    // }, []);
    // const alternateStyles = document.querySelectorAll('.alternate-style');

    function setActiveStyle(color: string) {
        console.log(color);

        // alternateStyles.forEach(style => {
        //     if (color === style.getAttribute('title')) {
        //         style.removeAttribute('disabled');
        //     } else {
        //         style.setAttribute('disabled', 'true');
        //     }
        // });
    }

    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         if (document.querySelector('.style-switcher')?.classList.contains('open')) {
    //             document.querySelector('.style-switcher')?.classList.remove('open');
    //         }
    //     });
    // }, []);
    // const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
    // styleSwitcherToggle?.addEventListener('click', () => {
    //     document.querySelector('.style-switcher')?.classList.toggle('open');
    // });

    return (
        <div className={`style-switcher ${colors ? 'open' : ''}`}>
            <div className="flex flex-col btns">
                <div className="flex flex-row mb-2">
                    <div className="style-switcher-toggler s-icon" onClick={changeColors}>
                        <i className="fas fa-cog fa-spin"></i>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="day-night s-icon" onClick={changeDark}>
                        <i className={`fas fa-${dark ? 'sun' : 'moon'}`} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <h4>Theme Colors</h4>
                <div className={`colors`}>
                    <span className="color-1" onClick={() => setActiveStyle('color-1')}></span>
                    <span className="color-2" onClick={() => setActiveStyle('color-2')}></span>
                    <span className="color-3" onClick={() => setActiveStyle('color-3')}></span>
                    <span className="color-4" onClick={() => setActiveStyle('color-4')}></span>
                    <span className="color-5" onClick={() => setActiveStyle('color-5')}></span>
                </div>
            </div>
        </div>
    );
}
