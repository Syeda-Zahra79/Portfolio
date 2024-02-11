"use client";
import Image from "next/image";
import Link from "next/link";
import pigeon from "../public/pigeon.png";
import SidePanel from "@/components/SidePanel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Home() {
  useGSAP(() => {
    gsap.fromTo(
      ".move",
      {
        y: -500,
      },
      {
        y: 500,
        duration: 6,
        ease: "none",
        repeat: -1,
        yoyo: true,
      }
    );
  }, []);
  return (
    <main className="w-[100%] lg:w-[80%]  flex justify-end ">
      <div className="hidden h-[100%] absolute top-0 -z-50 overflow-y-hidden lg:block">
        <h1 className="move font-archivo text-black opacity-[0.07] text-9xl relative left-7 overflow-y-hidden -rotate-90 whitespace-nowrap">
          Welcome.Welcome.Welcome.{" "}
        </h1>
      </div>
      <section className="w-[90%] mx-auto 2xl:pt-[12%] 2xl:w-[70%] lg:w-[75%] lg:mr-0 pt-20 overflow-y-hidden text-center lg:text-left">
        <p className="text-xl pl-1">Hi, I am</p>
        <div>
          <h1 className="text-3xl xl:text-6xl mb-2 overflow-hidden px-0 font-robotoCondensed font-semibold">
            Bint-e-Zahra<span>.</span>
          </h1>
        </div>
        <div
          className="w-[90%] text-xl text-[#000000] opacity-70 spacing_5 mt-5 mb-7 pl-1">
          <p>
            Self-taught Front-end Developer aim to help people by escalating the{" "}
            <span className="font-semibold">accessibility</span> of Web
            Experiences. Thrilled to explore new things and bring unrealistic
            world to <span className="font-semibold">realistic</span> world.
          </p>
        </div>
        <Link href={"/about"} className="text-xl text-[#1f1e1e] pl-1">
          <span className="hover:underline pr-4">Get to know me</span>
          <span className="text-4xl text-black opacity-70 ">&#8594;</span>
        </Link>
      </section>
    </main>
  );
}
