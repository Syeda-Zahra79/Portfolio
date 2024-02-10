'use client'
import VideoPlayer from "./VideoPlayer"
import Link from "next/link";


function ProjectDetailCard({project} : any) {
  
  
  return (
    <div className="w-[90%] mx-auto lg:w-[75%] lg:mr-0 py-5">
         <h1 className="overflow-y-hidden font-robotoCondensed font-semibold text-3xl my-5 2xl:text-5xl">{project.name}</h1>
        <p className="my-5 2xl:text-xl">{project.shortDescription}</p>
        <VideoPlayer src={project.url}/>
        <h1  className="overflow-y-hidden font-robotoCondensed font-semibold text-3xl mb-3 mt-8  2xl:text-5xl">About</h1>
        <p className="2xl:text-xl">{project.longDescription}</p>
        <h1  className="overflow-y-hidden font-robotoCondensed font-semibold text-3xl mt-5  2xl:text-5xl">Technologies</h1>
        <ul  className="flex gap-2 lg:gap-3 flex-wrap lg:flex-nowrap">
            {project.techStack.map((techItem : string, index : number) => (
                <li className="border border-gray-950 rounded-full h-fit py-0.5 px-2 w-fit hover:scale-[1.1] my-3 2xl:text-xl" key={index}>{techItem}</li>
            ))}
        </ul>
        <h1  className="overflow-y-hidden font-robotoCondensed font-semibold text-3xl mt-5 mb-3  2xl:text-5xl">Live Website</h1>
        <Link href={`${project.liveWebsite}`} target="_blank" className="hover:underline 2xl:text-xl">{project.liveWebsite}</Link>
        <h1 className="overflow-y-hidden font-robotoCondensed font-semibold text-3xl mt-5 mb-3  2xl:text-5xl">Github Code</h1>
        <Link href={`${project.githubWebsite}`} target="_blank" className="hover:underline 2xl:text-xl">{project.githubWebsite}</Link>
    </div>
  )
}

export default ProjectDetailCard