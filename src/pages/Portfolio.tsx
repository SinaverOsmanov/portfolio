import { LazyMotion, domAnimation, m } from 'framer-motion';
import { ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

type PortfolioType = {
    url: string;
    alt: string;
    list: Omit<PortfolioType, 'list'>[];
};

const data: PortfolioType[] = [
    {
        url: './assets/breakout-img1.png',
        alt: 'Breakout messages',
        list: [
            {
                url: './assets/breakout-img1.png',
                alt: 'image1',
            },
            {
                url: './assets/breakout-img2-mobile.png',
                alt: 'image2',
            },
            {
                url: './assets/breakout-img2.png',
                alt: 'image3',
            },
        ],
    },
    {
        url: './assets/faject-img1.png',
        alt: 'Faject',
        list: [
            {
                url: './assets/faject-img1.png',
                alt: 'image1',
            },
            {
                url: './assets/faject-img1-mobile.png',
                alt: 'image2',
            },
            {
                url: './assets/faject-img1-tablet.png',
                alt: 'image3',
            },
        ],
    },
    {
        url: './assets/ryadom-img1.png',
        alt: 'Ryadom media',
        list: [
            {
                url: './assets/ryadom-img1.png',
                alt: 'image1',
            },
            {
                url: './assets/ryadom-img1-mobile.png',
                alt: 'image2',
            },
            {
                url: './assets/ryadom-img1-tablet.png',
                alt: 'image3',
            },
        ],
    },
];

export default function Portfolio() {
    const { t } = useTranslation();

    const [portfolio, setPortfolio] = useState<PortfolioType | null>(null);
    const [showModal, setShowModal] = useState(false);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    function toggleShowModal(payload: boolean) {
        setShowModal(payload);
    }

    function choosePortfolio(p: PortfolioType) {
        setPortfolio(p);
    }

    function openPortfolioWithDescription(p: PortfolioType) {
        if (p !== null) {
            choosePortfolio(p);
            toggleShowModal(true);
        }
    }

    return (
        <LazyMotion features={domAnimation}>
            <m.section
                initial={{ x: '100vw' }}
                animate={{ x: '0' }}
                transition={{ duration: 1, bounce: false, type: 'spring', damping: 15, stiffness: 70 }}
                className="portfolio section"
                id="portfolio"
            >
                <div className="container py-16">
                    <div className="row">
                        <div className="flex-custom-full mb-14 section-title">
                            <h1>{t('portfolio-page.title')}</h1>
                        </div>
                    </div>
                    <div className="row mb-10">
                        <div className="portfolio-heiding">
                            <h2 className="font-bold">{t('portfolio-page.projects-title')}:</h2>
                        </div>
                    </div>
                    <div className="row flex-wrap gap-y-3">
                        {data.map(p => (
                            <div
                                className="max-sl:flex-custom-full max-xl:flex-custom-1/2 sl:pr-3 ls:flex-custom-1/3 portfolio-item"
                                onClick={() => openPortfolioWithDescription(p)}
                            >
                                <div className="portfolio-item-inner shadow-lg">
                                    <div className="portfolio-img">
                                        <img src={p.url} alt={p.alt} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Modal
                    showModal={showModal}
                    setShowModal={toggleShowModal}
                    // onClose={}
                    content={
                        <Slider {...settings}>
                            {portfolio?.list.map(p => (
                                <div className="portfolio-img">
                                    <img src={p.url} alt={p.alt} />
                                </div>
                            ))}
                        </Slider>
                    }
                />
            </m.section>
        </LazyMotion>
    );
}

function Modal({
    title,
    content,
    footer,
    showModal,
    setShowModal,
}: {
    title?: string;
    content: ReactNode;
    footer?: ReactNode | null;
    showModal: boolean;
    // closeModal: () => void;
    setShowModal: (payload: boolean) => void;
}) {
    return (
        <>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative md:w-auto my-6 mx-auto md:max-w-3xl max-md:w-screen max-md:px-5">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start align-top justify-between p-5 max-md:p-3 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl max-md:text-2xl font-semibold">{title || 'Portfolio'}</h3>
                                    <button
                                        className="p-1 text-xl ml-auto bg-transparent border-0 text-black float-right leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        x
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">{content}</div>
                                {/*footer*/}
                                {!!footer && (
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        {footer}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="opacity-70 fixed inset-0 z-60 bg-black" onClick={() => setShowModal(false)}></div>
                </>
            ) : null}
        </>
    );
}
