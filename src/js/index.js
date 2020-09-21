import projects from "../data/projects.js";

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

  loadDates();

  // load card
  setTimeout(
    () =>
      document.querySelector("#presentation .centered").classList.add("show"),
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

document.getElementById("arrow").onclick = () => {
  document.getElementById("personal-information").classList.toggle("open");
  document.getElementById("arrow").classList.toggle("open");
};

function loadDates() {
  const today = new Date();
  const birthDate = new Date("01/24/1998");
  let age = today.getFullYear() - birthDate.getFullYear();
  const todayMonth = today.getMonth();
  const birthMonth = birthDate.getMonth();
  const workingTime = today.getFullYear() - 2018;
  if (
    todayMonth < birthMonth ||
    (todayMonth == birthMonth && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  document.getElementById("age").textContent = age;
  document.getElementById("working").textContent = workingTime;
  return;
}
