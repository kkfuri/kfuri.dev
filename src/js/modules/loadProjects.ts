interface ProjectTypes {
  name: string;
  placeholder: string;
  repo?: string;
  link?: string;
  description: string;
  tech: string[];
}

//
// loadProjects.ts
// Create the innerHTML for a project and inserts it into a list item;
//
export function generateProject(project: ProjectTypes) {
  const generatedHtml = `
    <h4>${project.name}</h4>
    <div class="project">
      <img
        src="${project.placeholder}"
        alt="${project.name} placeholder image"
      />
      <div class="project-description">
        <div class="links">
            <a
              href="${project.repo}"
              target="_blank"
              rel="noopener noreferrer"
            >
              repository link
            </a>
          <a
          href="${project.link}"
            target="_blank"
            rel="noopener noreferrer"
            >project page</a
          >
        </div>
        <p>
          ${project.description}
        </p>
        <div class="project-tech">
          ${project.tech.map((tech) => `<span>${tech}</span>`).join("")}
        </div>
      </div>
    </div>
  `;
  const element = document.createElement("li");
  element.innerHTML = generatedHtml;
  return element;
}
