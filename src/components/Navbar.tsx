"use client"

import Image from "next/image";
import Hamburger from "@/assets/svg/hamburger.svg"
import Search from "@/assets/svg/search.svg"
import Cart from "@/assets/svg/cart.svg"
import Pacman from "@/assets/svg/pacman.svg"
import Link from "next/link";
import { useState } from "react";

const navButtons = [
    {
        href: "/",
        icon: Search
    },
    {
        href: "/",
        icon: Cart
    },
    {
        href: "/",
        icon: Pacman
    }
]

const navItems = [
    {
        href: "/",
        text: "home"
    },
    {
        href: "/",
        text: "catalog"
    },
    {
        href: "/",
        text: "contact"
    },
]

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav className="relative w-full grid place-items-center">
            <div className="fixed w-[95%] lg:w-5xl top-4 h-15 px-5 border flex items-center justify-between rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30">
                {/* hamburger */}
                <span
                    className="md:hidden"
                    onClick={() => setOpen(!open)}>
                    <Image
                        src={Hamburger}
                        alt="hamburger"
                        width={1000}
                        height={1000}
                        className="object-cover w-7 cursor-pointer"
                    />
                </span>
                {/* logo */}
                <Link href="/">
                    <div className="w-22.5 hidden md:block">
                        <Image
                            src="https://res.cloudinary.com/drynqkitl/image/upload/v1742750210/logo_eik8we.png"
                            alt="logo"
                            width={1000}
                            height={1000}
                        />
                    </div>
                </Link>
                {/* nav items */}
                <div className="md:flex gap-14 hidden">
                    {
                        navItems.map((item, i) => (
                            <Link
                                className="font-turret-road uppercase font-bold hover:underline transition-transform"
                                key={i}
                                href={item.href}>{item.text}</Link>
                        ))
                    }
                </div>
                {/* nav buttons */}
                <div className="flex gap-2.5">
                    {
                        navButtons.map((item, i) => (
                            <div key={i} className="h-10 w-10 bg-red-500 rounded-lg bg-gradient-to-b from-red-500 to-red-800 border-red-500 cursor-pointer">
                                <Link href={item.href} className="grid place-items-center w-full h-full">
                                    <Image
                                        src={item.icon}
                                        alt="nav-items"
                                        width={1000}
                                        height={1000}
                                        className="object-cover w-5"
                                    />
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* drop down menu */}
            <div className={`
                 ${open ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"} transition-all duration-300 ease-in-out
                 fixed flex flex-col justify-center pl-5 gap-4 top-20 w-[95%] h-40 border rounded-b-xl rounded-t-smbackdrop-filter backdrop-blur-xl bg-opacity-30`}>
                {
                    navItems.map((item, i) => (
                        <Link
                            className="font-turret-road uppercase font-bold hover:underline transition-transform "
                            key={i}
                            href={item.href}>{item.text}</Link>
                    ))
                }
            </div>
        </nav>
    )
}
