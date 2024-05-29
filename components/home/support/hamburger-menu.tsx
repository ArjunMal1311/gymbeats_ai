"use client";
import Image from "next/image";

const HamburgerMenu = () => {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden bg-[#121212] text-white">

      <div className="absolute z-[99] top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
        <div className="absolute z-[99] top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute z-[99] top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="absolute z-[99] top-0 left-5 w-0.25 h-full bg-n-6"></div>
      <div className="absolute z-[99] top-0 right-5 w-0.25 h-full bg-n-6"></div>

    </div>
  );
};

export default HamburgerMenu;
