'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

export default function about() {

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
      },
    );
 }, []);
  return (
    <main className="w-[100%] lg:w-[80%] flex justify-end">
      <div className="hidden lg:block 2xl:-left-[14rem] absolute top-0 overflow-hidden h-[100%] -z-50">
        <h1
          className="move font-archivo text-black opacity-[0.07] text-9xl relative right-80 overflow-y-hidden -rotate-90 whitespace-nowrap">
          About.About.About.{" "}
        </h1>
      </div>
      <section className="w-[90%] 2xl:pt-[12%] 2xl:w-[70%] lg:w-[75%] lg:h-[70vh] pt-20 overflow-y-hidden text-center lg:text-left">

        <h1 className="text-4xl xl:text-6xl mb-2 overflow-hidden px-0 font-robotoCondensed font-semibold">
          About Me<span>.</span>
        </h1>
        <div
          className="w-[90%] text-xl text-[#000000] opacity-70 spacing_5 mt-8 lg:mt-5 mb-10 lg:mb-7 pl-1" >
          <p>
            Greetings! I'm Bint-e-Zahra, an enthusiastic{" "}
            <span className="font-semibold">Front-end Developer</span> based in{" "}
            <span className="font-semibold">Pakistan</span>. I excel at building{" "}
            <span className="font-semibold">user-friendly</span> websites that
            grab attention and guide smoothly. Curious Soul that loves to learn
            new <span className="font-semibold">technologies</span> and trends.
            When I am not immersed in the world of coding, I love to{" "}
            <span className="font-semibold">travel</span>.
          </p>
        </div>
        <Link target="_blank" href={"https://cloud.appwrite.io/v1/storage/buckets/65cdb557ba388c1c2572/files/65d81cd371a0ec112279/view?project=65cdb53942bee5c0d1f3&mode=admin"} className="lg:text-xl text-[#1f1e1e] text-2xl lg:pl-1">
          <span className="hover:underline pr-4">Resume</span>
          <span className="text-4xl text-black opacity-70 ">&#8594;</span>
        </Link>
      </section>
    </main>
  );
}
