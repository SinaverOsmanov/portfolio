import { redirectToExternalLink } from '@/helpers/redirectToExternalLink';
import { ReactHelmet } from '@components/utils/ReactHelmet';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { useTranslation } from 'react-i18next';

type PortfolioType = {
    src: string;
    alt: string;
    link: string;
};

const data: PortfolioType[] = [
    {
        src: './assets/breakout-img1.webp',
        alt: 'Breakout messages',
        link: 'https://breakoutmessaging.com',
    },
    {
        src: './assets/faject-img1.webp',
        alt: 'Faject',
        link: 'https://faject.com',
    },
    {
        src: './assets/ryadom-img1.webp',
        alt: 'Ryadom media',
        link: 'https://ryadom.media',
    },
];

export default function Cases() {
    const { t } = useTranslation();

    return (
        <LazyMotion features={domAnimation}>
            <ReactHelmet title="Cases" description="This page show my cases, what I did" />
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
                                onClick={() => redirectToExternalLink(p.link)}
                            >
                                <div className="portfolio-item-inner shadow-lg">
                                    <div className="portfolio-img">
                                        <img src={p.src} alt={p.alt} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </m.section>
        </LazyMotion>
    );
}

// const [portfolio, setPortfolio] = useState<PortfolioType | null>(null);
// const [showModal, setShowModal] = useState(false);

// const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
// };

// function toggleShowModal(payload: boolean) {
//     setShowModal(payload);
// }

// function choosePortfolio(p: PortfolioType) {
//     setPortfolio(p);
// }

// function openPortfolioWithDescription(p: PortfolioType) {
//     if (p !== null) {
//         choosePortfolio(p);
//         toggleShowModal(true);
//     }
// }

// <Modal
//     showModal={showModal}
//     setShowModal={toggleShowModal}
//     // onClose={}
//     content={
//         <div className="h-96">
//             <Slider {...settings}>
//                 {portfolio?.list.map(p => (
//                     <div className="h-full">
//                         <img src={p.src} alt={p.alt} />
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     }
// />;

// function Modal({
//     title,
//     content,
//     footer,
//     showModal,
//     setShowModal,
// }: {
//     title?: string;
//     content: ReactNode;
//     footer?: ReactNode | null;
//     showModal: boolean;
//     // closeModal: () => void;
//     setShowModal: (payload: boolean) => void;
// }) {
//     return (
//         <>
//             {showModal ? (
//                 <>
//                     <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
//                         <div className="relative md:w-auto my-6 mx-auto md:max-w-3xl max-md:w-screen max-md:px-5">
//                             {/*content*/}
//                             <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//                                 {/*header*/}
//                                 <div className="flex items-start align-top justify-between p-5 max-md:p-3 border-b border-solid border-slate-200 rounded-t">
//                                     <h3 className="text-3xl max-md:text-2xl font-semibold">{title || 'Portfolio'}</h3>
//                                     <button
//                                         className="p-1 text-xl ml-auto bg-transparent border-0 text-black float-right leading-none font-semibold outline-none focus:outline-none"
//                                         onClick={() => setShowModal(false)}
//                                     >
//                                         x
//                                     </button>
//                                 </div>
//                                 {/*body*/}
//                                 <div className="relative p-6 flex-auto">{content}</div>
//                                 {/*footer*/}
//                                 {!!footer && (
//                                     <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
//                                         {footer}
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="opacity-70 fixed inset-0 z-60 bg-black" onClick={() => setShowModal(false)}></div>
//                 </>
//             ) : null}
//         </>
//     );
// }
