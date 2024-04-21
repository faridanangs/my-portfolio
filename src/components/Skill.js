'use client'
import React, { useState } from 'react'
import { HoverEffect } from './ui/card-hover-effect'
import { fontRobonto } from './Foonts';
import { HoverBorderGradient } from './ui/hover-border-gradient';

// skills icon
import Html from "../../public/skils/web2/html.webp"
import Css from "../../public/skils/web2/css.webp"
import Tailwind from "../../public/skils/web2/tailwind.webp"
import Bootstrap from "../../public/skils/web2/bootstrap-framework-logo.webp"
import Framer from "../../public/skils/web2/framer.webp"
import Docker from "../../public/skils/web2/docker.webp"
import Git from "../../public/skils/web2/git.webp"
import Github from "../../public/skils/web2/github.webp"
import Golang from "../../public/skils/web2/golang.webp"
import Javascript from "../../public/skils/web2/javascript.webp"
import Mysql from "../../public/skils/web2/mysql.webp"
import Postgres from "../../public/skils/web2/postgre.webp"
import Python from "../../public/skils/web2/python.webp"
import ReactIcon from "../../public/skils/web2/react.webp"
import Redis from "../../public/skils/web2/redis.webp"
import Nginx from "../../public/skils/web2/nginx.svg"
import Websocket from "../../public/skils/web2/websocket.svg"
import Astro from "../../public/skils/web2/astro.svg"
import Nextjs from "../../public/skils/web2/nextjs.svg"
import Django from "../../public/skils/web2/django.svg"
import ApiLol from "../../public/skils/web2/api.webp"
import Fiber from "../../public/skils/web2/fiber.svg"
import Gin from "../../public/skils/web2/gin.svg"
import Gorm from "../../public/skils/web2/gorm.webp"
import Linux from "../../public/skils/web2/linux.webp"
import Grpc from "../../public/skils/web2/grpc.svg"
import Redux from "../../public/skils/web2/redux.svg"

// web3
import Solidity from "../../public/skils/web3/solidity.svg"
import OpnZplin from "../../public/skils/web3/opnzplin.svg"
import Ipfs from "../../public/skils/web3/ipfs.svg"
import Hardhat from "../../public/skils/web3/helmet.webp"
import Geth from "../../public/skils/web3/geth.webp"
import Chai from "../../public/skils/web3/chai.webp"
import Uniswap from "../../public/skils/web3/uniswap.webp"
import Ethers from "../../public/skils/web3/ethers.svg"
import Metamask from "../../public/skils/web3/metamask.svg"
import Chainlink from "../../public/skils/web3/chainlink.svg"



const Skill = () => {
  const [pilihan, setPilihan] = useState('web2')
  const skillsWeb2 = [
    {
      text: "HTML",
      icon: Html,
    },
    {
      text: "CSS",
      icon: Css,
    },
    {
      text: "Tailwind",
      icon: Tailwind,
    },
    {
      text: "Framer",
      icon: Framer,
    },
    {
      text: "Bootstrap",
      icon: Bootstrap,
    },
    {
      text: "Javascript",
      icon: Javascript,
    },
    {
      text: "ReactJS",
      icon: ReactIcon,
    },
    {
      text: "ReduxJS",
      icon: Redux,
    },
    {
      text: "NextJS",
      icon: Nextjs,
    },
    {
      text: "AstroJS",
      icon: Astro,
    },
    {
      text: "Golang",
      icon: Golang,
    },
    {
      text: "GoFiber",
      icon: Fiber,
    },
    {
      text: "GoGin",
      icon: Gin,
    },
    {
      text: "Gorm",
      icon: Gorm,
    },
    {
      text: "Python",
      icon: Python,
    },
    {
      text: "Django",
      icon: Django,
    },
    {
      text: "gRPC",
      icon: Grpc,
    },
    {
      text: "RestApi",
      icon: ApiLol,
    },
    {
      text: "Websocket",
      icon: Websocket,
    },
    {
      text: "Redis",
      icon: Redis,
    },
    {
      text: "PostgreSQL",
      icon: Postgres,
    },
    {
      text: "Mysql",
      icon: Mysql,
    },
    {
      text: "Git",
      icon: Git,
    },
    {
      text: "Github",
      icon: Github,
    },
    {
      text: "Docker",
      icon: Docker,
    },
    {
      text: "Nginx",
      icon: Nginx,
    },
    {
      text: "Linux",
      icon: Linux,
    },
  ];

  const skillsWeb3 = [
    {
      text: "EtherJS",
      icon: Ethers,
    },
    {
      text: "HardhatJS",
      icon: Hardhat,
    },
    {
      text: "ChaiJS",
      icon: Chai,
    },
    {
      text: "Metamask",
      icon: Metamask,
    },
    {
      text: "Solidity",
      icon: Solidity,
    },
    {
      text: "Uniswap",
      icon: Uniswap,
    },
    {
      text: "OpnZpplin",
      icon: OpnZplin,
    },
    {
      text: "Geth",
      icon: Geth,
    },
    {
      text: "Ipfs",
      icon: Ipfs,
    },
    {
      text: "Chainlink",
      icon: Chainlink,
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
              <h1 onClick={() => setPilihan('web2')} className={`font-bold text-sm ${pilihan === 'web2' && 'text-purple-300 scale-110' }`}>Web2 & Fullstack</h1>
            </HoverBorderGradient>
          </div>
          <div>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <h1 onClick={() => setPilihan('web3')} className={`font-bold text-sm  ${pilihan === 'web3' && 'text-purple-300 scale-110' }`}>Web3 & Blockchain</h1>
            </HoverBorderGradient>
          </div>
        </div>
        <div className="mt-8 overflow-y-scroll max-h-[70vh] ::- ">
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