import { useEffect, useState } from 'react';
import { Loading } from './Loading';
import { useTranslation } from 'react-i18next';

function I18nLoading() {
    const {
        i18n: { language },
    } = useTranslation();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const timeout = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timeout);
    }, [language]);

    if (loading) return <Loading />;
}

export default I18nLoading;
