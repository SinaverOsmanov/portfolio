export function Contact() {
    return (
        <section className="contact section" id="contact">
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>Contact</h2>
                    </div>
                </div>
                <h3 className="contact-title padd-15">Have You Any Questions ?</h3>
                <h4 className="contact-sub-title padd-15">I'M AT YOUR SERVICES</h4>
                <div className="row">
                    {/* Contact info item start  */}
                    <div className="contact-info-item padd-15">
                        <div className="icon">
                            <i className="fa fa-phone"></i>
                        </div>
                        <h4>Call Me On</h4>
                        <p>+996(558)-755-756</p>
                    </div>
                    {/* Contact info item end  */}
                    {/* Contact info item start  */}
                    <div className="contact-info-item padd-15">
                        <div className="icon">
                            <i className="fa fa-map-marker-alt"></i>
                        </div>
                        <h4>Address</h4>
                        <p>Evpatoriya city</p>
                    </div>
                    {/* Contact info item end  */}
                    {/* Contact info item start  */}
                    <div className="contact-info-item padd-15">
                        <div className="icon">
                            <i className="fa fa-envelope"></i>
                        </div>
                        <h4>Email</h4>
                        <p>sinaver.osmanov@gmail.com</p>
                    </div>
                    {/* Contact info item end  */}
                    {/* Contact info item start  */}
                    <div className="contact-info-item padd-15">
                        <div className="icon">
                            <i className="fa fa-globe-asia"></i>
                        </div>
                        <h4>GitHub</h4>
                        <p>https://github.com/SinaverOsmanov</p>
                        <p>https://github.com/SinaverFrontent</p>
                    </div>
                    {/* Contact info item end  */}
                </div>
                <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
                <h4 className="contact-sub-title padd-15">I'M VERY RESPOSIVE TO MESSAGES</h4>
                {/* Contact Form  */}
                <div className="row">
                    <div className="contact-form padd-15">
                        <div className="row">
                            <div className="form-item col-6 padd-15">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Name" />
                                </div>
                            </div>
                            <div className="form-item col-6 padd-15">
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-item col-12 padd-15">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-item col-12 padd-15">
                                <div className="form-group">
                                    <textarea name="" className="form-control" id="" placeholder="Message"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-item col-12 padd-15">
                                <button type="submit" className="btn">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
