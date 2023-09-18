import { motion } from 'framer-motion';

export default function Services() {
    return (
        <motion.section
            initial={{ x: '100vw' }}
            animate={{ x: '0' }}
            transition={{ duration: 3, bounce: true, type: 'spring', damping: 12, stiffness: 70 }}
            className="service section"
            id="services"
        >
            <div className="container py-16">
                <div className="row">
                    <div className="basis-full mb-14 section-title">
                        <h1>Services</h1>
                    </div>
                </div>
                <div className="row max-md:flex-wrap justify-between">
                    {/* Service item Start  */}
                    <motion.div
                        // initial={{ x: '-100vh' }}
                        // transition={{
                        //     delay: 0.1,
                        //     duration: 1,
                        //     bounce: true,
                        //     type: 'spring',
                        //     damping: 12,
                        //     stiffness: 100,
                        // }}
                        // animate={{ x: 0 }}
                        className="flex-custom-1/3 max-mg:flex-custom-full service-item lg:pr-3 max-mg:mb-5"
                    >
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
                    </motion.div>
                    {/* Service item End  */}
                    {/* Service item Start  */}
                    <motion.div
                        // initial={{ x: '100vh' }}
                        // transition={{
                        //     delay: 0.3,
                        //     duration: 1,
                        //     bounce: true,
                        //     type: 'spring',
                        //     damping: 12,
                        //     stiffness: 100,
                        // }}
                        // animate={{ x: 0 }}
                        className="flex-custom-1/3 max-mg:flex-custom-full service-item lg:pr-3 max-mg:mb-5"
                    >
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
                    </motion.div>
                    {/* Service item End  */}
                    {/* Service item Start  */}
                    <motion.div
                        // initial={{ x: '-100vh' }}
                        // transition={{
                        //     delay: 0.5,
                        //     duration: 1,
                        //     bounce: true,
                        //     type: 'spring',
                        //     damping: 12,
                        //     stiffness: 100,
                        // }}
                        // animate={{ x: 0 }}
                        className="flex-custom-1/3 max-mg:flex-custom-full service-item max-mg:mb-5"
                    >
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
                    </motion.div>
                    {/* Service item End  */}
                </div>
            </div>
        </motion.section>
    );
}
