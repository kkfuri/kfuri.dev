import { useTheme } from "next-themes";

export default function DarkModeButton() {
  const { theme, setTheme } = useTheme();
  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <button
      className="fixed z-10 px-2 py-1 text-gray-600 transition-colors delay-75 bg-white border border-purple-300 cursor-pointer dark:border-red-400 top-2 right-4 dark:text-gray-200 dark:bg-gray-800 hover:text-purple-500 dark:hover:text-red-400"
      onClick={toggleTheme}
    >
      toggle color mode
    </button>
  );
}
