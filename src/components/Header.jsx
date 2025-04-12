"use client"

import React, { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import { PiChefHatBold } from "react-icons/pi";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { useWindowScroll } from 'react-use';
import gsap from "gsap";

const Header = ({containerClass}) => {
    const headerRef = useRef(null);
    const lastScrollY = useRef(0);
    const [scrolled, setScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const { y: scrollY } = useWindowScroll();

    // Handle scroll visibility + color state
    useEffect(() => {
        if (scrollY === 0) {
            setIsVisible(true);
            setScrolled(false); // At top, remove background
        } else if (scrollY > lastScrollY.current) {
            setIsVisible(false); // scrolling down, hide
            setScrolled(true);
        } else {
            setIsVisible(true); // scrolling up, show
            setScrolled(true);
        }
        lastScrollY.current = scrollY;
    }, [scrollY]);

    useEffect(() => {
        if (!headerRef.current) return;
        gsap.to(headerRef.current, {
            y: isVisible ? 0 : -100,
            opacity: isVisible ? 1 : 0,
            duration: 0.8,
            ease: "power3.inOut",
        });
    }, [isVisible]);

    return (
        <header
            ref={headerRef}
            className={`top-0 left-0 right-0 z-50 w-full px-5 xl:px-15 transition-colors duration-300 ${
                scrolled ? "bg-[#141414]" : "bg-transparent"
            } ${containerClass}`}
        >
            <nav className="flex xl:justify-between justify-center items-center w-full p-4 rounded-full text-white">
                <div className="flex items-center gap-1 xl:ml-2 cursor-pointer">
                    <PiChefHatBold className="text-4xl header-head" />
                    <Link href="#" className="hidden xl:block text-5xl font-bold header-head">
                        Grubify
                    </Link>
                </div>
                <div className="hidden xl:flex gap-5 font-medium mr-2 text-2xl">
                    <Link href="#" className="header-social"><FaFacebook /></Link>
                    <Link href="#" className="header-social"><FaInstagram /></Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
