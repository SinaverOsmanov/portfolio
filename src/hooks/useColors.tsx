import { useEffect, useState } from 'react';
import storeColors from '../store/storeColors';

function useStoreColors() {
    const { color, setColor } = storeColors();
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(count + 1);
    }, [color]);

    return { color, setColor };
}

export default useStoreColors;
