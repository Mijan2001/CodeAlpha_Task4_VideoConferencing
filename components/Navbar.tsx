import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MobileNav from './MobileNav';

const Navbar = () => {
    return (
        <nav className="flex justify-between z-50 bg-gray-700 fixed top-0 left-0 right-0 w-full text-white px-6 py-4 lg:px-10">
            <Link href="/" className="flex items-center gap-2">
                <Image
                    src="/icons/logo.svg"
                    alt="logo"
                    width={32}
                    height={32}
                    className="max-sm:size-10"
                />
                <p className="text-[26px] font-extrabold text-white max-sm:hidden">
                    Video
                </p>
            </Link>

            <div className="flex justify-between gap-5">
                {/* Clerk user management ============  */}
                <MobileNav />
            </div>
        </nav>
    );
};

export default Navbar;
