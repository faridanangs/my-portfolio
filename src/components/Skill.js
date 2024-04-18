'use client'
import React, { useState } from 'react'
import { HoverEffect } from './ui/card-hover-effect'
import { SiAstro, SiBootstrap, SiCss3, SiDaisyui, SiFramer, SiHtml5, SiJavascript, SiMocha, SiNextdotjs, SiReact, SiTailwindcss } from 'react-icons/si';
import { BiHardHat } from "react-icons/bi"
import Html from "../../public/html.png"
import { fontRobonto } from './Foonts';
import { HoverBorderGradient } from './ui/hover-border-gradient';

const Skill = () => {
  const [pilihan, setPilihan] = useState('web2')
  const skillsWeb2 = [
    {
      text: "HTML",
      // icon: SiHtml5,
      icon: Html,
    },
    {
      text: "CSS",
      // icon: SiCss3,
      icon: Html,
    },
    {
      text: "Tailwind",
      // icon: SiTailwindcss,
      icon: Html,
    },
    {
      text: "Framer",
      // icon: SiFramer,
      icon: Html,
    },
    {
      text: "Bootstrap",
      // icon: SiBootstrap,
      icon: Html,
    },
    {
      text: "Javascript",
      // icon: SiJavascript,
      icon: Html,
    },
    {
      text: "ReactJS",
      // icon: SiReact,
      icon: Html,
    },
    {
      text: "NextJS",
      // icon: SiNextdotjs,
      icon: Html,
    },
    {
      text: "AstroJS",
      // icon: SiAstro,
      icon: Html,
    },
    {
      text: "Golang",
      // icon: Html,
      icon: Html,
    },
    {
      text: "GoFiber",
      // icon: Html,
      icon: Html,
    },
    {
      text: "GoGin",
      // icon: Html,
      icon: Html,
    },
    {
      text: "Gorm",
      // icon: Html,
      icon: Html,
    },
    {
      text: "Python",
      // icon: Html,
      icon: Html,
    },
    {
      text: "Django",
      // icon: Html,
      icon: Html,
    },
    {
      text: "gRPC",
      // icon: Html,
      icon: Html,
    },
    {
      text: "RestApi",
      // icon: Html,
      icon: Html,
    },
    {
      text: "Websocket",
      // icon: Html,
      icon: Html,
    },
    {
      text: "Redis",
      // icon: Html,
      icon: Html,
    },
    {
      text: "PostgreSQL",
      // icon: Html,
      icon: Html,
    },
    {
      text: "Mysql",
      // icon: Html,
      icon: Html,
    },
    {
      text: "Git",
      // icon: Html,
      icon: Html,
    },
    {
      text: "Github",
      // icon: Html,
      icon: Html,
    },
    {
      text: "Docker",
      // icon: Html,
      icon: Html,
    },
    {
      text: "Nginx",
      // icon: Html,
      icon: Html,
    },
  ];

  const skillsWeb3 = [
    {
      text: "EtherJS",
      // icon: SiDaisyui,
      icon: Html,
    },
    {
      text: "HardhatJS",
      // icon: SiDaisyui,
      icon: Html,
    },
    {
      text: "MochaJS",
      // icon: Html,
      icon: Html,
    },
    {
      text: "Metamask",
      // icon: Html,
      icon: Html,
    },
    {
      text: "Solidity",
      // icon: Html,
      icon: Html,
    },
    {
      text: "Uniswap",
      // icon: Html,
      icon: Html,
    },
    {
      text: "OpnZpplin",
      // icon: Html,
      icon: Html,
    },
    {
      text: "Evm",
      // icon: Html,
      icon: Html,
    },
    {
      text: "Geth",
      // icon: Html,
      icon: Html,
    },
    {
      text: "Ipfs",
      // icon: Html,
      icon: Html,
    },
  ]

  return (
    <div className='mt-16'>
      <div className="flex flex-col justify-center items-center">
        <div className='md:text-3xl text-xl flex gap-2'>
          <h1 className={`${fontRobonto.className} font-bold hover:scale-[1.02]`}>Skills</h1> ⚒️
        </div>
        <div className="md:w-32 w-20 md:h-[6px] h-1 bg-gradient-to-l from-purple-400 via-purple-300 to-purple-500 -translate-x-1 rounded-full"></div>
        <div className="md:w-32 w-20 md:h-[6px] h-1 bg-purple-200 rounded-full translate-x-1"></div>
      </div>
      <div className='mt-8'>
        <div className='flex  md:gap-8 justify-center gap-2 md:justify-normal'>
          <div>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <h1 onClick={() => setPilihan('web2')} className=' font-bold hover:scale-[1.02] text-sm '>Web2 & Fullstack</h1>
            </HoverBorderGradient>
          </div>
          <div>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <h1 onClick={() => setPilihan('web3')} className=' font-bold hover:scale-[1.02] text-sm '>Web3 & Blockchain</h1>
            </HoverBorderGradient>
          </div>
        </div>
        <div className="mt-8">
          {
            pilihan === 'web2' ? (
              <div>
                <HoverEffect items={skillsWeb2} className="mt-0" />
              </div>

            ) : (
              <div>
                <HoverEffect items={skillsWeb3} className="mt-0" />
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Skill