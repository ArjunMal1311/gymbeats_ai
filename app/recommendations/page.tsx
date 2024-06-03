import { BentoGrid2 } from '@/components/ui/bento-grid-2';
import { currentProfile } from '@/lib/current-profile'
import { fetchRecommendations } from '@/lib/fetch-recommendations';
import React from 'react'
import Recommendations from './_components/recommendations';

const Page = async () => {
    const profile = await currentProfile();

    if (!profile) {
        return (
            <div className='pt-24 lg:px-12 px-8'>
                Please Login in to continue
            </div>
        )
    }

    const data : {
        activityType: string;
        songs: ({
            name: string;
            artist: string;
        } | null)[];
    }[] = [
        {
            activityType: "Running",
            songs: [
                { name: "Song 1", artist: "Artist A" },
                { name: "Song 2", artist: "Artist B" },
            ],
        },
        {
            activityType: "Yoga",
            songs: [
                { name: "Song 3", artist: "Artist C" },
                { name: "Song 4", artist: "Artist D" },
                { name: "Song 5", artist: "Artist E" },
                { name: "Song 4", artist: "Artist D" },
                { name: "Song 5", artist: "Artist E" },
            ],
        },
        {
            activityType: "Workout",
            songs: [
                { name: "Song 6", artist: "Artist F" },
                { name: "Song 7", artist: "Artist G" },
            ],
        },
    ];

    return (
        <div className='pt-24 lg:px-12 px-8 flex justify-center items-center'>
            <Recommendations recommendations={data} />
        </div>
    )
}

export default Page
