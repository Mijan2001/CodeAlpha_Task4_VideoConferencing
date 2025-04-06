'use client';

import React, { ReactNode } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface MeetingModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    className?: string;
    children?: ReactNode;
    buttonText: string;
    handleClick?: () => void;
    image?: string;
    buttonIcon?: string;
}

const MeetingModal = ({
    isOpen,
    onClose,
    title,
    className,
    buttonText,
    handleClick,
    image,
    buttonIcon,
    children
}: MeetingModalProps) => {
    console.log('isOpne==>', isOpen);
    console.log('onClose==>', onClose);

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-gray-800 px-6 py-9 text-white">
                <div className="flex flex-col gap-6 items-center text-center">
                    {image && (
                        <Image src={image} alt="image" width={72} height={72} />
                    )}

                    <h1
                        className={`text-3xl font-bold leading-[42px] ${className}`}
                    >
                        {title}
                    </h1>

                    {children}

                    <Button
                        className="bg-blue-500 hover:bg-blue-600 text-white focus-visible:ring-0 focus-visible:ring-offset-0"
                        onClick={handleClick}
                    >
                        {buttonIcon && (
                            <Image
                                src={buttonIcon}
                                alt="icon"
                                width={16}
                                height={16}
                                className="mr-2"
                            />
                        )}{' '}
                        &nbsp;
                        {buttonText}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default MeetingModal;
