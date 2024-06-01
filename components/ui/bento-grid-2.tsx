"use client"
import React from "react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconArrowWaveRightUp,
  IconBoxAlignTopLeft,
  IconBoxAlignRightFilled,
  IconMusic,
  IconDeviceSpeaker,
  IconMoodHappy,
} from "@tabler/icons-react";
import { Recommendation } from "@prisma/client";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function BentoGrid2({ recommendations }: { recommendations: Recommendation[] | null }) {
  const icons = {
    innovation: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    technology: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    design: <IconSignature className="h-4 w-4 text-neutral-500" />,
    communication: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    knowledge: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    creation: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    adventure: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    music: <IconMusic className="h-4 w-4 text-neutral-500" />,
    realTimeSuggestions: <IconDeviceSpeaker className="h-4 w-4 text-neutral-500" />,
    moodBased: <IconMoodHappy className="h-4 w-4 text-neutral-500" />,
  };

  return (
    <BentoGrid className="max-w-4xl mx-auto dark">
      {recommendations && recommendations.map((item, i) => (
        <BentoGridItem
          key={item.id}
          title={item.song}
          description={`Artist: ${item.artist}`}
          header={
            <motion.div
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
            ></motion.div>
          }
          icon={
            <motion.div
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              {icons.music}
            </motion.div>
          }
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
