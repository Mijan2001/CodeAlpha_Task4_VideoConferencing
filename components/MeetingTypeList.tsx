'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import HomeCard from './HomeCard';
import { useRouter } from 'next/navigation';
import MeetingModal from './MeetingModal';
import { useUser } from '@clerk/nextjs';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { toast } from 'sonner';

const MeetingTypeList = () => {
    const router = useRouter();
    const [meeting, setMeeting] = useState<
        | 'isScheduleMeeting'
        | 'isJoiningMeeting'
        | 'isInstantMeeting'
        | undefined
    >();

    const { user } = useUser();
    const client = useStreamVideoClient();
    const [values, setValues] = useState({
        dateTime: new Date(),
        description: '',
        link: ' '
    });
    const [callDetails, setCallDetails] = useState<Call>();

    const createMeeting = async () => {
        if (!user || !client) return;

        try {
            if (!values.dateTime) {
                toast.error('Please select a date and time for the meeting.');
                return;
            }

            const id = crypto.randomUUID();
            const call = client.call('default', id);
            if (!call) throw new Error('Call not found');

            const startsAt =
                values.dateTime.toISOString() ||
                new Date(Date.now()).toISOString();

            const description = values.description || 'Instant Meeting';

            await call.getOrCreate({
                data: {
                    starts_at: startsAt,
                    custom: {
                        description
                    }
                }
            });

            setCallDetails(call);

            if (!values.description) {
                router.push(`/meeting/${call?.id}`);
            }

            toast.success('Meeting created successfully!');
        } catch (error) {
            console.error('Error creating meeting:', error);
            toast('Schedule Catch Up: Friday, April 10, 2025 at 10:30 PM');
        }
    };

    return (
        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            <HomeCard
                img="/icons/add-meeting.svg"
                title="New Meeting"
                description="Start an instant meeting"
                handleClick={() => setMeeting('isInstantMeeting')}
                className="bg-orange-400"
            />
            <HomeCard
                img="/icons/schedule.svg"
                title="Schedule Meeting"
                description="Plan your meeting"
                handleClick={() => setMeeting('isScheduleMeeting')}
                className="bg-blue-500"
            />
            <HomeCard
                img="/icons/recordings.svg"
                title="View Recordings"
                description="Check out your recordings"
                handleClick={() => router.push('/recordings')}
                className="bg-purple-500"
            />
            <HomeCard
                img="/icons/join-meeting.svg"
                title="Join Meeting"
                description="Via invitation link"
                handleClick={() => setMeeting('isJoiningMeeting')}
                className="bg-yellow-400"
            />

            {/* open meeting modal ============  */}

            <MeetingModal
                isOpen={meeting === 'isInstantMeeting'}
                onClose={() => setMeeting(undefined)}
                title="Start an Instant Meeting"
                className="text-center"
                buttonText="Start Meeting"
                handleClick={createMeeting}
            />
        </section>
    );
};

export default MeetingTypeList;
