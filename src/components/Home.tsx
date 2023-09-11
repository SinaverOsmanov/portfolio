import { TypeAnimation } from 'react-type-animation';

function Home() {
    return (
        <section className="home active section" id="home">
            <div className="container">
                <div className="flex flex-row">
                    <div className="flex-col col-span-4 home-info padd-15">
                        <h3 className="hello">
                            Hello, my name is
                            <span className="name"> Sinaver Osmanov</span>
                        </h3>
                        <h3 className="my-profession">
                            I' m a
                            <TypeAnimation
                                sequence={['Front end Developer', 1000, 'Freelancer', 1000]}
                                wrapper="span"
                                speed={50}
                                className="xs:text-md"
                                style={{
                                    // fontSize: '2em',
                                    display: 'inline-block',
                                    marginLeft: 10,
                                }}
                                repeat={Infinity}
                            />
                        </h3>
                        <p>
                            I work to make a better web; one that is fast, easy to use, beautiful, accessible to all,
                            and frustration-free. I create successful websites that are fast, easy to use, and built
                            with best practices. My main experience is in front-end development but I also have a
                            passion for design. I believe having experience in both design and development allows for
                            making the most optimal user experiences.
                        </p>
                        <button className="btn">My Linkedin</button>
                        {/* href="https://www.linkedin.com/in/sinaver-osmanov/" */}
                    </div>
                    <div className="flex-col col-span-8 home-img padd-15">
                        <img src={'./assets/hero.jpg'} alt="hero" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
