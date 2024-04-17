// Space Mono roboto

import { Space_Mono, Roboto } from "next/font/google";

export const fontRobonto = Roboto(
    {
        weight: "500",
        style: "normal",
        subsets: ["latin"],
        preload: true,
    }
)
export const fontSpacemono = Space_Mono(
    {
        weight: "400",
        preload: true,
        style: "normal",
        subsets: ["latin"],
    }
)