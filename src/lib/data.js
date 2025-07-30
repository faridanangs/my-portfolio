// web2
import defiIco from "../../public/projects/defi-ico.webp";
import defiTracker from "../../public/projects/defi-tracker.webp";
import agency from "../../public/projects/agency.webp";
import alQuran from "../../public/projects/alquran.png";
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
import zetacave from "../../public/projects/zetacave-portfolio.png";


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

export const web = [
  {
    title: "DAPP IDMedRec With Blockchain",
    image: "/projects/idmedrec-web.png",
    link: "https://github.com/faridanangs/idmedrec",
    detail: `
    IDMedRec is a cutting-edge medical record application that simplifies and secures patient data management. It features robust authentication for secure login and registration, allows doctors to create tamper-proof medical records, and provides intuitive search and access for both patients and doctors. Users have full control over their data with user-friendly privacy settings, and the application is accessible globally at any time, offering a convenient solution for managing medical records.
    `,
    tech: "Solidity, Next.js, Tailwind-css, Polygon-Amoy, IPFS, Hardhat, NextUI, AceternityUI",
    showDemo: "https://id-medrec.vercel.app"
  },
  {
    title: "Buchains Crypto Wallet",
    image: "/projects/crypto-wallet.png",
    link: "https://github.com/faridanangs/web3-crypto-wallet",
    detail: "Buchain Wallet is a crypto wallet application designed to securely and efficiently store and manage your cryptocurrency assets. Additionally, it includes a Chrome extension that enhances usability, allowing you to seamlessly interact with your crypto assets directly from your browser.",
    tech: "Golang, Fiber, Gorm, PostgreSQL, Docker, HTML, css, JavaScript",
    showDemo: "https://www.youtube.com/watch?v=GAOIwURUon8"
  },
  {
    title: "DAPP Zeta Cave",
    image: zetacave,
   link: "https://github.com/faridanangs",
    detail: "This project is a decentralized file storage platform powered by IPFS, allowing users to store and access files securely, censorship-resistant, and without relying on centralized servers. Data is distributed across a peer-to-peer network, giving users full control over their files.",
    tech: "Solidity, Next.js, Tailwind-css, IPFS, AceternityUI, Wagmi, Rainbow-Wallet, Ethers.js",
  },
  {
    title: "Ruish Nft MarketPlace",
    image: ruish,
    link: "https://github.com/faridanangs/ruish-nfts",
    detail: "Ruish NFT is an NFT marketplace where users can buy, mint, and transfer NFTs. Additionally, it provides a feature to view the transaction history of NFTs, offering a comprehensive overview of each asset's provenance and activity.",
    tech: "Solidity, Next.js, Tailwind-css, IPFS, Hardhat, AceternityUI, Wagmi, Rainbow-Wallet, Ethers.js",
    showDemo: "https://www.facebook.com/Tempnion7/videos/431584789655607"
  },
  {
    title: "DEFI Staking Token",
    image: "/projects/staking-token-web.png",
    link: "https://github.com/faridanangs/dapp-staking-token",
    detail: "This token staking application allows users to stake their tokens with various options for staking durations. Each staking period offers a different Annual Percentage Yield (APY), and there are early withdrawal fees that apply if tokens are unstaked before the end of the chosen staking period. Users can view both the APY and any associated early withdrawal fees before committing to a staking option.",
    tech: "Solidity, Javascript, HTML, Hardhat, css, Ethers.js, Polygon-Amoy",
    showDemo: "https://www.facebook.com/Tempnion7/videos/1418610385516470"
  },
  {
    title: "DEX Token MarketPlace",
    image: tokenMarketplace,
    link: "https://github.com/faridanangs/swap-token-marketplace",
    detail: "Dex Token Marketplace is a platform that enables users to exchange tokens for other tokens, tokens for ETH, and ETH for tokens. The website provides robust security measures to ensure the protection of your privacy and data throughout the transaction process.",
    tech: "Solidity, Next.js, Hardhat, Tailwind-css, Ethers.js, Ganache, Wagmi, Rainbow-Wallet, NextUI",
    showDemo: "https://www.facebook.com/Tempnion7/videos/839697601020253"
  },
  {
    title: "Web3 Rainbow-Wallet",
    image: rainbowWallet,
    link: "https://github.com/faridanangs/learn-rainbow-wallet",
    detail: "Rainbow Wallet is a user-friendly and visually appealing Ethereum wallet designed to help users easily manage their digital assets. It's particularly popular among those new to the Ethereum ecosystem due to its intuitive interface and features that cater to both beginners and advanced users",
    tech: "Wagmi, Rainbow-Wallet"
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
    detail: "A dApp-ICO is a decentralized application designed to facilitate the process of conducting an Initial Coin Offering (ICO) on a blockchain network. ICOs are a popular method for blockchain projects to raise funds by issuing and selling new tokens to investors.",
    tech: "Solidity, Next.js, Hardhat, Ganache, Ether.js, css"
  },
  {
    title: "DEFI Tracker Account",
    image: defiTracker,
    link: "https://github.com/faridanangs/defi-account-tracker",
    detail: "The DeFi Tracker Account on the Ethereum network is a comprehensive tool designed to monitor and manage your decentralized finance (DeFi) activities. This account provides users with real-time insights into their DeFi investments, including detailed tracking of token balances, yield farming, liquidity provision, and staking positions. It also offers analytics on historical performance, transaction history, and current asset allocation, enabling users to make informed decisions and optimize their DeFi strategies. With robust security features and seamless integration with Ethereum-based DeFi protocols, the DeFi Tracker Account ensures a secure and user-friendly experience for managing your DeFi portfolio.",
    tech: "Next.js, Ether.js, css, Infura, EtherScan, Axois"
  },
  {
    title: "DEX Crypto & Token",
    image: dExchange,
    link: "https://github.com/faridanangs/dex-app-swap-token",
  },
  {
    title: "DAPP Todo List",
    image: dTodo,
    detail: "DAPP Todo List is a decentralized application built on the Ethereum blockchain for managing tasks. It uses smart contracts to securely store and manage tasks, with all changes recorded on the blockchain. Developed with Ganache, it allows for quick testing and deployment of smart contracts, providing a reliable and transparent way to track your to-dos.",
    link: "https://github.com/faridanangs/todolist-dapp",
    tech: "Solidity, Ganache, Ethers.js, Next.js, Tailwind-css, NextUI"
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
    detail: "Alqurannte Web is a dynamic web application developed using ReactJS.",
    tech: "React, Redux-Toolkit, Axios, React-Router, Tailwind-css",
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
export const smartcontracts = [
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
    title: "Todo List Smart Contract",
    image: todo,
    link: "https://github.com/faridanangs/todolist-dapp"
  },
  {
    title: "Exchange Smart Contract",
    image: exchange,
  }
]
export const cli = [
  {
    title: "Go Config Folder Cli",
    image: gosimpleconfig,
    link: "https://github.com/faridanangs/go-cli-app",
    detail: "This CLI application is designed to automate the creation and configuration of folders and files in Golang, simplifying the development process.",
    tech: "Bash Shell, HTML"
  },
  {
    title: "Go Todo List Cli",
    image: goclitodo,
    link: "https://github.com/faridanangs/go-cli-todo",
  }
]
export const api = [
  {
    title: "News Api",
    image: newsapi,
    link: "https://github.com/faridanangs/gofiber-news-api",
  },
  {
    title: "Crypto Wallet Api",
    image: "/projects/api/crypto-wallet-api.png",
    link: "https://github.com/faridanangs/web3-crypto-wallet/tree/main/api"
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
