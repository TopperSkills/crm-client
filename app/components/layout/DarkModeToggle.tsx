import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDark = !dark;

    setDark(newDark);

    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
      className="
        flex h-11 w-11 items-center justify-center
        rounded-xl
        text-emerald-800
        transition
        hover:bg-emerald-100
        dark:text-emerald-300
        dark:hover:bg-slate-700
      "
    >
      {dark ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  );
};

export default DarkModeToggle;