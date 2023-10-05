import { useEffect, useRef } from 'react';

function useClickOutsideRef(cb: () => void) {
    const elementRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (elementRef.current && !elementRef.current.contains(event.target as Node)) {
            console.log('Clicked outside the dropdown');
            cb();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return elementRef;
}

export default useClickOutsideRef;
