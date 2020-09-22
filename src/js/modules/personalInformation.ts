document.getElementById("arrow").onclick = () => {
  const personalEl = document.getElementById("personal-information");
  personalEl.setAttribute(
    "aria-hidden",
    personalEl.getAttribute("aria-hidden") === "true" ? "false" : "true"
  );

  const arrowElement = document.getElementById("arrow");
  arrowElement.setAttribute(
    "aria-pressed",
    arrowElement.getAttribute("aria-pressed") === "true" ? "false" : "true"
  );
};
