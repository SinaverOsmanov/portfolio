import { ClockLoader } from 'react-spinners';

export function Loading() {
    return (
        <div className="flex fixed h-full w-screen place-items-center place-content-center z-[999] bg-[--bg-black-900]">
            <ClockLoader color="var(--skin-color)" size={100} />
        </div>
    );
}
