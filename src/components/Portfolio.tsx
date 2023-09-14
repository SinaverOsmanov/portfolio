export default function Portfolio() {
    return (
        <section className="portfolio section" id="portfolio">
            <div className="container pt-16">
                <div className="row">
                    <div className="basis-full mb-14 section-title">
                        <h2>Portfolio</h2>
                    </div>
                </div>
                <div className="row mb-10">
                    <div className="portfolio-heiding">
                        <h2 className="font-bold">My Last Projects :</h2>
                    </div>
                </div>
                <div className="row">
                    {/* portfolio item start  */}
                    <div className="portfolio-item">
                        <div className="portfolio-item-inner shadow-lg">
                            <div className="portfolio-img">
                                <img src="/assets/portfolio1.webp" alt="" />
                            </div>
                        </div>
                    </div>
                    {/* portfolio item end  */}
                    {/* portfolio item start  */}
                    <div className="portfolio-item">
                        <div className="portfolio-item-inner shadow-lg">
                            <div className="portfolio-img">
                                <img src="/assets/portfolio2.webp" alt="" />
                            </div>
                        </div>
                    </div>
                    {/* portfolio item end  */}
                    {/* portfolio item start  */}
                    <div className="portfolio-item">
                        <div className="portfolio-item-inner shadow-lg">
                            <div className="portfolio-img">
                                <img src="/assets/portfolio3.webp" alt="" />
                            </div>
                        </div>
                    </div>
                    {/* portfolio item end  */}
                    {/* portfolio item start  */}
                    <div className="portfolio-item">
                        <div className="portfolio-item-inner shadow-lg">
                            <div className="portfolio-img">
                                <img src="/assets/portfolio4.jpeg" alt="" />
                            </div>
                        </div>
                    </div>
                    {/* portfolio item end  */}
                    {/* portfolio item start  */}
                    <div className="portfolio-item">
                        <div className="portfolio-item-inner shadow-lg">
                            <div className="portfolio-img">
                                <img src="/assets/portfolio5.webp" alt="" />
                            </div>
                        </div>
                    </div>
                    {/* portfolio item end  */}
                    {/* portfolio item start  */}
                    <div className="portfolio-item">
                        <div className="portfolio-item-inner shadow-lg">
                            <div className="portfolio-img">
                                <img src="/assets/portfolio6.webp" alt="" />
                            </div>
                        </div>
                    </div>
                    {/* portfolio item end  */}
                </div>
            </div>
        </section>
    );
}
