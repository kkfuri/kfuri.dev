import { useRouter } from "next/router";
import Image from "next/image";

import projectData from "@/utils/project-data";
import Project from "@/components/project";

export default function Projects() {
  const router = useRouter();
  const projectFromQuery = router.query.project
    ? projectData.find((i) => i.id === Number(router.query.project))
    : null;
  return (
    <div className="container min-h-screen mx-auto">
      {!projectFromQuery && (
        <div className="flex-col items-center justify-center hidden min-h-screen py-8 lg:flex">
          <h2 className="mb-8 text-sm tracking-wider md:text-xl">
            select a project for more details
          </h2>
          <div className="grid grid-cols-2 gap-10 my-2">
            {projectData?.map((project) => (
              <div
                key={project.id}
                className="transition-transform delay-100 cursor-pointer transform-gpu hover:scale-105 group"
                onClick={() => router.push(`/?project=${project.id}`)}
              >
                <h3 className="mb-2 font-serif text-xl font-medium text-center text-black transition-colors dark:text-gray-50 group-hover:text-purple-500 dark:group-hover:text-red-400">
                  {project.name}
                </h3>
                <div className="flex items-center justify-center border border-purple-200 dark:border-transparent">
                  <Image src={project.placeholder} width={550} height={340} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {projectFromQuery && (
        <div className="flex-col items-center hidden min-h-screen justify-evenly lg:flex">
          <button
            onClick={() => router.push("/")}
            className="hover:text-purple-500 dark:hover:text-red-400"
          >
            back
          </button>
          <Project {...projectFromQuery} />
        </div>
      )}
      <div className="grid grid-cols-1 gap-20 lg:hidden">
        {projectData?.map((project, index) => (
          <div
            className="flex flex-col items-center justify-center min-h-screen"
            key={project.id}
          >
            <Project {...project} twisted={index % 2 === 0} />
          </div>
        ))}
      </div>
    </div>
  );
}
