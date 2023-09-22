import { Link } from 'react-router-dom';
import { NavItem } from './NavItem';
import { motion } from 'framer-motion';
import { NavItemType } from '@/@types/types';
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

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
        </motion.div>
    );
}

function LanguagePanel() {
    const {
        t,
        i18n: { language, changeLanguage },
    } = useTranslation();

    const [lang, setLang] = useState<string>(language);

    function handleChange(e: ChangeEvent<HTMLSelectElement>) {
        setLang(e.target.value);
    }

    useEffect(() => {
        if (lang !== language) {
            changeLanguage(lang);
        }
    }, [lang]);

    return (
        <>
            <label htmlFor="languages" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
                {t('navigation.lang')}
            </label>
            <select
                value={lang}
                onChange={handleChange}
                id="languages"
                className="w-16 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option value="en">EN</option>
                <option value="ru">RU</option>
            </select>
        </>
    );
}
