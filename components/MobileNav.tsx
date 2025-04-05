'use client';

import React from 'react';

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger asChild>
                    <Image
                        src="/icons/hamburger.svg"
                        width={32}
                        height={32}
                        alt="hamburger"
                        className="cursor-pointer sm:hidden"
                    />
                </SheetTrigger>
                <SheetContent side="right" className="border-none">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/icons/logo.svg"
                            alt="logo"
                            width={32}
                            height={32}
                            className="max-sm:size-10"
                        />
                        <p className="text-[26px] font-extrabold text-white ">
                            Video
                        </p>
                    </Link>
                    <div className="flex h-[calc(100vh - 72px)] flex-col  justify-between overflow-y-auto ">
                        <SheetClose asChild>
                            <section className="flex h-full flex-col gap-6 py-16 ">
                                {sidebarLinks?.map(link => {
                                    const isActive = pathname === link.route;
                                    return (
                                        <SheetClose asChild key={link.label}>
                                            <Link
                                                key={link.label}
                                                href={link.route}
                                                className={`flex items-center gap-4 rounded-lg  max-w-60 p-3 text-sm font-medium hover:bg-[#6571a0] ${
                                                    isActive
                                                        ? 'bg-[#4460dd]'
                                                        : ''
                                                }`}
                                            >
                                                {/* style should be applied on image icons later =====  */}
                                                <Image
                                                    src={link.imgUrl}
                                                    alt={link.label}
                                                    width={20}
                                                    height={20}
                                                    className="bg-blue-500"
                                                />
                                                <p className="font-semibold ">
                                                    {link.label}
                                                </p>
                                            </Link>
                                        </SheetClose>
                                    );
                                })}
                            </section>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    );
};

export default MobileNav;
