"use client"

import { BentoGrid2 } from '@/components/ui/bento-grid-2';
import { Recommendation } from '@prisma/client';
import { Source_Code_Pro } from 'next/font/google';

const scp_font = Source_Code_Pro({
  weight: "500",
  subsets: [],
});

const Recommendations = ({ recommendations }: { recommendations: Recommendation[] | null }) => {
  return (
    <div>
      <div className={`text-center py-12 text-3xl ${scp_font.className}`}>Your Recommendations</div>
      <div>
        <div className="flex flex-col">
          <BentoGrid2  recommendations={recommendations}/>
        </div>
      </div>
    </div>
  )
}

export default Recommendations