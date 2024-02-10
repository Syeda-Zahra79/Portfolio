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
        <h3 className="font-nunito my-2 text-2xl">{project.name}</h3>
        <p className="text-sm">{project.shortDescription}</p>
        <div className="flex w-full gap-1 my-5 flex-wrap lg:flex-nowrap">
          {project.techStack.map((stackItem: string, index: number) => (
            <p className="border border-gray-950 rounded-full h-fit py-0.5 px-2 w-fit text-sm" key={index}>
              {stackItem}
            </p>
          ))}
          {/* <p className="border border-gray-950 rounded-full h-fit py-0.5 px-2 w-fit">
            TS
          </p>
          <p className="border border-gray-950 rounded-full h-fit py-0.5 px-2 w-fit">
            Resend
          </p>
          <p className="border border-gray-950 rounded-full h-fit py-0.5 px-2 w-fit whitespace-nowrap">
            Styled Components
          </p> */}
        </div>
      </div>
    </Link>
    </div>
  );
};

export default ProjectCard;
