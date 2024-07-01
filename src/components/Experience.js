"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { fontRobonto } from "./Foonts";

export function Experience() {  // Ubah nama komponen menjadi Experience
    return (
        <div className='mt-16'>
            <div className="flex flex-col justify-center items-center">
                <div className='md:text-3xl text-xl flex gap-2'>
                    <h1 className={`${fontRobonto.className} font-bold hover:scale-[1.02]`}>Experience</h1> ⚒️
                </div>
                <div className="md:w-52 w-36 md:h-[6px] h-1 bg-gradient-to-l from-purple-400 via-purple-300 to-purple-500 -translate-x-1 rounded-full"></div>
                <div className="md:w-52 w-36 md:h-[6px] h-1 bg-purple-200 rounded-full translate-x-1"></div>
            </div>
            <TracingBeam className="px-8">
                <div className="max-w-full antialiased pt-3 pb-8 relative pl-2">
                    {dummyContent.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10">
                            <div className="flex justify-between items-center">
                                <h1 className={`${twMerge("text-xl md:text-2xl lg:text-3xl")} ${fontRobonto.className}`}>
                                    {item.title}
                                </h1>
                                <p className="text-xs opacity-85">{item.time}</p>
                            </div>
                            <h2 className="bg-black text-white rounded-full text-sm w-fit py-1 mb-2">
                                {item.badge}
                            </h2>
                            <div className="text-sm prose prose-sm dark:prose-invert flex flex-col gap-2">
                                {item.description !== undefined && item.description.map((i, idx) => (
                                    <div className="flex items-start gap-3">
                                        <div className="bg-white h-[0.35rem] mt-2 w-[0.35rem] bg-gradient-to-br from-slate-300 via-slate-400 to-slate-700" />
                                        <p key={idx} className="text-xs">{i}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </TracingBeam>
        </div>
    );
}

const dummyContent = [
    {
        title: "Freelancer",
        description: [
            "Resolved technical issues and optimized site performance for better user experience.",
            "Developed various websites including Social Media Web, DEX, NFT, and Landing Pages.",
            "Stayed up-to-date with industry trends and technologies to offer cutting-edge solutions."
        ],
        time: "April/31/2023 - Present",
        badge: "Full-Stack Web Developer & Blockchain Developer"
    },
    {
        title: "Education",
        time: "July/01/2021 - July/01/2024",
        badge: "Sman 1 Gunungsari",
        description: [
            "Natural Science"
        ],
    },
];
