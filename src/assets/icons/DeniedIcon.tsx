import { SVGProps } from 'react';

export function DeniedIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ff0000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="35px"
            height="35px"
            {...props}
        >
            <line x1="15" y1="15" x2="9" y2="9"></line>
            <line x1="9" y1="15" x2="15" y2="9"></line>
            <circle cx="12" cy="12" r="9" style={{ fill: 'none', stroke: '#ff0000', strokeWidth: 2 }}></circle>
        </svg>
    );
}
