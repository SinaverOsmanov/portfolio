import { NavItemType } from '@/types/types';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

export function NavItem({ to, icon, title }: NavItemType) {
    const { pathname } = useLocation();
    const { t } = useTranslation();

    return (
        <li className="border-b-[1px] border-gray-300 py-3">
            <Link to={to} className={pathname === to ? 'active' : ''}>
                <i className={`fa ${icon} mr-4 w-4`}></i>
                {t(`navigation.nav-list.${title}`)}
            </Link>
        </li>
    );
}
