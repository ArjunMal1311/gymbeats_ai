"use client"
import React from "react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconMusic,
} from "@tabler/icons-react";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function BentoGrid2({ recommendations }: { recommendations: ({ name: string; artist: string; } | null)[]}) {
  const icon = <IconMusic className="h-4 w-4 text-neutral-500" />;

  return (
    <BentoGrid className="max-w-4xl mx-auto dark">
      {Array.isArray(recommendations) && recommendations.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item?.name}
          description={`Artist: ${item?.artist.slice(0, 10)}`}
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
              {icon}
            </motion.div>
          }
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
