import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

export default function Navigation({ isOpen, setOpen }: { isOpen: boolean; setOpen: (payload: boolean) => void }) {
    const { pathname } = useLocation();

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <aside className="relative z-10">
            <button
                className="menu-button lg:hidden fixed right-5 top-5 z-50 p-2 rounded-lg shadow-md"
                onClick={() => setOpen(!isOpen)}
            >
                <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {isOpen ? (
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.9498 8.46447C17.3404 8.07394 17.3404 7.44078 16.9498 7.05025C16.5593 6.65973 15.9261 6.65973 15.5356 7.05025L12.0001 10.5858L8.46455 7.05025C8.07402 6.65973 7.44086 6.65973 7.05033 7.05025C6.65981 7.44078 6.65981 8.07394 7.05033 8.46447L10.5859 12L7.05033 15.5355C6.65981 15.9261 6.65981 16.5592 7.05033 16.9497C7.44086 17.3403 8.07402 17.3403 8.46455 16.9497L12.0001 13.4142L15.5356 16.9497C15.9261 17.3403 16.5593 17.3403 16.9498 16.9497C17.3404 16.5592 17.3404 15.9261 16.9498 15.5355L13.4143 12L16.9498 8.46447Z"
                            fill="#000000"
                            stroke="#000000"
                        />
                    ) : (
                        <>
                            <path d="M5 12H20" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path>
                            <path d="M5 17H20" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path>
                            <path d="M5 7H20" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path>
                        </>
                    )}
                </svg>
            </button>
            <Navbar isOpen={isOpen} />
            {isOpen && (
                <div
                    onClick={() => setOpen(false)}
                    className="bg-shadow absolute top-0 right-0 bottom-0 left-0 backdrop-blur-lg backdrop-brightness-50 z-40 shadow-md"
                ></div>
            )}
        </aside>
    );
}
