import { Helmet } from 'react-helmet';

export function ReactHelmet({ title, description }: { title: string; description: string }) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
    );
}
