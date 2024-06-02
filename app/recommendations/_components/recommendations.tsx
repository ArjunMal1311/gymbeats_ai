"use client";

import { BentoGrid2 } from '@/components/ui/bento-grid-2';
import { Source_Code_Pro } from 'next/font/google';

const scp_font = Source_Code_Pro({
  weight: "500",
  subsets: [],
});

const Recommendations = ({ recommendations }: {
  recommendations: "No activity types found." | {
    activityType: string;
    songs: ({
      name: string;
      artist: string;
    } | null)[];
  }[] | null
}) => {
  if (!recommendations || recommendations === "No activity types found." || recommendations.length === 0) {
    return (
      <div className={`text-center py-12 text-3xl ${scp_font.className}`}>No recommendations available.</div>
    );
  }

  return (
    <div>
      <div className={`text-center py-12 text-3xl ${scp_font.className}`}>Your Recommendations</div>
      <div>
        <div className="flex flex-col gap-8">
          {Array.isArray(recommendations) && recommendations.map((rec, i) => (
            <div key={i} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{rec.activityType}</h3>
              <BentoGrid2 recommendations={rec.songs} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recommendations;
