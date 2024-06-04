"use client";
import React from "react";
import { ParallaxScroll } from '@/components/ui/parallax-scroll';
import { fetchGrid } from "@/lib/fetch-grid";
import { currentProfile } from "@/lib/current-profile";


const page = async () => {
  const profile = await currentProfile();

  if (!profile) {
      return (
          <div className='pt-24 lg:px-12 px-8'>
              Please Login in to continue
          </div>
      )
  }

  const data = await fetchGrid();
  return (
    <div>
      <ParallaxScroll recommendations={data} />
    </div>
  );
}

export default page;
