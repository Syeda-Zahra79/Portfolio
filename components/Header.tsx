"use client";

import Image from "next/image";
import pigeon from "../public/pigeon.png";
import menu from "../public/menu.png";
import hl from '../public/horizontal-line.png' 

import Link from "next/link";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navlinks = [
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Skills",
      href: "/skills",
    },
    {
      text: "Projects",
      href: "/projects",
    },
    {
      text: "Contact",
      href: "/contact",
    },
  ];

  useGSAP(() => {
    gsap.to(
      ".outerAnimation",
      {
        "clip-path": "circle(200% at 60px 60px)",
        duration: 1.5,
        ease: "power4.out",
      },
    );
    //gsap.fromTo(".move", { y: -500, duration: 2, repeat: -1 });
  }, []);

  return (
    <header className="my-10 lg:border lg:border-gray-950 rounded-full w-full lg:w-[85vw] mx-auto h-16 lg:px-16 py-2 flex justify-between pl-9">
      <Image
        src={pigeon}
        alt="Pigeon that represents Freedom"
        width={40}
        height={10}
      />
      {/* <img src="/menu.png" alt="Menu" /> */}

      <Image
        src={menu}
        alt="Menu"
        width={80}
        height={50}
        className="menu_scale lg:hidden cursor-pointer"
        onClick={() => setMenuOpen(true)}
      />

      {menuOpen && (
        <div className="outerAnimation w-[100%] h-[100%] bg-gray-900 absolute top-0 left-0 z-50
        ">
        {/* <div className="w-full h-[100vh]  bg-[#F0F0F0] overflow-y-hidden fixed z-50 text-gray-950 top-0 left-0 flex flex-col justify-center">
          <button className="absolute top-5 right-6">
            <Image src={'./close.svg'} alt="" width={50} height={50} className="opacity-[0.7]"   onClick={() => setMenuOpen(false)} />
          </button>
          <nav className="flex flex-col items-center gap-4 text-lg overflow-y-hidden">
            {navlinks.map((item: { text: string; href: string }) => (
              <>
                <li className="list-none px-8 font-robotoCondensed font-semibold text-gray-700 hover:text-black">
                  <Link href={item.href} onClick={() => setMenuOpen(false)}>{item.text}</Link>
                </li>
                <Image src={hl} alt="Line" width={100} height={3} className="w-auto  line_scale" />
              </>
            ))}
            <li className="list-none px-8 font-robotoCondensed font-semibold  text-gray-700 hover:text-black">
              <Link href={"/"} onClick={() => setMenuOpen(false)}>Resume</Link>
            </li>
            <Image src={hl} alt="Line" width={100} height={3} className="w-auto  line_scale" />
            <div className="flex w-[40%] justify-between">
              <Image src={'/linkedin.svg'} alt="LinkedIn" width={50} height={50} className="opacity-[.8]" />
              <Image src={'/github.svg'} alt="Github" width={50} height={50} 
              className="opacity-[.8]" 
              />
            </div>
            
          </nav>
        </div> */}
        </div>
      )}

      <nav className="hidden lg:flex items-center text-lg">
        {navlinks.map((item: { text: string; href: string }) => (
          <li className="list-none px-8">
            <Link href={item.href}>{item.text}</Link>
          </li>
        ))}
      </nav>
    </header>
  );
}
