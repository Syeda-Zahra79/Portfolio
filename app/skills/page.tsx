"use client";
import SidePanel from "@/components/SidePanel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function page() {
  useGSAP(() => {
    gsap.fromTo(
      ".move",
      {
        y: -500,
      },
      {
        y: 500,
        duration: 3,
        ease: "none",
        repeat: -1,
        yoyo: true,
        yoyoEase: "bounce.out",
      }
    );
  }, []);
  return (
    <main className="w-[100%] lg:w-[80%] flex justify-end overflow-y-hidden">
      <div className="overflow-hidden h-[100%] absolute top-0  -z-50">
        <h1 className="move font-archivo text-black opacity-[0.07] text-9xl relative -left-[22rem] overflow-y-hidden -rotate-90 whitespace-nowrap">
          Skills.Skills.Skills.
        </h1>
      </div>
      {/* <section className="w-[62vw] ml-5 pt-20 my-20 border border-pink-800"> */}
      <section className="flex flex-wrap w-[90%] 2xl:pt-[12%] 2xl:w-[70%] lg:w-[75%] pt-16 lg:pt-20 pl-6 mx-auto lg:mr-0 ">
        <h1 className="text-4xl text-center w-[100%] lg:text-left font-robotoCondensed font-semibold lg:text-6xl overflow-y-hidden">
          Skills.
        </h1>
        <div className="flex flex-wrap my-10 lg:my-2 overflow-hidden justify-center lg:justify-start">


          <div className="flex justify-center flex-col items-center mx-6 lg:mr-12 lg:ml-0 my-4 ">
            <Image src="/html.svg" alt="HTML" width={50} height={50} />
            <label className="lg:hidden">HTML</label>
          </div>

          <div className="flex justify-center flex-col items-center mx-6 lg:mr-12 lg:ml-0 my-4 ">
            <Image
              src="/css.svg"
              alt="CSS"
              width={50}
              height={50}
            />
            <label className="lg:hidden">CSS</label>
          </div>

          <div className="flex justify-center flex-col items-center mx-6 lg:mr-12 lg:ml-0 my-4 ">
            <Image
              src="/javascript.svg"
              alt="Javascript"
              width={50}
              height={50}
            />
            <label className="lg:hidden">JavaScript</label>
          </div>

          <div className="flex justify-center flex-col items-center mx-6 lg:mr-12 lg:ml-0 my-4 ">
            <Image
              src="/typescript.svg"
              alt="Typescript"
              width={40}
              height={40}
            />
            <label className="lg:hidden">HTML</label>
          </div>

          <div className="flex justify-center flex-col items-center mx-6 lg:mr-12 lg:ml-0 my-4 ">
            <Image
              src="/react.svg"
              alt="React"
              width={50}
              height={5}
            />
            <label className="lg:hidden">React</label>
          </div>

          <div className="flex justify-center flex-col items-center mx-6 lg:mr-12 lg:ml-0 my-4 ">
            <Image
              src="/nextjs.svg"
              alt="NextJS"
              width={50}
              height={50}
            />
            <label className="lg:hidden">NextJS</label>
          </div>

          <div className="flex justify-center flex-col items-center mx-6 lg:mr-12 lg:ml-0 my-4 ">
            <Image
              src="/angular.svg"
              alt="Angular"
              width={60}
              height={60}
            />
            <label className="lg:hidden">Angular</label>
          </div>

          <div className="flex justify-center flex-col items-center mx-6 lg:mr-12 lg:ml-0 my-4 ">
            <Image
              src="/redux.svg"
              alt="Redux"
              width={40}
              height={40}
            />
            <label className="lg:hidden">Redux</label>
          </div>

          <div className="flex justify-center flex-col items-center mx-6 lg:mr-12 lg:ml-0 my-4 ">
            <Image
              src="/tailwindcss.svg"
              alt="TailwindCSS"
              width={50}
              height={50}
            />
            <label className="lg:hidden">TaiwindCSS</label>
          </div>

          <div className="flex justify-center flex-col items-center mx-6 lg:mr-12 lg:ml-0 my-4 ">
            <Image
              src="/zustand.png"
              alt="Zustand"
              width={70}
              height={60}
            />
            <label className="lg:hidden">Zustand</label>
          </div>

          <div className="flex justify-center flex-col items-center mx-6 lg:mr-12 lg:ml-0 my-4 ">
            <Image
              src="/jquery.svg"
              alt="jQuery"
              height={40}
              width={40}
            />
            <label className="lg:hidden">jQuery</label>
          </div>

          <div className="flex justify-center flex-col items-center mx-6 lg:mr-12 lg:ml-0 my-4 ">
            <Image
              src="/firebase.svg"
              alt="Firebase"
              width={50}
              height={40}
            />
            <label className="lg:hidden">Firebase</label>
          </div>

          <div className="flex justify-center flex-col items-center mx-6 lg:mr-12 lg:ml-0 my-4 ">
            <Image
              src="/threeJS.svg"
              alt="ThreeJs"
              width={50}
              height={30}
            />
            <label className="lg:hidden">ThreeJS</label>
          </div>

          <div className="flex justify-center flex-col items-center mx-6 lg:mr-12 lg:ml-0 my-4 ">
            <Image
              src="/bootstrap.svg"
              alt="Bootstrap"
              width={50}
              height={50}
            />
            <label className="lg:hidden">Bootstrap</label>
          </div>

          <div className="flex justify-center flex-col items-center mx-6 lg:mr-12 lg:ml-0 my-4 ">
            <Image
              src="/oracle.svg"
              alt="Oracle"
              width={70}
              height={70}
            />
            <label className="lg:hidden">Oracle</label>
          </div>

          <div className="flex justify-center flex-col items-center mx-6 lg:mr-12 lg:ml-0 my-4 ">
            <Image
              src="/mysql.png"
              alt="MySQL"
              width={50}
              height={50}
            />
            <label className="lg:hidden">MySQL</label>
          </div>

          <div className="flex justify-center flex-col items-center mx-6 lg:mr-12 lg:ml-0 my-4 ">
            <Image
              src="/styled-components.svg"
              alt="MySQL"
              width={50}
              height={50}
              aria-label="Styled-Components"
            />
            <label className="lg:hidden">Styled Components</label>
          </div>
        </div>

        <Link
          href={"/projects"}
          className="text-2xl lg:text-xl mt-6 mb-6 text-black pl-1 overflow-y-hidden">
          <span className="hover:underline pr-4">See my work</span>
          <span className="text-4xl text-black opacity-70 ">&#8594;</span>
        </Link>
      </section>
    </main>
  );
}
