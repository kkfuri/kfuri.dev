import Image from "next/image";
import projectData from "@/utils/project-data";

export default function Projects() {
  return (
    <div className="container min-h-screen mx-auto">
      <div className="grid grid-cols-1 grid-rows-3 gap-20">
        {projectData?.map((project) => (
          <div className="flex items-start w-full min-h-screen space-x-4">
            <a className="flex items-center overflow-hidden rounded-md shadow-sm-white">
              <Image src={project.placeholder} width={960} height={675} />
            </a>
            <div className="flex flex-col">
              <div className="flex flex-col flex-1 h-full">
                <h1 className="text-6xl font-bold leading-relaxed">
                  {project.name}
                </h1>
                <p
                  className="max-w-md my-2 text-justify"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
              </div>
              <ul className="flex flex-wrap max-w-md gap-2 mx-auto">
                {project.tech.map((i) => (
                  <li className="px-2 py-1 text-gray-900 bg-gray-50">{i}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
