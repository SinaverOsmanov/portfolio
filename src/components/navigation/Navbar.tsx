import { Link } from 'react-router-dom';
import { NavItemType } from '@/types/types';
import LanguagePanel from '../LanguagePanel';
import { NavItem } from './NavItem';

const navItems: NavItemType[] = [
    {
        to: '/',
        icon: 'fa-home',
        title: 'home',
    },
    {
        to: '/about',
        icon: 'fa-user',
        title: 'about',
    },
    {
        to: '/contact',
        icon: 'fa-comments',
        title: 'contact',
    },
    {
        to: '/services',
        icon: 'fa-list',
        title: 'services',
    },
    {
        to: '/portfolio',
        icon: 'fa-briefcase',
        title: 'portfolio',
    },
];

export default function Navbar({ isOpen }: { isOpen: boolean }) {
    return (
        <div
            className={`aside transition-all duration-500 z-50 ${
                isOpen ? 'max-lg:translate-x-0' : 'max-lg:-translate-x-full'
            }  w-72 flex fixed left-0 flex-col px-10 pt-12 h-full overflow-auto`}
        >
            <div className="text-lg text-center mb-20 logo">
                <Link to="/">
                    <span>Sinaver </span>Osmanov
                </Link>
            </div>
            <nav className="nav">
                <ul>
                    {navItems.map(item => (
                        <NavItem key={item.to} {...item} />
                    ))}
                </ul>
            </nav>
            <div className="mt-10">
                <LanguagePanel />
            </div>
        </div>
    );
}
