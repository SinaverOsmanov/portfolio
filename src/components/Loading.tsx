import { ClockLoader } from 'react-spinners';

export function Loading() {
    return (
        <div className="container flex h-screen place-items-center place-content-center">
            <ClockLoader color="var(--skin-color)" size={100} />
        </div>
    );
}
