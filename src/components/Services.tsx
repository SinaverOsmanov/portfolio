export default function Services() {
    return (
        <section className="service section" id="services">
            <div className="container pt-16">
                <div className="row">
                    <div className="basis-full mb-14 section-title">
                        <h2>Services</h2>
                    </div>
                </div>
                <div className="row gap-x-7 justify-between">
                    {/* Service item Start  */}
                    <div className="flex-col service-item">
                        <div className="service-item-inner">
                            <div className="icon">
                                <i className="fa fa-mobile-alt"></i>
                            </div>
                            <h4>Development Website</h4>
                            <p>
                                I believe it is important to understand both design and development to achieve a
                                successful user-facing product.
                            </p>
                        </div>
                    </div>
                    {/* Service item End  */}
                    {/* Service item Start  */}
                    <div className="flex-col service-item">
                        <div className="service-item-inner">
                            <div className="icon">
                                <i className="fa fa-palette"></i>
                            </div>
                            <h4>Landing page</h4>
                            <p>
                                In digital marketing, a landing page is a standalone web page, created specifically for
                                a marketing or advertising campaign.
                            </p>
                        </div>
                    </div>
                    {/* Service item End  */}
                    {/* Service item Start  */}
                    <div className="flex-col service-item">
                        <div className="service-item-inner">
                            <div className="icon">
                                <i className="fa fa-code"></i>
                            </div>
                            <h4>Web Application</h4>
                            <p>
                                A web application is a computer program that utilizes web browsers and web technology to
                                perform tasks over the Internet.
                            </p>
                        </div>
                    </div>
                    {/* Service item End  */}
                </div>
            </div>
        </section>
    );
}
