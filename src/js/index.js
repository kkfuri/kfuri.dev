const projects = [
  {
    id: 1,
    name: "Covid no Brasil",
    placeholder:
      "https://github.com/kkfuri/svelte-covid/raw/master/.github/covid.gif?raw=true",
    repo: "https://github.com/kkfuri/svelte-covid",
    link: "https://covid-no-brasil.now.sh/",
    description: `A project designed to
    <strong>deliver information</strong> about the spread of
    COVID-19 in Brazilian states.
    <br />
    Developed with <strong>Svelte</strong> using
    <strong>Sapper</strong>, a framework for building
    high-performance web apps. All the styling was made using the
    Svelte style scoped block, that is, <strong>pure CSS</strong>.
    The data is obtained from an public API made by brazilians.
    The deploy was done using <strong>Vercel</strong>.`,
    tech: ["Svelte", "Sapper", "CSS", "Axios", "Vercel", "Javascript"],
  },
  {
    id: 2,
    name: "Superheroes",
    placeholder:
      "https://github.com/kkfuri/superheroes/blob/master/.github/superheroes.gif?raw=true",
    repo: "https://github.com/kkfuri/superheroes",
    link: "https://superheroes.now.sh/",
    description: `A project built with the intention of learning more about
    <strong>Next.js</strong>, <strong>TailwindCSS</strong> and
    creating a good experience for users. <br />
    Developed with React using Next.js. The whole style was done
    using the tailwind classes. The animation was built with
    <strong>framer motion</strong>. The implantation was done
    using <strong>Vercel</strong>. The data is obtained from an
    API called superheroapi.`,
    tech: [
      "React",
      "Next.js",
      "TailwindCSS",
      "Vercel",
      "Axios",
      "Framer Motion",
      "Javascript",
    ],
  },
  {
    id: 3,
    name: "Pop Blog",
    placeholder:
      "https://github.com/kkfuri/gatsby-anime-blog/raw/master/git/page.png?raw=true",
    repo: "https://github.com/kkfuri/gatsby-anime-blog",
    link: "https://pop-blog.vercel.app/",
    description: `A blog made for a friend who wanted to write his ideas about
    anime, was a good opportunity to learn more about some new
    technologies and try to
    <strong>extract the best for SEO</strong>.
    <br />
    Developed with React using <strong>Gatsby</strong>. The whole
    style was done using the tailwind classes. The animation was
    built with <strong>framer motion</strong>. Many plug-ins,
    settings and learning header tags to reach
    <strong>four 100 scores at lighthouse</strong>. The website
    can be installed using PWAs. Deployment was done using
    <strong>Vercel</strong>. The data is being created in
    <strong>Contentful</strong> and statically generates a new
    build to achieve maximum performance.`,
    tech: [
      "React",
      "Gatsby",
      "MDX",
      "SEO",
      "Offline-ready",
      "TailwindCSS",
      "Framer Motion",
      "Contentful",
      "Typescript",
      "Vercel",
    ],
  },
];

window.onload = () => {
  console.log("%c ", "padding: 400px 0");
  console.log(`     _     _
    | |   (_)
    | |__  _ _ __ ___   _ __ ___   ___
    | '_ \\| | '__/ _ \\ | '_ ' _ \\ / _ \\
    | | | | | | |  __/ | | | | | |  __/
    |_| |_|_|_|  \\___| |_| |_| |_|\\___|
    `);
  console.log(
    `%c contact email: kkfuri@gmail.com`,
    "color: #ffd000; padding: 12px 40px; background-color: black;"
  );

  // load card
  setTimeout(
    () => document.querySelector("#presentation .card").classList.add("show"),
    400
  );

  // render projects
  projects.forEach((proj) => {
    const element = generateProject(proj);
    const parentEl = document.getElementById("project-list");
    parentEl.appendChild(element);
  });
};

function generateProject(project) {
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
          ${project.tech.map((i) => `<span>${i}</span>`).join("")}
        </div>
      </div>
    </div>
  `;
  const element = document.createElement("li");
  element.innerHTML = generatedHtml;
  return element;
}
