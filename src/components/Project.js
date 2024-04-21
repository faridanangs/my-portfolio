'use client'
import React, { useState } from 'react'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import { fontRobonto } from './Foonts'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
import Link from "next/link";
import Image from "next/image";
import defiIco from "../../public/projects/defi-ico.webp";
import defiTracker from "../../public/projects/defi-tracker.webp";
import agency from "../../public/projects/agency-project.webp";
import alQuran from "../../public/projects/alqur'an.webp";
import dExchange from "../../public/projects/dex.webp";
import eFizza from "../../public/projects/efizza.webp";
import eZone from "../../public/projects/ezone.webp";
import lingkungan from "../../public/projects/lingkungan.webp";
import dTodo from "../../public/projects/d-todo.webp";
import socialMedia from "../../public/projects/social-media.webp";


const Project = () => {
  const [pilihan, setPilihan] = useState('web')

  const web = [
    {
      title: "DeFi-App Ico",
      image: defiIco,
    },
    {
      title: "DeFi-App Tracker Account",
      image: defiTracker,
    },
    {
      title: "De-Exchange Web-App",
      image: dExchange,
    },
    {
      title: "De-Todo Web-App",
      image: dTodo,
    },
    {
      title: "Landing page Web-App",
      image: agency,
    },
    {
      title: "Alqurannte Web-App",
      image: alQuran,
    },
    {
      title: "E-Pizza Web-App",
      image: eFizza,
    },
    {
      title: "E-Tembeli Web-App",
      image: eZone,
    },
    {
      title: "Rawat Lingkungan Web-App",
      image: lingkungan,
    },
    {
      title: "Fa social media Web-App",
      image: socialMedia,
    },
  ]

  return (
    <div className='mt-16'>
      <div className="flex flex-col justify-center items-center">
        <div className='md:text-3xl text-xl flex gap-2'>
          <h1 className={`${fontRobonto.className} font-bold hover:scale-[1.02]`}>Projects</h1> 🧰
        </div>
        <div className="md:w-36 w-28 md:h-[6px] h-1 bg-gradient-to-l from-purple-400 via-purple-300 to-purple-500 -translate-x-1 rounded-full"></div>
        <div className="md:w-36 w-28 md:h-[6px] h-1 bg-purple-200 rounded-full translate-x-1"></div>
      </div>
      <div className='mt-8'>
        <div className='flex md:gap-4 justify-center gap-2 md:justify-normal'>
          <div>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <h1 onClick={() => setPilihan('web')} className=' font-bold hover:scale-[1.02] text-sm '>Web</h1>
            </HoverBorderGradient>
          </div>
          <div>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <h1 onClick={() => setPilihan('smart-contract')} className=' font-bold hover:scale-[1.02] text-sm '>Smart Contract</h1>
            </HoverBorderGradient>
          </div>
          <div>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <h1 onClick={() => setPilihan('api')} className=' font-bold hover:scale-[1.02] text-sm '>Api</h1>
            </HoverBorderGradient>
          </div>
          <div>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <h1 onClick={() => setPilihan('cli')} className=' font-bold hover:scale-[1.02] text-sm '>Cli</h1>
            </HoverBorderGradient>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-1">
        {
          pilihan === 'web' ? (
            web?.map((item, i) => (
              <CardContainer className="inter-var w-full" key={i}>
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full min-w-[10rem] h-auto rounded-xl border-4 p-6">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {item.title}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={item.image}
                      height={1000}
                      width={1000}
                      className="h-44 sm:h-72 md:h-[440px] lg:h-72 w-full object-cover object-center rounded-xl group-hover/card:shadow-xl"
                      alt={item.title}
                    />
                  </CardItem>
                  <div className="mt-6">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="#"
                      target="__blank"
                      className="px-2 md:px-4 md:py-2 rounded-xl text-xs font-normal dark:text-white flex justify-between"
                    >
                      <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="dark:bg-black bg-white text-black dark:text-white flex items-center"
                      >
                        <h1 className='font-bold hover:scale-[1.02] text-sm'>getCode →</h1>
                      </HoverBorderGradient>

                      <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="dark:bg-black bg-white text-black dark:text-white flex items-center"
                      >
                        <h1 className=' font-bold hover:scale-[1.02] text-sm '>showDemo →</h1>
                      </HoverBorderGradient>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))
          ) : ("")
        }
      </div>
    </div>
  )
}

export default Project