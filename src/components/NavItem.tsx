import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

type NavItemProps = { to: string; icon: string; children: ReactNode };

export function NavItem({ to, icon, children }: NavItemProps) {
    const { pathname } = useLocation();

    return (
        <li className="border-b-[1px] border-gray-200 py-3">
            <Link to={to} className={pathname === to ? 'active' : ''}>
                <i className={`fa ${icon} mr-4 w-4`}></i>
                {children}
            </Link>
        </li>
    );
}
