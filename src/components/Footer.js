import React from 'react'
import { fontSpacemono } from './Foonts'
import { PiCopyrightFill } from "react-icons/pi";

const Footer = () => {
    return (
        <div className={`${fontSpacemono.className} relative mt-24 w-full`}>
            <div className='absolute backdrop-blur-sm right-0 left-0 text-center bottom-1  flex items-center gap-1'>
                <PiCopyrightFill className='text-lg opacity-60' /><h1 className='text-xs opacity-60'>Created By❤️Anangs.</h1>
            </div>
        </div>
    )
}

export default Footer