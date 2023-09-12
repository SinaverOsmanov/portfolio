import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

type NavItemProps = { to: string; icon: string; children: ReactNode };

export function NavItem({ to, icon, children }: NavItemProps) {
    const { pathname } = useLocation();

    return (
        <li>
            <Link to={to} className={pathname === to ? 'active' : ''}>
                <i className={`fa ${icon}`}></i>
                {children}
            </Link>
        </li>
    );
}
