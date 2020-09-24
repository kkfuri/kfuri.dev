const art = {
  dark: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M632 888H392c-4.4 0-8 3.6-8 8v32c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-32c0-4.4-3.6-8-8-8zM512 64c-181.1 0-328 146.9-328 328 0 121.4 66 227.4 164 284.1V792c0 17.7 14.3 32 32 32h264c17.7 0 32-14.3 32-32V676.1c98-56.7 164-162.7 164-284.1 0-181.1-146.9-328-328-328zm127.9 549.8L604 634.6V752H420V634.6l-35.9-20.8C305.4 568.3 256 484.5 256 392c0-141.4 114.6-256 256-256s256 114.6 256 256c0 92.5-49.4 176.3-128.1 221.8z"></path></svg>`,
  light: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M348 676.1C250 619.4 184 513.4 184 392c0-181.1 146.9-328 328-328s328 146.9 328 328c0 121.4-66 227.4-164 284.1V792c0 17.7-14.3 32-32 32H380c-17.7 0-32-14.3-32-32V676.1zM392 888h240c4.4 0 8 3.6 8 8v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32v-32c0-4.4 3.6-8 8-8z"></path></svg>
    `,
} as const;

function getInitialTheme() {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (storedPrefs === "dark" || storedPrefs === "light") return storedPrefs;
    const matchesMode = (value: string) =>
      window.matchMedia(`(prefers-color-scheme: ${value})`).matches;
    if (matchesMode("dark")) return "dark";
    if (matchesMode("light")) return "light";
  }
  return "dark";
}

setTheme(getInitialTheme());

function alternate(el: Element, values: [string, string]) {
  el.classList.toggle(values[0]);
  el.classList.toggle(values[1]);
}

function setTheme(theme?: "dark" | "light") {
  const body = document.body;
  const btn = document.getElementById("dark-mode");

  // whether function is called with a theme set it
  // or alternate between dark and light;
  if (theme) body.className = theme;
  else alternate(body, ["dark", "light"]);

  window.localStorage.setItem("color-theme", body.className);
  btn.innerHTML = art[body.className as "dark" | "light"];
}

document.getElementById("dark-mode").onclick = () => setTheme();
