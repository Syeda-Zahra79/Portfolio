"use client";
import { useParams } from "next/navigation";
import { projects } from "@/assets/data";
import ProjectProps from "@/models/ProjectProps";
import dynamic from "next/dynamic";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ProjectDetailCard = dynamic(
  () => import("@/components/ProjectDetailCard"),
  { ssr: false }
);

function page() {
  const projectName = useParams().project.toString();
  let project_name = projectName.replace("%20", " ");
  const getProject = projects.filter(
    (pro: ProjectProps) => pro.name === project_name
  );
  const project: ProjectProps = getProject[0];
  
  

  useGSAP(() => {
    gsap.fromTo(
      ".move",
      {
        y: -100,
      },
      {
        y: 800,
        duration: 4,
        repeat: -1,
        yoyo: true,
        yoyoEase: "bounce.out",
      }
    );
  }, []);

  return (
    <section className="w-[100%] lg:w-[80%] 2xl:pt-[12%] 2xl:w-[70%] px-1 mx-auto overflow-y-hidden flex justify-end">
      <div className="overflow-hidden h-[100%] absolute top-0 right-28 -z-50">
        <h1 className="move font-archivo text-black opacity-[0.07] text-9xl relative -left-60 overflow-y-hidden -rotate-90 whitespace-nowrap">
          {project.name}.{project.name}.{project.name}.
        </h1>
      </div>

      <ProjectDetailCard project={project} />
    </section>
  );
}

export default page;
