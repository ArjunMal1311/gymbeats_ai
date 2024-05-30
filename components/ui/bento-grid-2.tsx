import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconMusic,
  IconDeviceSpeaker,
  IconMoodHappy,
  IconHeart,
  IconRun,
} from "@tabler/icons-react";

export function BentoGrid2() {
  const userPreferences = {
    likesInnovation: true,
    likesTechnology: true,
    likesDesign: false,
    likesCommunication: true,
    likesKnowledge: true,
    likesCreation: true,
    likesAdventure: false,
    likesMusic: true,
    likesRealTimeSuggestions: true,
    likesMoodBased: true,
    likesActivitySpecific: false,
    likesPerformanceTracking: true,
  };

  const personalizedItems = items.filter((item) => {
    switch (item.title) {
      case "The Dawn of Innovation":
        return userPreferences.likesInnovation;
      case "The Digital Revolution":
        return userPreferences.likesTechnology;
      case "The Art of Design":
        return userPreferences.likesDesign;
      case "The Power of Communication":
        return userPreferences.likesCommunication;
      case "The Pursuit of Knowledge":
        return userPreferences.likesKnowledge;
      case "The Joy of Creation":
        return userPreferences.likesCreation;
      case "The Spirit of Adventure":
        return userPreferences.likesAdventure;
      case "Personalized Music Playlists":
        return userPreferences.likesMusic;
      case "Real-Time Music Suggestions":
        return userPreferences.likesRealTimeSuggestions;
      case "Mood-Based Playlists":
        return userPreferences.likesMoodBased;
      default:
        return true;
    }
  });

  return (
    <BentoGrid className="max-w-4xl mx-auto dark">
      {personalizedItems.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "Innovation Suite",
    description: "Explore groundbreaking albums that redefined music.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Digital Symphony",
    description: "Dive into albums that showcase technological prowess.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Design Harmonies",
    description: "Albums known for their artistic and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Communication Waves",
    description: "Songs that highlight the power of effective messaging.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Knowledge Beats",
    description: "Tracks that inspire and educate.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Creation Tunes",
    description: "Music that captures the essence of creativity.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Adventure Anthems",
    description: "Songs for the thrill-seekers and explorers.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Tailored Playlists",
    description: "AI-generated playlists personalized for you.",
    header: <Skeleton />,
    icon: <IconMusic className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Live Music Suggestions",
    description: "Real-time recommendations based on your activity.",
    header: <Skeleton />,
    icon: <IconDeviceSpeaker className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Mood Melodies",
    description: "Playlists curated to match your mood.",
    header: <Skeleton />,
    icon: <IconMoodHappy className="h-4 w-4 text-neutral-500" />,
  },
];
