'use client'
import React, { useState } from 'react'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import { fontRobonto } from './Foonts'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
import Link from "next/link";
import Image from "next/image";
import { TbCircleArrowDown } from "react-icons/tb";
import { api, cli, smartcontracts, web } from '@/lib/data'
import Modal from './ui/modal'
import ModalDetail from './ui/modal'



const projectsChoices = ['Web', 'Api', 'Smart Contract', 'Cli']

const Project = () => {
  const [pilihan, setPilihan] = useState('Web');
  const [show, setShow] = useState(2);
  const [data, setData] = useState(web)

  const handleData = (e) => {
    if (e === 'Web') {
      setPilihan(e)
      setData(web);
      setShow(2)
    } else if (e === 'Api') {
      setPilihan(e)
      setData(api);
      setShow(2)
    } else if (e === 'Cli') {
      setPilihan(e)
      setData(cli);
      setShow(2)
    } else {
      setPilihan(e)
      setData(smartcontracts)
      setShow(2)
    }

  }

  return (
    <div className='mt-16 mb-8'>
      <div className="flex flex-col justify-center items-center animate-move-down">
        <div className='md:text-3xl text-xl flex gap-2'>
          <h1 className={`${fontRobonto.className} font-bold hover:scale-[1.02]`}>Projects</h1> 🧰
        </div>
        <div className="md:w-36 w-28 md:h-[6px] h-1 bg-gradient-to-l from-purple-400 via-purple-300 to-purple-500 -translate-x-1 rounded-full"></div>
        <div className="md:w-36 w-28 md:h-[6px] h-1 bg-purple-200 rounded-full translate-x-1"></div>
      </div>
      <div className='mt-8 animate-move-show'>
        <div className='flex md:gap-4 justify-center gap-2 md:justify-normal'>
          {
            projectsChoices.map((item, idx) => (
              <div key={idx}>
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="button"
                  className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                >
                  <h1 onClick={() => handleData(item)} className={` ${pilihan === item && "text-purple-300"} font-bold hover:scale-[1.02] text-xs `}>{item}</h1>
                </HoverBorderGradient>
              </div>

            ))
          }
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-1 animate-move-show">
        {
          data?.slice(0, 100).map((item, i) => (
            <CardContainer className="inter-var w-full" key={i}>
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-purple-300 w-full min-w-[10rem] h-auto rounded-xl border-2 p-6">
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
                    className="h-44 sm:h-72 md:h-[440px] lg:h-96 w-full object-contain object-center rounded-xl group-hover/card:shadow-xl"
                    alt={item.title}
                  />
                </CardItem>
                <div className="mt-6">
                  <CardItem
                    translateZ={20}
                    target="__blank"
                    className="px-2 md:px-4 md:py-2 rounded-xl text-xs font-normal dark:text-white flex justify-between"
                  >
                    {
                      item?.link !== undefined && <Link href={item?.link}>
                        <HoverBorderGradient
                          containerClassName="rounded-full"
                          as="button"
                          className="dark:bg-black bg-white text-black dark:text-white flex items-center"
                        >
                          <h1 className='font-bold hover:scale-[1.02] text-xs md:text-sm'>getCode →</h1>
                        </HoverBorderGradient></Link>
                    }
                    {
                      item?.detail !== undefined &&
                      <ModalDetail text="detail" data={item} />
                    }
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))
        }
      </div>
      {
        data.length >= show && <div className='flex justify-center w-full lg:mt-4'>
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            arrow={true}
            className="dark:bg-black bg-white text-black dark:text-white flex items-center"
          >
            <TbCircleArrowDown className='text-4xl lg:text-5xl' onClick={() => setShow(show + 2)} />
          </HoverBorderGradient>
        </div>
      }
    </div>
  )
}

export default Project
