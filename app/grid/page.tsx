"use client";
import React from "react";
import { ParallaxScroll } from '@/components/ui/parallax-scroll';

const page = () => {
  const recommendations = [
    { image: "https://images.unsplash.com/photo-1473172707857-f9e276582ab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI2fHxmb3Jlc3R8ZW58MHx8fHwxNjUxNTUwMDcz&ixlib=rb-1.2.1&q=80&w=400", name: "Song 1", artist: "Artist A" },
    { image: "logo.svg", name: "Song 2", artist: "Artist B" },
    { image: "https://images.unsplash.com/photo-1473172707857-f9e276582ab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI2fHxmb3Jlc3R8ZW58MHx8fHwxNjUxNTUwMDcz&ixlib=rb-1.2.1&q=80&w=400", name: "Song 3", artist: "Artist C" },
    { image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE5fHxkYXJrfGVufDB8fHx8MTY1MTU1MDA3Mw&ixlib=rb-1.2.1&q=80&w=400", name: "Song 4", artist: "Artist D" },
    { image: "https://images.unsplash.com/photo-1473172707857-f9e276582ab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI2fHxmb3Jlc3R8ZW58MHx8fHwxNjUxNTUwMDcz&ixlib=rb-1.2.1&q=80&w=400", name: "Song 5", artist: "Artist E" },
    { image: "https://images.unsplash.com/photo-1473172707857-f9e276582ab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI2fHxmb3Jlc3R8ZW58MHx8fHwxNjUxNTUwMDcz&ixlib=rb-1.2.1&q=80&w=400", name: "Song 6", artist: "Artist F" },
    { image: "logo.svg", name: "Song 7", artist: "Artist G" },
    { image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE5fHxkYXJrfGVufDB8fHx8MTY1MTU1MDA3Mw&ixlib=rb-1.2.1&q=80&w=400", name: "Song 8", artist: "Artist H" },
    { image: "logo.svg", name: "Song 9", artist: "Artist I" },
  ];

  return (
    <div>
      <ParallaxScroll recommendations={recommendations} />
    </div>
  );
}

export default page;
