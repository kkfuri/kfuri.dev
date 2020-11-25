import Image from "next/image";
import classnames from "classnames";

import projectData from "@/utils/project-data";

export default function Projects() {
  return (
    <div className="container min-h-screen mx-auto">
      <div className="grid grid-cols-1 gap-20">
        {projectData?.map((project, index) => (
          <div
            className="flex items-center min-h-screen mx-auto"
            key={project.id}
          >
            <div
              className={classnames("flex w-full flex-col ", {
                "lg:flex-row-reverse": index % 2 === 0,
                "lg:flex-row": index % 2 !== 0,
              })}
            >
              <a className="flex overflow-hidden rounded-md shadow-sm-white">
                <Image src={project.placeholder} width={771} height={450} />
              </a>
              <div
                className={classnames("flex flex-col justify-between flex-1", {
                  "lg:mr-12": index % 2 === 0,
                  "lg:ml-12": index % 2 !== 0,
                })}
              >
                <div className="flex flex-col">
                  <h1 className="text-6xl font-bold leading-relaxed text-center lg:text-left">
                    {project.name}
                  </h1>
                  <p
                    className="my-2 leading-snug tracking-wide lg:max-w-md"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />
                </div>
                <ul className="flex flex-wrap w-full max-w-md gap-2 mx-auto my-12 lg:mx-auto">
                  {project.tech.map((i) => (
                    <li className="px-2 py-1 text-gray-900 bg-gray-50" key={i}>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
