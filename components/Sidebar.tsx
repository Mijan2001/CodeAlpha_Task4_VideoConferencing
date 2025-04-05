'use client';

import { sidebarLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <section className="sticky left-0 top-0 flex flex-col h-screen justify-between w-fit bg-gray-300 p-6 pt-28 max-sm:hidden lg:w-[264px] ">
            <div className="flex flex-col gap-6">
                {sidebarLinks?.map(link => {
                    const isActive =
                        pathname === link.route ||
                        pathname.startsWith(`${link.route}/`);
                    return (
                        <Link
                            key={link.label}
                            href={link.route}
                            className={`flex items-center gap-4 rounded-lg justify-start p-3 text-sm font-medium hover:bg-[#6571a0] ${
                                isActive ? 'bg-[#4460dd]' : ''
                            }`}
                        >
                            {/* style should be applied on image icons later =====  */}
                            <Image
                                src={link.imgUrl}
                                alt={link.label}
                                width={24}
                                height={24}
                                className="bg-blue-500"
                            />
                            <p className="text-lg font-semibold max-lg:hidden">
                                {link.label}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default Sidebar;
