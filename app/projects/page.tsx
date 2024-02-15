'use client'
import { projects } from "@/assets/data";
// import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import ProjectProps from "@/models/ProjectProps";
import dynamic from "next/dynamic";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Suspense } from "react";
import Loading from "./Loading";

const ProjectCard = dynamic(() => import("@/components/ProjectCard"), {
  ssr: false,
});

export default function Projects() {

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
    <main className="w-[100%] lg:w-[83%] flex justify-end">
       <div className="overflow-hidden h-[100%] 2xl:-left-[32rem]   absolute top-0 -z-50 hidden lg:block">
        <h1
          className="move font-archivo text-black opacity-[0.07] text-9xl relative -left-20 2xl:-left-60 overflow-y-hidden -rotate-90 whitespace-nowrap">
          Projects.Projects.Projects.
        </h1>
      </div>

      <section className="w-[90%] 2xl:w-[70%] 2xl:mx-auto 2xl:ml-[23%] 2xl:pt-[5%] mx-auto lg:ml-0 lg:mr-0 lg:w-[80%] px-1 flex lg:justify-between overflow-y-hidden flex-wrap ">

        {projects.map((project: ProjectProps) => (
          <Suspense fallback={<Loading />}>
            <ProjectCard project={project} />
          </Suspense>
        ))}

        <Link
          href={"/contact"}
          className="text-xl text-[#1f1e1e] pl-1 overflow-y-hidden w-[100%] my-10 lg:my-5 text-center lg:text-left">
          <span className="hover:underline pr-4">Get in touch</span>
          <span className="text-4xl text-black opacity-70 ">&#8594;</span>
        </Link>
      </section>
    </main>
  );
}
