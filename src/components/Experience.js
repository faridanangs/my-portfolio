"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { fontRobonto } from "./Foonts";

export function Experince() {
    return (
        <div className='mt-16'>
            <div className="flex flex-col justify-center items-center">
                <div className='md:text-3xl text-xl flex gap-2'>
                    <h1 className={`${fontRobonto.className} font-bold hover:scale-[1.02]`}>Educations</h1> ⚒️
                </div>
                <div className="md:w-52 w-36 md:h-[6px] h-1 bg-gradient-to-l from-purple-400 via-purple-300 to-purple-500 -translate-x-1 rounded-full"></div>
                <div className="md:w-52 w-36 md:h-[6px] h-1 bg-purple-200 rounded-full translate-x-1"></div>
            </div>
            <TracingBeam className="px-8">
                <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                    {dummyContent.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10">
                            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                                {item.badge}
                            </h2>

                            <p className={twMerge("text-xl mb-4")}>
                                {item.title}
                            </p>

                            <div className="text-sm  prose prose-sm dark:prose-invert">
                                {item.description}
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
        description: (
            <>
                <p>
                    Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
                    reprehenderit deserunt amet laborum consequat adipisicing officia qui
                    irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
                    Amet culpa officia aliquip deserunt veniam deserunt officia
                    adipisicing aliquip proident officia sunt.
                </p>
            </>
        ),
        badge: "01-08-2023"
    },
    {
        title: "Freelancer",
        description: (
            <>
                <p>
                    Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
                    reprehenderit deserunt amet laborum consequat adipisicing officia qui
                    irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
                    Amet culpa officia aliquip deserunt veniam deserunt officia
                    adipisicing aliquip proident officia sunt.
                </p>
            </>
        ),
        badge: "01-08-2023"
    },
    {
        title: "",
        description: (
            <>
                <p>
                    In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
                    veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
                    reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
                    cillum ut mollit.
                </p>
            </>
        ),
        badge: "Changelog"
    },
];
