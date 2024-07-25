'use client'
import React, { useState } from 'react'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import { fontRobonto } from './Foonts'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
import Link from "next/link";
import Image from "next/image";
import { TbCircleArrowDown } from "react-icons/tb";

// web2
import defiIco from "../../public/projects/defi-ico.webp";
import defiTracker from "../../public/projects/defi-tracker.webp";
import agency from "../../public/projects/agency.webp";
import alQuran from "../../public/projects/alqur'an.webp";
import dExchange from "../../public/projects/dex.webp";
import eFizza from "../../public/projects/fizza.webp";
import tembeli from "../../public/projects/tembeli.webp";
import lingkungan from "../../public/projects/lingkungan.webp";
import dTodo from "../../public/projects/d-todo.webp";
import socialMedia from "../../public/projects/social-media.webp";
import nft from "../../public/projects/nft.webp"
import rainbowWallet from "../../public/projects/ranbow.webp";
import ruish from "../../public/projects/ruish.webp";
import tokenMarketplace from "../../public/projects/token-marketplace.png";


// web3
import gaslessToken from "../../public/projects/smartcontract/gaslesstoken.webp";
import swap from "../../public/projects/smartcontract/swap.webp";
import voting from "../../public/projects/smartcontract/voting.webp";
import exchange from "../../public/projects/smartcontract/exchange.webp";
import todo from "../../public/projects/smartcontract/todo.webp";
import MulswapToken from "../../public/projects/smartcontract/dex-token-marketplace.png";






// cli
import gosimpleconfig from "../../public/projects/cli/gocli.webp"
import goclitodo from "../../public/projects/cli/goclitodo.webp"

// api
import newsapi from "../../public/projects/api/newsapi.webp"

const web = [
  {
    title: "DAPP IDMedRec With Blockchain",
    image: "/projects/idmedrec-web.png",
    link: "https://github.com/faridanangs/idmedrec"
  },
  {
    title: "DAPP Ruish Nft MarketPlace",
    image: ruish,
    link: "https://github.com/faridanangs/ruish-nfts"
  },
  {
    title: "DEFI Staking Token",
    image: "/projects/staking-token-web.png",
    link: "https://github.com/faridanangs/dapp-staking-token"
  },
  {
    title: "DEX Token MarketPlace",
    image: tokenMarketplace,
    link: "https://github.com/faridanangs/swap-token-marketplace"
  },
  {
    title: "Web3 Rainbow-Wallet",
    image: rainbowWallet,
    link: "https://github.com/faridanangs/learn-rainbow-wallet"
  },
  {
    title: "DAPP Nft Minting",
    image: nft,
    link: "https://github.com/faridanangs/nft-project-dlt"
  },
  {
    title: "DEFI Ico",
    image: defiIco,
    link: "https://github.com/faridanangs/dapp-ICO-daulat",
  },
  {
    title: "DEFI Tracker Account",
    image: defiTracker,
    link: "https://github.com/faridanangs/defi-account-tracker",
    showDemo: "https://defi-account-tracker.vercel.app/"
  },
  {
    title: "DEX Crypto & Token",
    image: dExchange,
    link: "https://github.com/faridanangs/dex-app-swap-token",
  },
  {
    title: "DAPP Todo List",
    image: dTodo,
    link: "https://github.com/faridanangs/todolist-dapp",
  },
  {
    title: "Landing page",
    image: agency,
    link: "https://github.com/faridanangs/nextjs-14",
    showDemo: "https://nextjs-14-hazel.vercel.app/"
  },
  {
    title: "Alqurannte Web",
    image: alQuran,
    link: "https://github.com/faridanangs/quran-kita",
    showDemo: "https://al-qurankita.vercel.app/"
  },
  {
    title: "E-Pizza Marketplace",
    image: eFizza,
    link: "hhttps://github.com/faridanangs/eccomerce-fizza",
    showDemo: "https://fizzante.vercel.app/"
  },
  {
    title: "E-Tembeli Eccomerce",
    image: tembeli,
    link: "https://github.com/faridanangs/exemple-ecommerce-redux",
    showDemo: "https://exemple-ecommerce-redux.vercel.app/"
  },
  {
    title: "Rawat Lingkungan Web",
    image: lingkungan,
    link: "https://github.com/faridanangs/dapp-ICO-daulat/blob/main/README.md",
  },
  {
    title: "Fa Social Media Web",
    image: socialMedia,
    link: "https://github.com/faridanangs/sosial-media-apps",
  },
]
const smartcontracts = [
  {
    title: "Voting Smart Contract",
    image: voting,
    link: "https://github.com/faridanangs/smart-contract-voting-app"
  },
  {
    title: "Medical Record Smart Contract",
    image: "/projects/smartcontract/idmedrec.png",
    link: "https://github.com/faridanangs/idmedrec"
  },
  {
    title: "Multiple Swap Token Smart Contract",
    image: MulswapToken,
    link: "https://github.com/faridanangs/swap-token-marketplace/tree/main/deploys"
  },
  {
    title: "Gasless Transfer Token Smart Contract",
    image: gaslessToken,
    link: "https://github.com/faridanangs/smart-contract-gaslessTokenTransfer"
  },
  {
    title: "Swap Token Smart Contract",
    image: swap,
    link: "https://github.com/faridanangs/dex-app-swap-token/blob/main/fork/scripts/deploy.js",
  },
  {
    title: "Exchange Smart Contract",
    image: exchange,
  },
  {
    title: "Todo List Smart Contract",
    image: todo,
    link: "https://github.com/faridanangs/todolist-dapp"
  },
]
const cli = [
  {
    title: "Go Config Folder Cli",
    image: gosimpleconfig,
    link: "https://github.com/faridanangs/go-cli-app",
  },
  {
    title: "Go Todo List Cli",
    image: goclitodo,
    link: "https://github.com/faridanangs/go-cli-todo",
  }
]
const api = [
  {
    title: "News Api",
    image: newsapi,
    link: "https://github.com/faridanangs/gofiber-news-api",
  },
  {
    title: "Social Media Api",
    image: newsapi,
    link: "https://github.com/faridanangs/sosial-media-apps/tree/main/backend-jasangku-Kodu",
  },
  {
    title: "Post & Coment Api",
    image: newsapi,
    link: "https://github.com/faridanangs/gifiber-gorm-post-and-comment",
  }
]

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
          data?.slice(0, show).map((item, i) => (
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
                    className="h-44 sm:h-72 md:h-[440px] lg:h-72 w-full object-cover object-center rounded-xl group-hover/card:shadow-xl"
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
                      item?.showDemo !== undefined &&
                      <Link href={item?.showDemo}>
                        <HoverBorderGradient
                          containerClassName="rounded-full"
                          as="button"
                          className="dark:bg-black bg-white text-black dark:text-white flex items-center"
                        >
                          <h1 className=' font-bold hover:scale-[1.02] text-sm '>showDemo →</h1>
                        </HoverBorderGradient></Link>
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
