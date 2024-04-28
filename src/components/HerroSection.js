import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import myImage from "../../public/foto-pasdi-wc.webp"
import { MovingBorderBtn } from './ui/moving-border'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import { fontRobonto } from './Foonts'

const HerroSection = () => {
    return (
        <div className='flex items-center justify-between min-h-[60vh] md:min-h-[60vh] flex-col-reverse md:flex-row'>
            <div className='space-y-10 text-center md:text-start'>
                <h1 className='text-3xl lg:text-6xl md:text-4xl font-bold mt-4'>Nice to meet you! 👋<br />
                    <span className='underline underline-offset-7 decoration-purple-300 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 '>I'm Faridanang.</span>
                </h1>
                <p className='md:pr-5 lg:max-w-xl max-w-lg text-lg text-gray-400'>
                    Hello, my name is Farid Anang Samudra,
                    I am a junior <span className='text-xl font-bold text-white/80'>full-stack web developer</span> and <span className='text-xl font-bold text-white/80'>blockchain developer</span>, I can
                    assist you in creating the systems you need to enhance your company's or
                    business's profitability.
                </p>
                <Link href="faridanangs11@gmail.com" className='inline-block '>
                    <div>
                        <div className='md:text-3xl text-xl flex gap-2'>
                            <HoverBorderGradient
                                containerClassName="rounded-full"
                                as="button"
                                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                            >
                                <h1 className=' font-bold hover:scale-[1.02] '>Contact Me</h1>📭
                            </HoverBorderGradient>
                        </div>
                    </div>
                </Link>
            </div>
            <div className='relative'>
                <Image src={myImage} alt='my image' height={250} width={250} priority quality={100} className='object-cover opacity-70 rounded-md lg:w-[20rem]' />
                <div className="absolute bottom-5 md:bottom-4 left-0">
                    <MovingBorderBtn borderRadius='0.5rem' className="p-2 md:p-3 font-semibold">
                        <Link href="https://drive.google.com/file/d/1M-up5O23twAOqDMim-GAKCHB87POXIcr/view?usp=drive_link"><span className='text-xl'>💼</span> Available for Work(CV)</Link>
                    </MovingBorderBtn>
                </div>
            </div>
        </div>
    )
}

export default HerroSection