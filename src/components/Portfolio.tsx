import { motion } from 'framer-motion';

export default function Portfolio() {
    return (
        <motion.section
            initial={{ x: '100vw' }}
            animate={{ x: '0' }}
            transition={{ duration: 1, bounce: true, type: 'spring', damping: 12, stiffness: 70 }}
            className="portfolio section"
            id="portfolio"
        >
            <div className="container py-16">
                <div className="row">
                    <div className="flex-custom-full mb-14 section-title">
                        <h1>Portfolio</h1>
                    </div>
                </div>
                <div className="row mb-10">
                    <div className="portfolio-heiding">
                        <h2 className="font-bold">My Last Projects :</h2>
                    </div>
                </div>
                <div className="row flex-wrap gap-y-3">
                    {/* portfolio item start  */}
                    <div className="max-sl:flex-custom-full max-xl:flex-custom-1/2 sl:pr-3 ls:flex-custom-1/3 portfolio-item">
                        <div className="portfolio-item-inner shadow-lg">
                            <div className="portfolio-img">
                                <img src="/assets/portfolio1.webp" alt="portfolio1" />
                            </div>
                        </div>
                    </div>
                    {/* portfolio item end  */}
                    {/* portfolio item start  */}
                    <div className="max-sl:flex-custom-full max-xl:flex-custom-1/2 sl:pr-3 ls:flex-custom-1/3 portfolio-item">
                        <div className="portfolio-item-inner shadow-lg">
                            <div className="portfolio-img">
                                <img src="/assets/portfolio2.webp" alt="portfolio2" />
                            </div>
                        </div>
                    </div>
                    {/* portfolio item end  */}
                    {/* portfolio item start  */}
                    <div className="max-sl:flex-custom-full max-xl:flex-custom-1/2 sl:pr-3 ls:flex-custom-1/3 portfolio-item">
                        <div className="portfolio-item-inner shadow-lg">
                            <div className="portfolio-img">
                                <img src="/assets/portfolio3.webp" alt="portfolio3" />
                            </div>
                        </div>
                    </div>
                    {/* portfolio item end  */}
                    {/* portfolio item start  */}
                    <div className="max-sl:flex-custom-full max-xl:flex-custom-1/2 sl:pr-3 ls:flex-custom-1/3 portfolio-item">
                        <div className="portfolio-item-inner shadow-lg">
                            <div className="portfolio-img">
                                <img src="/assets/portfolio4.jpeg" alt="portfolio4" />
                            </div>
                        </div>
                    </div>
                    {/* portfolio item end  */}
                    {/* portfolio item start  */}
                    <div className="max-sl:flex-custom-full max-xl:flex-custom-1/2 sl:pr-3 ls:flex-custom-1/3 portfolio-item">
                        <div className="portfolio-item-inner shadow-lg">
                            <div className="portfolio-img">
                                <img src="/assets/portfolio5.webp" alt="portfolio5" />
                            </div>
                        </div>
                    </div>
                    {/* portfolio item end  */}
                    {/* portfolio item start  */}
                    <div className="max-sl:flex-custom-full max-xl:flex-custom-1/2 sl:pr-3 ls:flex-custom-1/3 portfolio-item">
                        <div className="portfolio-item-inner shadow-lg">
                            <div className="portfolio-img">
                                <img src="/assets/portfolio6.webp" alt="portfolio6" />
                            </div>
                        </div>
                    </div>
                    {/* portfolio item end  */}
                </div>
            </div>
        </motion.section>
    );
}
