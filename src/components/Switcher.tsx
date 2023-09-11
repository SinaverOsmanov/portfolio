import { useEffect } from 'react';

export default function Switcher() {
    const alternateStyles = document.querySelectorAll('.alternate-style');

    function setActiveStyle(color: string) {
        alternateStyles.forEach(style => {
            if (color === style.getAttribute('title')) {
                style.removeAttribute('disabled');
            } else {
                style.setAttribute('disabled', 'true');
            }
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.querySelector('.style-switcher')?.classList.contains('open')) {
                document.querySelector('.style-switcher')?.classList.remove('open');
            }
        });
    }, []);

    useEffect(() => {
        const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
        if (styleSwitcherToggle)
            styleSwitcherToggle.addEventListener('click', () => {
                document.querySelector('.style-switcher')?.classList.toggle('open');
            });
    }, []);

    const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
    styleSwitcherToggle?.addEventListener('click', () => {
        document.querySelector('.style-switcher')?.classList.toggle('open');
    });

    return (
        <div className="style-switcher">
            <div className="style-switcher-toggler s-icon">
                <i className="fas fa-cog fa-spin"></i>
            </div>
            <div className="day-night s-icon">
                <i className="fas "></i>
            </div>
            <h4>Theme Colors</h4>
            <div className="colors">
                <span className="color-1" onClick={() => setActiveStyle('color-1')}></span>
                <span className="color-2" onClick={() => setActiveStyle('color-2')}></span>
                <span className="color-3" onClick={() => setActiveStyle('color-3')}></span>
                <span className="color-4" onClick={() => setActiveStyle('color-4')}></span>
                <span className="color-5" onClick={() => setActiveStyle('color-5')}></span>
            </div>
        </div>
    );
}
