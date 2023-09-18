import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

type NavItemProps = { to: string; icon: string; title: string };

export function NavItem({ to, icon, title }: NavItemProps) {
    const { pathname } = useLocation();

    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="border-b-[1px] border-gray-300 py-3"
        >
            <Link to={to} className={pathname === to ? 'active' : ''}>
                <i className={`fa ${icon} mr-4 w-4`}></i>
                {title}
            </Link>
        </motion.li>
    );
}
