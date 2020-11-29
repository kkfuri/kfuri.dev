import Presentation from "@/containers/presentation";
import Projects from "@/containers/projects";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();
  function setOppositeTheme() {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  }
  return (
    <div className="px-2">
      <div
        className="fixed z-10 px-2 py-1 text-black transition-colors delay-75 bg-white border border-purple-300 cursor-pointer dark:border-red-400 top-2 right-4 dark:text-white dark:bg-black hover:text-purple-500 dark:hover:text-red-400"
        onClick={setOppositeTheme}
      >
        toggle color mode
      </div>
      <Presentation />
      <Projects />
    </div>
  );
}
