export function addClassToCard() {
  const element = document.querySelector("#presentation .centered");
  setTimeout(() => element.classList.add("show"), 400);
}
