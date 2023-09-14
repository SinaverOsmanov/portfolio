import { Link } from 'react-router-dom';

export default function About() {
    return (
        <section className="about section" id="about">
            <div className="container pt-16">
                <div className="flex flex-row">
                    <div className="basis-full mb-14 section-title">
                        <h2>About Me</h2>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex-col about-content">
                        <div className="flex flex-row mb-10">
                            <div className="flex-col about-text">
                                <h3>
                                    I'm Sinaver Osmanov and I'm
                                    <span> Web Developer</span>
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
                        <div className="flex flex-row justify-between mb-20">
                            <div className="flex-col basis-6/12 flex-wrap personal-info">
                                <div className="flex flex-row flex-wrap gap-y-5">
                                    <div className="info-item">
                                        <p>
                                            RUSSIAN : <span>NATIVE</span>
                                        </p>
                                    </div>
                                    <div className="info-item">
                                        <p>
                                            ENGLISH : <span>B2</span>
                                        </p>
                                    </div>
                                    <div className="info-item">
                                        <p>
                                            Website : <span>www.domain.com</span>
                                        </p>
                                    </div>
                                    <div className="info-item">
                                        <p>
                                            Email : <span>sinaver.osmanov@gmail.com</span>
                                        </p>
                                    </div>
                                    <div className="info-item">
                                        <p>
                                            Makers Coding Bootcamp : <span>Front-End Developer</span>
                                        </p>
                                    </div>
                                    {/* <div className="info-item">
                                        <p>
                                            Phone : <span>+996(558)-755-756</span>
                                        </p>
                                    </div> */}
                                    <div className="info-item">
                                        <p>
                                            City : <span>Evpatoria</span>
                                        </p>
                                    </div>
                                    <div className="info-item">
                                        <p>
                                            Freelance : <span>Available</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row flex-wrap">
                                    <div className="buttons">
                                        <Link to="/contact" className="btn hire-me">
                                            Hire Me
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col basis-4/12 skills">
                                <div className="flex flex-row flex-wrap">
                                    <div className="flex-col flex-1-full skills-item">
                                        <h5>HTML</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '96%' }}></div>
                                            <div className="skills-percent">96%</div>
                                        </div>
                                    </div>
                                    <div className="flex-col flex-1-full skills-item">
                                        <h5>CSS</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '86%' }}></div>
                                            <div className="skills-percent">86%</div>
                                        </div>
                                    </div>
                                    <div className="flex-col flex-1-full skills-item">
                                        <h5>JavaScript</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '75%' }}></div>
                                            <div className="skills-percent">75%</div>
                                        </div>
                                    </div>
                                    <div className="flex-col flex-1-full skills-item">
                                        <h5>React</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '65%' }}></div>
                                            <div className="skills-percent">65%</div>
                                        </div>
                                    </div>
                                    <div className="flex-col flex-1-full skills-item">
                                        <h5>Vue</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '30%' }}></div>
                                            <div className="skills-percent">30%</div>
                                        </div>
                                    </div>
                                    <div className="flex-col flex-1-full skills-item">
                                        <h5>Git</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '80%' }}></div>
                                            <div className="skills-percent">80%</div>
                                        </div>
                                    </div>
                                    <div className="flex-col flex-1-full skills-item">
                                        <h5>Typescript</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '80%' }}></div>
                                            <div className="skills-percent">80%</div>
                                        </div>
                                    </div>
                                    <div className="flex-col flex-1-full skills-item">
                                        <h5>Bootstrap, Material UI, Antd, Blueprint.js, Tailwind</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '70%' }}></div>
                                            <div className="skills-percent">70%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="education">
                                <h3 className="title">Education</h3>
                                <div className="flex flex-row">
                                    <div className="timeline-box">
                                        <div className="timeline shadow-lg">
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
                            <div className="experience">
                                <h3 className="title">Experience</h3>
                                <div className="flex flex-row">
                                    <div className="timeline-box">
                                        <div className="timeline shadow-lg">
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
