import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import myImage from "../../public/myfoto.webp"
import { MovingBorderBtn } from './ui/moving-border'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import { fontRobonto } from './Foonts'

const HerroSection = () => {
    return (
        <div className='flex items-center justify-between min-h-[60vh] md:min-h-[60vh] flex-col-reverse md:flex-row animate-move-up'>
            <div className='space-y-10 text-center md:text-start'>
                <h1 className='text-3xl lg:text-6xl md:text-4xl font-bold mt-4'>Nice to meet you, <span className='hand'>👋</span><br />
                    <span className='underline underline-offset-[3px] md:underline-offset-[4px] lg:underline-offset-[6px] decoration-purple-300 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 '>I'm Faridanang</span>
                </h1>
                <p className='md:pr-6 lg:max-w-xl max-w-lg text-lg text-gray-400 px-5  text-justify md:px-0'>
                    Hello! I'm Farid Anang Samudra from Lombok Barat, NTB, Indonesia. As a passionate <span className='text-xl font-bold text-white/80'>Full-Stack Web2</span> and <span className='text-xl font-bold text-white/80'>Fullstack Web3 Developer</span>, I specialize in building scalable web applications and secure blockchain solutions. My expertise spans across Web2 and Web3 technologies, where I constantly innovate, solve complex problems, and embrace the latest tech trends.

                </p>
                <Link href="mailto:faridanangs11@gmail.com" className='inline-block '>
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
                <div className="absolute bottom-3 -left-8 md:bottom-4 md:left-0">
                    <MovingBorderBtn borderRadius='0.5rem' className="p-1 px-2 md:p-1 md:px-2 font-semibold">
                        <Link href="https://drive.google.com/file/d/1rkpiWxj1xRc_0Vhans-eWl6qDjfLNCpp/view?usp=sharing"><span className='text-xl'>💼</span> View My CV</Link>
                    </MovingBorderBtn>
                </div>
            </div>
        </div>
    )
}

export default HerroSection
