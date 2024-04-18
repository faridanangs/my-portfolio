'use client'
import React, { useState } from 'react'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import { fontRobonto } from './Foonts'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
import Link from "next/link";
import Image from "next/image";
import defiIco from "../../public/defi-ico.webp";
import defiTracker from "../../public/defi-tracker.webp";
import agency from "../../public/agency-project.webp";
import alQuran from "../../public/alqur'an.webp";
import dExchange from "../../public/dex.webp";
import eFizza from "../../public/efizza.webp";
import eZone from "../../public/ezone.webp";


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
      title: "De-Exchange App",
      image: dExchange,
    },
    {
      title: "Landing page",
      image: agency,
    },
    {
      title: "Alquran Peoject",
      image: alQuran,
    },
    {
      title: "E-Pizza App",
      image: eFizza,
    },
    {
      title: "E-Tembeli App",
      image: eZone,
    },
  ]

  return (
    <div className='mt-16 min-h-screen'>
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                      className="h-72 w-full object-cover object-center rounded-xl group-hover/card:shadow-xl"
                      alt={item.title}
                    />
                  </CardItem>
                  <div className="mt-6">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="#"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      getCode →
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