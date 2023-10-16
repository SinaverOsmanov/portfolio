import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Sequence, Speed, TypeAnimation } from 'react-type-animation';

const TypeAnimate = memo(function ({
    sequence,
    speed,
    repeat,
}: {
    sequence: Sequence;
    speed?: Speed;
    repeat?: number;
}) {
    const {
        i18n: { language },
    } = useTranslation();

    const [uniqueKey, setUniqueKey] = useState<number>(() => Date.now());

    useEffect(() => {
        setUniqueKey(Date.now());
    }, [language]);

    return (
        <TypeAnimation
            key={uniqueKey}
            sequence={sequence}
            wrapper="span"
            speed={speed}
            className="ml-2"
            repeat={repeat}
        />
    );
});

export default TypeAnimate;
