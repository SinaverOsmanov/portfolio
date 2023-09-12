export default function Portfolio() {
    return (
        <section className="portfolio section" id="portfolio">
            <div className="container pt-16">
                <div className="row">
                    <div className="basis-full mb-14 section-title padd-15">
                        <h2>Portfolio</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="portfolio-heiding padd-15">
                        <h2>My Last Projects :</h2>
                    </div>
                </div>
                <div className="row">
                    {/* portfolio item start  */}
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <img src="images/portfolio1.webp" alt="" />
                            </div>
                        </div>
                    </div>
                    {/* portfolio item end  */}
                    {/* portfolio item start  */}
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <img src="images/portfolio2.webp" alt="" />
                            </div>
                        </div>
                    </div>
                    {/* portfolio item end  */}
                    {/* portfolio item start  */}
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <img src="images/portfolio3.webp" alt="" />
                            </div>
                        </div>
                    </div>
                    {/* portfolio item end  */}
                    {/* portfolio item start  */}
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <img src="images/portfolio4.jpeg" alt="" />
                            </div>
                        </div>
                    </div>
                    {/* portfolio item end  */}
                    {/* portfolio item start  */}
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <img src="images/portfolio5.webp" alt="" />
                            </div>
                        </div>
                    </div>
                    {/* portfolio item end  */}
                    {/* portfolio item start  */}
                    <div className="portfolio-item padd-15">
                        <div className="portfolio-item-inner shadow-dark">
                            <div className="portfolio-img">
                                <img src="images/portfolio6.webp" alt="" />
                            </div>
                        </div>
                    </div>
                    {/* portfolio item end  */}
                </div>
            </div>
        </section>
    );
}
