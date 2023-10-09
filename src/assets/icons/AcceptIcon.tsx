import { SVGProps } from 'react';

export function AcceptIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="#7fff00"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="35px"
            height="35px"
            {...props}
        >
            <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.5,0-8-3.5-8-8s3.5-8,8-8s8,3.5,8,8S16.5,20,12,20z"></path>
            <polygon points="9.8,16.8 6.1,13.2 7.5,11.7 9.8,14 15.5,7.9 17,9.3 "></polygon>
        </svg>
    );
}
