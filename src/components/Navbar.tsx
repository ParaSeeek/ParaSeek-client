"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
const navItems = [
    { path: "/jobs", name: "Jobs" },
    { path: "/companies", name: "Companies" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
];

export const Navbar = () => {
    const pathname = usePathname();
    const [activeLink, setActiveLink] = useState(pathname);
    const [isMenuOpen, setisMenuOpen] = useState(false);

    const toggleMenu = () => {
      setisMenuOpen(!isMenuOpen);
    };
    useEffect(() => {
        setActiveLink(pathname);
    }, [pathname]);
    return (
        <header className="bg-background/50 flex items-center sticky h-16 px-2 top-0 left-0 backdrop-blur-sm">
            <nav className="container flex justify-between mx-auto items-center">
                <div onClick={toggleMenu} className="md:hidden flex duration-300 flex-col justify-around relative z-10 w-8 h-8 cursor-pointer">
                    <motion.div
                        animate={isMenuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
                        className="w-full h-[3px] bg-black rounded"
                    />
                    <motion.div
                        animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="w-3/5 h-[3px] bg-black rounded"
                    />
                    <motion.div
                        animate={isMenuOpen ? { rotate: -45, y: -11 } : { rotate: 0, y: 0 }}
                        className="w-full h-[3px] bg-black rounded"
                    />
                </div>
                <div className="text-lg font-bold">
                    <Link href="/" className='flex items-baseline'>
                        <span>Para</span><span className='font-medium text-primary text-xl'>Seek.</span>
                    </Link>
                </div>
                <div className={`flex flex-col transition-all duration-300 fixed left-0 top-0 h-screen bg-secondary items-center justify-center overflow-hidden md:relative md:bg-transparent md:flex-row ${isMenuOpen? "w-[70vw] md:w-auto":"w-[0vw] md:w-auto"}`}>
                    {navItems.map((item) => (
                        <Link onClick={toggleMenu} key={item.path} href={item.path}>
                            <div
                                className={`relative mx-2 px-2 py-2 ${activeLink === item.path ? 'text-primary' : 'hover:text-primary'
                                    } font-medium`}
                                onClick={() => setActiveLink(item.path)}
                            >
                                {item.name}
                                {activeLink === item.path && (
                                    <motion.div
                                        layoutId="underline"
                                        className={`absolute bottom-1 right-0 h-[2px] bg-primary rounded-lg w-full`}
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
                <Link href="/login">
                    <p className="bg-primary font-medium text-primary-foreground px-3 py-2 rounded-md hover:bg-primary/90">Login</p>
                </Link>
            </nav>
        </header>
    );
};