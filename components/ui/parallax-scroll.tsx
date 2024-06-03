"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
  recommendations,
  className,
}: {
  recommendations: { image: string; name: string; artist: string }[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(recommendations.length / 3);

  const firstPart = recommendations.slice(0, third);
  const secondPart = recommendations.slice(third, 2 * third);
  const thirdPart = recommendations.slice(2 * third);

  return (
    <div
      className={cn("h-screen items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
        <div className="grid gap-10">
          {firstPart.map((rec, idx) => (
            <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
              <div className="bg-neutral-900 border border-white rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={rec.image}
                  className="h-96 w-full object-cover object-left-top"
                  height="400"
                  width="400"
                  alt="thumbnail"
                />
                <div className="p-4 text-white">
                  <h3 className="text-xl font-semibold">{rec.name}</h3>
                  <p className="text-neutral-400">Artist: {rec.artist}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((rec, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <div className="bg-neutral-900 border border-white rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={rec.image}
                  className="h-96 w-full object-cover object-left-top"
                  height="400"
                  width="400"
                  alt="thumbnail"
                />
                <div className="p-4 text-white">
                  <h3 className="text-xl font-semibold">{rec.name}</h3>
                  <p className="text-neutral-400">Artist: {rec.artist}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((rec, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <div className="bg-neutral-900 border border-white rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={rec.image}
                  className="h-96 w-full object-cover object-left-top"
                  height="400"
                  width="400"
                  alt="thumbnail"
                />
                <div className="p-4 text-white">
                  <h3 className="text-xl font-semibold">{rec.name}</h3>
                  <p className="text-neutral-400">Artist: {rec.artist}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
