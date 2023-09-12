import { Link } from 'react-router-dom';

export default function About() {
    return (
        <section className="about section" id="about">
            <div className="container pt-16">
                <div className="row">
                    <div className="basis-full mb-14 section-title padd-15">
                        <h2>About Me</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="about-content padd-15">
                        <div className="row">
                            <div className="about-text padd-15">
                                <h3>
                                    I'm Sinaver Osmanov and I'm <span>Web Developer</span>
                                </h3>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt eaque provident
                                    corrupti obcaecati quisquam aliquid nesciunt! Assumenda cum, dolore incidunt veniam
                                    sequi ab laboriosam deserunt in, odio pariatur ipsam quaerat. Lorem, ipsum dolor sit
                                    amet consectetur adipisicing elit. Obcaecati totam, doloribus repellat eum, eius
                                    pariatur nihil, nemo ullam ipsum maiores illum dolorem nisi enim distinctio numquam
                                    dolor aperiam omnis magni!
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="personal-info padd-15">
                                <div className="row">
                                    <div className="info-item padd-15">
                                        <p>
                                            RUSSIAN : <span>NATIVE</span>
                                        </p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>
                                            ENGLISH : <span>B2</span>
                                        </p>
                                    </div>
                                    {/* <div className="info-item padd-15">
                                        <p>
                                            Website : <span>www.domain.com</span>
                                        </p>
                                    </div> */}
                                    <div className="info-item padd-15">
                                        <p>
                                            Email : <span>sinaver.osmanov@gmail.com</span>
                                        </p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>
                                            Makers Coding Bootcamp : <span>Front-End Developer</span>
                                        </p>
                                    </div>
                                    {/* <div className="info-item padd-15">
                                        <p>
                                            Phone : <span>+996(558)-755-756</span>
                                        </p>
                                    </div> */}
                                    <div className="info-item padd-15">
                                        <p>
                                            City : <span>Evpatoria</span>
                                        </p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>
                                            Freelance : <span>Available</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="buttons padd-15">
                                        <Link to="/contact" data-section-index="1" className="btn hire-me">
                                            Hire Me
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="skills padd-15">
                                <div className="row">
                                    <div className="skills-item padd-15">
                                        <h5>HTML</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '96%' }}></div>
                                            <div className="skills-percent">96%</div>
                                        </div>
                                    </div>
                                    <div className="skills-item padd-15">
                                        <h5>CSS</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '86%' }}></div>
                                            <div className="skills-percent">86%</div>
                                        </div>
                                    </div>
                                    <div className="skills-item padd-15">
                                        <h5>JavaScript</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '75%' }}></div>
                                            <div className="skills-percent">75%</div>
                                        </div>
                                    </div>
                                    <div className="skills-item padd-15">
                                        <h5>React</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '65%' }}></div>
                                            <div className="skills-percent">65%</div>
                                        </div>
                                    </div>
                                    <div className="skills-item padd-15">
                                        <h5>Vue</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '30%' }}></div>
                                            <div className="skills-percent">30%</div>
                                        </div>
                                    </div>
                                    <div className="skills-item padd-15">
                                        <h5>Git</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '80%' }}></div>
                                            <div className="skills-percent">80%</div>
                                        </div>
                                    </div>
                                    <div className="skills-item padd-15">
                                        <h5>Typescript</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '80%' }}></div>
                                            <div className="skills-percent">80%</div>
                                        </div>
                                    </div>
                                    <div className="skills-item padd-15">
                                        <h5>Bootstrap, Material UI, Antd, Blueprint.js, Tailwind</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '70%' }}></div>
                                            <div className="skills-percent">70%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="education padd-15">
                                <h3 className="title">Education</h3>
                                <div className="row">
                                    <div className="timeline-box padd-15">
                                        <div className="timeline shadow-dark">
                                            timeline item
                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-data">
                                                    <i className="fa fa-calendar"></i> Aug 2001 — May 2003
                                                </h3>
                                                <h4 className="timeline-title">Vocational School № 27</h4>
                                                <p className="timeline-text">Auto Mechanic</p>
                                            </div>
                                            timeline item
                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-data">
                                                    <i className="fa fa-calendar"></i> Nov 2022 — Mar 2023
                                                </h3>
                                                <h4 className="timeline-title">Makers Coding Bootcamp</h4>
                                                <p className="timeline-text">Front-End Developer</p>
                                            </div>
                                            timeline item
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="experience padd-15">
                                <h3 className="title">Experience</h3>
                                <div className="row">
                                    <div className="timeline-box padd-15">
                                        <div className="timeline shadow-dark">
                                            timeline item
                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-data">
                                                    <i className="fa fa-calendar"></i> 2023-2023
                                                </h3>
                                                <h4 className="timeline-title">Master in Computer Science</h4>
                                                <p className="timeline-text">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                                                    culpa ab vitae ratione commodi et, velit aliquid sapiente deserunt
                                                    voluptatum debitis molestiae maiores, illum totam.
                                                </p>
                                            </div>
                                            timeline item
                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-data">
                                                    <i className="fa fa-calendar"></i> 2023-2023
                                                </h3>
                                                <h4 className="timeline-title">Master in Computer Science</h4>
                                                <p className="timeline-text">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                                                    culpa ab vitae ratione commodi et, velit aliquid sapiente deserunt
                                                    voluptatum debitis molestiae maiores, illum totam.
                                                </p>
                                            </div>
                                            timeline item
                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-data">
                                                    <i className="fa fa-calendar"></i> 2023-2023
                                                </h3>
                                                <h4 className="timeline-title">Master in Computer Science</h4>
                                                <p className="timeline-text">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                                                    culpa ab vitae ratione commodi et, velit aliquid sapiente deserunt
                                                    voluptatum debitis molestiae maiores, illum totam.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
