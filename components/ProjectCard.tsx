import Link from "next/link";
import VideoPlayer from "./VideoPlayer";


const ProjectCard = ({project} : any) => {
  return (
    <div className="w-[85%] mx-auto lg:ml-0 lg:mr-0 lg:w-[47%] mt-10 pb-5 bg-[#e0dddd] drop-shadow-lg transition-all lg:hover:scale-[1.04]">
      <Link href={`/projects/${project.name}`}>
      {/* VideoContainer */}
      <VideoPlayer src={project.url} />
      {/* Content */}
      <div className="px-5">
        <h3 className="font-nunito my-2 text-2xl 2xl:text-3xl">{project.name}</h3>
        <p className="text-sm 2xl:text-xl">{project.shortDescription}</p>
        <div className="flex w-full gap-1 my-5 flex-wrap lg:flex-nowrap 2xl:gap-2">
          {project.techStack.map((stackItem: string, index: number) => (
            <p className="border border-gray-950 rounded-full h-fit py-0.5 px-2 w-fit text-sm 2xl:text-xl" key={index}>
              {stackItem}
            </p>
          ))}
        </div>
      </div>
    </Link>
    </div>
  );
};

export default ProjectCard;
