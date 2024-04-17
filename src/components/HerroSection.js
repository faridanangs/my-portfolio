import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import myImage from "../../public/foto-pasdi-wc.webp"
import { MovingBorderBtn } from './ui/moving-border'

const HerroSection = () => {
    return (
        <div className='flex items-center justify-between min-h-[60vh] md:min-h-[40vh] flex-col-reverse md:flex-row'>
            <div className='space-y-10 text-center md:text-start'>
                <h1 className='text-3xl lg:text-6xl md:text-4xl font-bold mt-4'>Nice to meet you! 👋<br />
                    <span className='underline underline-offset-7 decoration-purple-300 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 '>I'm Faridanang.</span>
                </h1>
                <p className='md:pr-5 lg:max-w-xl max-w-lg text-lg text-gray-400'>
                    Hello, my name is farid anang samudra,
                    I am a junior <span className='text-xl font-bold text-white/80'>full-stack web developer</span> and <span className='text-xl font-bold text-white/80'>blockchain developer</span>, I can
                    assist you in creating the systems you need to enhance your company's or
                    business's profitability.
                </p>
                <Link href="mailto:some@gmail.com" className='inline-block '>
                    <div className='border-[.5px] md:border-none px-4 py-2 md:px-0 rounded-md border-purple-300'>
                        <div className='md:text-3xl text-xl flex gap-2'>
                            <h1 className=' font-bold hover:scale-[1.02] '>Contact Me</h1>📭
                        </div>
                        <div className="w-full md:h-[6px] h-1 bg-gradient-to-l from-purple-400 via-purple-300 to-purple-500 -translate-x-1 md:hidden rounded-full"></div>
                        <div className="w-full md:h-[6px] h-1 bg-purple-200 rounded-full translate-x-1 md:hidden"></div>
                    </div>
                </Link>
            </div>
            <div className='relative'>
                <div className='w-[20em] h-[22rem] relative'>
                    <Image src={myImage} alt='my image' fill priority quality={100} className='object-cover opacity-50 rounded-md' />
                </div>
                <div className="absolute bottom-5 md:bottom-4 left-0">
                    <MovingBorderBtn borderRadius='0.5rem' className="p-2 md:p-3 font-semibold">
                        <p><span className='text-xl'>💼</span> Available for Work(CV)</p>
                    </MovingBorderBtn>
                </div>
            </div>
        </div>
    )
}

export default HerroSection