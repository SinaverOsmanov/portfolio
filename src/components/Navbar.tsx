import { Link } from 'react-router-dom';

export default function Navbar() {
    const navTogglerBtn = document.querySelector('.nav-toggler'),
        aside = document.querySelector('.aside');
    navTogglerBtn?.addEventListener('click', () => {
        asideSectionTogglerBtn();
    });

    function asideSectionTogglerBtn() {
        aside?.classList.toggle('open');
        navTogglerBtn?.classList.toggle('open');
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.toggle('open');
        }
    }

    const nav = document.querySelector('.nav'),
        navList = nav?.querySelectorAll('li'),
        totalNavList = navList?.length;

    const allSection = document.querySelectorAll('.section');
    const totalSection = allSection.length;

    for (let i = 0; i < totalNavList!; i++) {
        const a = navList![i].querySelector('a');
        a?.addEventListener('click', function () {
            removeBackSection();
            for (let j = 0; j < totalNavList!; j++) {
                if (navList![j].querySelector('a')?.classList.contains('active')) {
                    addBackSection(j);
                    allSection[j].classList.add('back-section');
                }
                navList![j].querySelector('a')?.classList.remove('active');
            }
            this.classList.add('active');
            showSection(this);
            if (window.innerWidth < 1200) {
                asideSectionTogglerBtn();
            }
        });
    }
    function removeBackSection() {
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove('back-section');
        }
    }
    function addBackSection(num: number) {
        allSection[num].classList.add('back-section');
    }
    function showSection(element: Element) {
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove('active');
        }
        const target = element.getAttribute('href')?.split('#')[1];
        document.querySelector('#' + target)?.classList.add('active');
    }
    function updateNav(element: Element) {
        for (let i = 0; i < totalNavList!; i++) {
            navList![i]!.querySelector('a')?.classList.remove('active');
            const target = element.getAttribute('href')?.split('#')[1];
            if (target === navList![i].querySelector('a')?.getAttribute('href')?.split('#')[1]) {
                navList![i].querySelector('a')?.classList.add('active');
            }
        }
    }
    // document.querySelector('.hire-me')?.addEventListener('click', function () {
    //     const sectionIndex = this.getAttribute('date-section-index');
    //     //console.log(sectionIndex);
    //     showSection(this);
    //     updateNav(this);
    //     removeBackSection();
    //     addBackSection(sectionIndex);
    // });

    return (
        <aside className="w-64 flex flex-col justify-between p-8 pt-12 h-full aside">
            <div className="text-lg text-center logo ">
                <Link to="/">
                    <span>Portfoli</span>o
                </Link>
            </div>
            {/* <div className="nav-toggler">
                <span></span>
            </div> */}
            <div></div>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/" className="active">
                            <i className="fa fa-home"></i> Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <i className="fa fa-user"></i> About
                        </Link>
                    </li>
                    <li>
                        <Link to="/services">
                            <i className="fa fa-list"></i> Services
                        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio">
                            <i className="fa fa-briefcase"></i> Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <i className="fa fa-comments"></i> Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <div></div>
            <div></div>
        </aside>
    );
}
