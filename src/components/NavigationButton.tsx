import { ReactNode } from 'react';

export function NavigationButton({ onClick, children }: { onClick: () => void; children: ReactNode }) {
    return (
        <button className="menu-button lg:hidden fixed right-5 top-5 z-50 p-2 rounded-lg shadow-md" onClick={onClick}>
            {children}
        </button>
    );
}
