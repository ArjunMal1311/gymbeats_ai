"use client"

import { Source_Code_Pro } from "next/font/google";
import { usePathname } from "next/navigation";


const scp_font = Source_Code_Pro({
    weight: "500",
    subsets: [],
});


const Loading = () => {
    const path = usePathname();

    return (
        <div className='z-[999] flex flex-col w-screen h-screen justify-center items-center'>
            <div className='loader '></div>
            {path === "/activity" && <div className={`my-3 fixed top-[54%] left-[48.75%] ${scp_font.className}`}>Generating</div>}

        </div>
    )
}

export default Loading

