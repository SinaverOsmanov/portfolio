import { useEffect, useRef } from 'react';

function useClickOutsideRef<T>(active: T, cb: () => void) {
    const elementRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (elementRef.current && !elementRef.current.contains(event.target as Node)) {
            console.log('Clicked outside the dropdown');
            cb();
        }
    };

    function off() {
        document.removeEventListener('click', handleClickOutside);
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [active]);

    return { elementRef, off };
}

export default useClickOutsideRef;
