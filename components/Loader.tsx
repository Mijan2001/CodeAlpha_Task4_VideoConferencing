import Image from 'next/image';
import React from 'react';

const Loader = () => {
    return (
        <div className="flex justify-center items-center w-full">
            <Image
                src="/icons/loading-circle.svg"
                alt="Loading"
                width={50}
                height={50}
                className="animate-spin"
            />
        </div>
    );
};

export default Loader;
