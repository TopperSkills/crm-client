import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";

const DarkModeToggle = () => {
  const { isDark, toggleDark } = useDarkMode();

  return (
    <button
      type="button"
      onClick={toggleDark}
      aria-label={
        isDark
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      className="
        flex h-10 w-10
        items-center justify-center
        rounded-xl
        border border-slate-200
        bg-white
        text-slate-700
        shadow-sm
        transition
        hover:bg-slate-100

        dark:border-slate-700
        dark:bg-slate-800
        dark:text-yellow-300
        dark:hover:bg-slate-700
      "
    >
      {isDark ? (
        <Sun size={20} />
      ) : (
        <Moon size={20} />
      )}
    </button>
  );
};

export default DarkModeToggle;