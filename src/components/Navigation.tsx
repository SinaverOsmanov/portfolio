import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
        const delay = 1 + i * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 },
            },
        };
    },
};

export function Navigation({ isOpen, setOpen }: { isOpen: boolean; setOpen: (payload: boolean) => void }) {
    const { pathname } = useLocation();

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <aside className="z-10">
            <button
                className="menu-button lg:hidden fixed right-5 top-5 z-20 p-2 rounded-lg shadow-md"
                onClick={() => setOpen(!isOpen)}
            >
                <motion.svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    initial="hidden"
                    animate="visible"
                >
                    {isOpen ? (
                        <motion.path
                            // fillRule="evenodd"
                            // clipRule="evenodd"
                            d="M16.9498 8.46447C17.3404 8.07394 17.3404 7.44078 16.9498 7.05025C16.5593 6.65973 15.9261 6.65973 15.5356 7.05025L12.0001 10.5858L8.46455 7.05025C8.07402 6.65973 7.44086 6.65973 7.05033 7.05025C6.65981 7.44078 6.65981 8.07394 7.05033 8.46447L10.5859 12L7.05033 15.5355C6.65981 15.9261 6.65981 16.5592 7.05033 16.9497C7.44086 17.3403 8.07402 17.3403 8.46455 16.9497L12.0001 13.4142L15.5356 16.9497C15.9261 17.3403 16.5593 17.3403 16.9498 16.9497C17.3404 16.5592 17.3404 15.9261 16.9498 15.5355L13.4143 12L16.9498 8.46447Z"
                            fill="#000000"
                            stroke="#000000"
                            variants={draw}
                        />
                    ) : (
                        <>
                            <path d="M5 12H20" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path>
                            <path d="M5 17H20" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path>
                            <path d="M5 7H20" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path>
                        </>
                    )}
                </motion.svg>
            </button>
            <Navbar isOpen={isOpen} />
        </aside>
    );
}

<svg
    viewBox="-2.16 -2.16 28.32 28.32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#ffffff"
    stroke-width="0.00024000000000000003"
>
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke="#CCCCCC"
        stroke-width="0.048"
    ></g>
    <g id="SVGRepo_iconCarrier">
        {' '}
        <path
            d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
            fill="#ffffff"
        ></path>
    </g>
</svg>;
