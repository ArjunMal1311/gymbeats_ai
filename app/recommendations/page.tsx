import { HoverEffect } from '@/components/ui/card-hover';
import { currentProfile } from '@/lib/current-profile'
import { fetchRecommendations } from '@/lib/fetch-recommendations';
import React from 'react'

const Page = async () => {
    const profile = await currentProfile();

    if (!profile) {
        return (
            <div className='pt-24 lg:px-12 px-8'>
                Please Login in to continue
            </div>
        )
    }

    const data = await fetchRecommendations();

    return (
        <div className='pt-24 lg:px-12 px-8'>
            <div>Your Recommendations</div>
            <div>
                <div className="max-w-5xl">
                    {data && <HoverEffect items={data} />}
                </div>
            </div>
        </div>
    )
}

export default Page