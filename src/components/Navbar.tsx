import { ReactNode, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from './NavItem';
import Switcher from './Switcher';
import { motion, stagger, useAnimate } from 'framer-motion';

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

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen: boolean) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate('.arrow', { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

        animate(
            'ul',
            {
                clipPath: isOpen ? 'inset(0% 0% 0% 0% round 10px)' : 'inset(10% 50% 90% 50% round 10px)',
            },
            {
                type: 'spring',
                bounce: 0,
                duration: 0.5,
            },
        );

        animate(
            'li',
            isOpen ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : { opacity: 0, scale: 0.3, filter: 'blur(20px)' },
            {
                duration: 0.2,
                delay: isOpen ? staggerMenuItems : 0,
            },
        );
    }, [isOpen]);

    return scope;
}

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

export default function Navbar({ isOpen }: { isOpen: boolean }) {
    return (
        <motion.div
            transition={{ duration: 1, bounce: false, type: 'spring', damping: 15, stiffness: 70 }}
            className={`aside z-50 ${
                isOpen ? 'max-lg:translate-x-0' : 'max-lg:-translate-x-full'
            }  w-64 flex fixed left-0 flex-col px-10 pt-12 h-full`}
        >
            <div className="text-lg text-center mb-20 logo">
                <Link to="/">
                    <span>Portfoli</span>o
                </Link>
            </div>
            {/* <Switcher /> */}
            <nav className="nav">
                <motion.ul variants={variants}>
                    {navItems.map(item => (
                        <NavItem key={item.to} {...item} />
                    ))}
                </motion.ul>
            </nav>
        </motion.div>
    );
}
