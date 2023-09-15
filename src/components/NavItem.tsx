import { Link, useLocation } from 'react-router-dom';

type NavItemProps = { to: string; icon: string; title: string };

export function NavItem({ to, icon, title }: NavItemProps) {
    const { pathname } = useLocation();

    return (
        <li className="border-b-[1px] border-gray-300 py-3">
            <Link to={to} className={pathname === to ? 'active' : ''}>
                <i className={`fa ${icon} mr-4 w-4`}></i>
                {title}
            </Link>
        </li>
    );
}
