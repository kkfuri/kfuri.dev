import {
  addClassToCard,
  consoleMessage,
  loadDates,
  generateProject,
} from "./modules/index";
import "./modules/personalInformation";
import "./modules/darkMode";

import projectsData from "../data/projects.js";

window.onload = () => {
  consoleMessage("kkfuri@gmail.com");
  loadDates({ birth: "01/24/1998", workingYear: 2018 });
  addClassToCard();

  projectsData.forEach((proj) => {
    const element = generateProject(proj);
    const parentEl = document.getElementById("project-list");
    parentEl.appendChild(element);
  });
};
