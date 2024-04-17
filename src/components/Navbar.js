import Link from 'next/link'
import React from 'react'
import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si"

const Navbar = () => {
    const sosials = [{
        link: "https://www.linkedin.com/",
        label: "LinkedIn",
        icon: SiLinkedin,
    },
    {
        link: "https://www.linkedin.com/",
        label: "Github",
        icon: SiGithub,
    },
    {
        link: "https://www.linkedin.com/",
        label: "Facebook",
        icon: SiFacebook,
    }
    ]

    return (
        <nav className='py-10 flex justify-between items-center'>
            <h1 className="text-2xl font-bold underline underline-offset-8 decoration-purple-400 -rotate-1">FaridAnangs <Link href="/">🤵🏽</Link></h1>
            <div className='flex items-center gap-5'>
                {
                    sosials.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={i}
                                href={item.link}
                                aria-label={item.label}>
                                <Icon className='w-5 h-5 hover:scale-125 transition-all' />
                            </Link>
                        )
                    }
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar