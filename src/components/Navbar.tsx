import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from './NavItem';

const navItems = [
    {
        to: '/',
        icon: 'fa-home',
        title: 'Home',
    },
    {
        to: '/about',
        icon: 'fa-user',
        title: 'About',
    },
    {
        to: '/contact',
        icon: 'fa-comments',
        title: 'Contact',
    },
    {
        to: '/services',
        icon: 'fa-list',
        title: 'Services',
    },
    {
        to: '/portfolio',
        icon: 'fa-briefcase',
        title: 'Portfolio',
    },
];

export default function Navbar() {
    return (
        <aside className="w-64 flex flex-col px-10 pt-12 h-full aside">
            <div className="text-lg text-center mb-20 logo">
                <Link to="/">
                    <span>Portfoli</span>o
                </Link>
            </div>
            {/* <div className="nav-toggler">
                <span></span>
            </div> */}
            <nav className="nav">
                <ul>
                    {navItems.map(item => (
                        <NavItem key={item.to} {...item} />
                    ))}
                </ul>
            </nav>
        </aside>
    );
}
