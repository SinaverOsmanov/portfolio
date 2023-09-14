import { SubmitHandler, useForm } from 'react-hook-form';

export function Contact() {
    return (
        <section className="contact section" id="contact">
            <div className="container pt-16">
                <div className="row">
                    <div className="basis-full mb-14 section-title">
                        <h2>Contact</h2>
                    </div>
                </div>
                <h3 className="contact-title">Have You Any Questions ?</h3>
                <h4 className="contact-sub-title">I'M AT YOUR SERVICES</h4>
                <div className="row">
                    {/* Contact info item start  */}
                    <div className="contact-info-item">
                        <div className="icon">
                            <i className="fa fa-phone"></i>
                        </div>
                        <h4>Call Me On</h4>
                        <p>+996(558)-755-756</p>
                    </div>
                    {/* Contact info item end  */}
                    {/* Contact info item start  */}
                    <div className="contact-info-item">
                        <div className="icon">
                            <i className="fa fa-map-marker-alt"></i>
                        </div>
                        <h4>Address</h4>
                        <p>Crimea, Evpatoriya</p>
                    </div>
                    {/* Contact info item end  */}
                    {/* Contact info item start  */}
                    <div className="contact-info-item">
                        <div className="icon">
                            <i className="fa fa-envelope"></i>
                        </div>
                        <h4>Email</h4>
                        <p>sinaver.osmanov@gmail.com</p>
                    </div>
                    {/* Contact info item end  */}
                    {/* Contact info item start  */}
                    <div className="contact-info-item">
                        <div className="icon">
                            <i className="fa fa-globe-asia"></i>
                        </div>
                        <h4>GitHub</h4>
                        <p>https://github.com/SinaverOsmanov</p>
                        <p>https://github.com/SinaverFrontent</p>
                    </div>
                    {/* Contact info item end  */}
                </div>
                <h3 className="contact-title">SEND ME AN EMAIL</h3>
                <h4 className="contact-sub-title">I'M VERY RESPOSIVE TO MESSAGES</h4>
                {/* Contact Form  */}
                <div className="row">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}

type FormValues = {
    name: string;
    subject: string;
    email: string;
    message: string;
};

function ContactForm() {
    const { register, handleSubmit } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = data => console.log(data);

    return (
        <div className="flex-1-full contact-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row gap-x-3">
                    <div className="flex-col grow form-item">
                        <div className="form-group">
                            <input {...register('name')} type="text" className="form-control" placeholder="Name" />
                        </div>
                    </div>
                    <div className="flex-col grow form-item">
                        <div className="form-group">
                            <input {...register('email')} type="email" className="form-control" placeholder="Email" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="flex-1-full form-item">
                        <div className="form-group">
                            <input
                                {...register('subject')}
                                type="text"
                                className="form-control"
                                placeholder="Subject"
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="flex-1-full form-item">
                        <div className="form-group">
                            <textarea
                                {...register('message')}
                                className="form-control"
                                placeholder="Message"
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="flex-1-full form-item">
                        <button type="submit" className="btn">
                            Send Message
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
