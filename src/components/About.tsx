import { ReactElement, cloneElement } from 'react';
import { twMerge } from 'tailwind-merge';
import useStoreColors from '../hooks/useColors';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ColorSkin({ children, className }: { children: ReactElement; className?: any }) {
    const { color } = useStoreColors();
    const mergedClass = twMerge(`text-[--${color}]`, className);

    const clonedElement = cloneElement(children, { className: mergedClass });

    return clonedElement;
}

export default function About() {
    return (
        <motion.section
            initial={{ x: '100vw' }}
            animate={{ x: '0' }}
            transition={{ duration: 1, bounce: true, type: 'spring', damping: 12, stiffness: 70 }}
            className="about section"
            id="about"
        >
            <div className="container py-16">
                <div className="flex flex-row">
                    <div className="basis-full mb-14 section-title">
                        <h1>About Me</h1>
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
                        <div className="flex flex-row justify-between flex-wrap mb-20 max-sl:mb-5">
                            <div className="flex-col basis-6/12 max-sl:basis-full flex-wrap personal-info">
                                <div className="flex flex-row flex-wrap">
                                    <h3 className="title">Soft skills</h3>
                                    <div className="flex-custom-full info-item mb-6">
                                        <p>
                                            RUSSIAN : <span>NATIVE</span>
                                        </p>
                                    </div>
                                    <div className="flex-custom-full info-item mb-6">
                                        <p>
                                            ENGLISH : <span>B2</span>
                                        </p>
                                    </div>
                                    <div className="flex-custom-full info-item mb-6">
                                        <p>
                                            Website : <span>www.domain.com</span>
                                        </p>
                                    </div>
                                    <div className="flex-custom-full info-item mb-6">
                                        <p>
                                            Email : <span>sinaver.osmanov@gmail.com</span>
                                        </p>
                                    </div>
                                    <div className="flex-custom-full info-item mb-6">
                                        <p>
                                            Makers Coding Bootcamp : <span>Front-End Developer</span>
                                        </p>
                                    </div>
                                    {/* <div className="flex-custom-full info-item mb-6">
                                        <p>
                                            Phone : <span>+996(558)-755-756</span>
                                        </p>
                                    </div> */}
                                    <div className="flex-custom-full info-item mb-6">
                                        <p>
                                            City : <span>Evpatoria</span>
                                        </p>
                                    </div>
                                    <div className="flex-custom-full info-item mb-6">
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
                            <div className="flex-col basis-5/12 max-sl:mt-10 max-sl:basis-full skills">
                                <div className="flex flex-row flex-wrap">
                                    <h3 className="title">Hard skills</h3>
                                    <div className="flex-custom-full skills-item mb-6">
                                        <h5>HTML</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '96%' }}></div>
                                            <div className="skills-percent">96%</div>
                                        </div>
                                    </div>
                                    <div className="flex-custom-full skills-item mb-6">
                                        <h5>CSS</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '86%' }}></div>
                                            <div className="skills-percent">86%</div>
                                        </div>
                                    </div>
                                    <div className="flex-custom-full skills-item mb-6">
                                        <h5>JavaScript</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '75%' }}></div>
                                            <div className="skills-percent">75%</div>
                                        </div>
                                    </div>
                                    <div className="flex-custom-full skills-item mb-6">
                                        <h5>React</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '65%' }}></div>
                                            <div className="skills-percent">65%</div>
                                        </div>
                                    </div>
                                    <div className="flex-custom-full skills-item mb-6">
                                        <h5>Vue</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '30%' }}></div>
                                            <div className="skills-percent">30%</div>
                                        </div>
                                    </div>
                                    <div className="flex-custom-full skills-item mb-6">
                                        <h5>Git</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '80%' }}></div>
                                            <div className="skills-percent">80%</div>
                                        </div>
                                    </div>
                                    <div className="flex-custom-full skills-item mb-6">
                                        <h5>Typescript</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '80%' }}></div>
                                            <div className="skills-percent">80%</div>
                                        </div>
                                    </div>
                                    <div className="flex-custom-full skills-item mb-6">
                                        <h5>Bootstrap, Material UI, Antd, Blueprint.js, Tailwind</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '70%' }}></div>
                                            <div className="skills-percent">70%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row flex-wrap justify-between">
                            <div className="max-sl:flex-custom-full flex-custom-1/2 sl:pr-5">
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
                            <div className="max-sl:flex-custom-full max-sl:mt-10 flex-custom-1/2">
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
        </motion.section>
    );
}
