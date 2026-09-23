import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Sprout,
 
} from "lucide-react";
import { useTranslation } from "react-i18next";
// import { useNavigate } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import DarkModeToggle from "./DarkModeToggle";

interface HeaderProps {
  onMenuClick: () => void;
  sidebarOpen: boolean;
}

const Header = ({ onMenuClick, sidebarOpen }: HeaderProps) => {
  const { t } = useTranslation();
  //  const navigate = useNavigate();
const [showProfile, setShowProfile] = useState(false);
 

  useEffect(() => {
    const handleClickOutside = () => {
      setShowProfile(false);
    };

    if (showProfile) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showProfile]);

  return (
   <header
  className="
    sticky top-0 z-50
    border-b border-emerald-200
    bg-emerald-50
    shadow-sm
    dark:border-slate-700
    dark:bg-emerald-950 
  "
>
      <div className="flex h-20 items-center justify-between px-4 md:px-8">

        {/* ================= LEFT SIDE ================= */}
        <div className="flex items-center gap-3">

          {/* Menu Button */}
        {/* Menu */}
<button
  onClick={(e) => {
    e.stopPropagation();
    onMenuClick();
  }}
  aria-label="Toggle menu"
  className="
    flex h-11 w-11 items-center justify-center
    rounded-xl
    bg-white
    text-emerald-800
    shadow-sm
    transition
    hover:bg-emerald-100
    hover:shadow
    active:scale-95
    dark:bg-slate-800
    dark:text-emerald-300
  "
>
  {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
</button>

          {/* Logo */}
       <div
  className="
    hidden h-11 w-11
    items-center justify-center
    rounded-xl
    bg-emerald-800
    text-white
    shadow-sm
    sm:flex
  "
>
  <Sprout size={25} />
</div>

          {/* Title */}
         <div className="min-w-0">
  <h1
    className="
      truncate
      text-lg font-bold
      leading-tight
      text-emerald-950
      md:text-xl
      dark:text-emerald-300
    "
  >
    {t("header.title")}
  </h1>

  <p
    className="
      hidden
      text-xs
      text-emerald-700
      sm:block
      md:text-sm
      dark:text-emerald-400
    "
  >
    {t("header.subtitle")}
  </p>
</div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
      <div className="flex items-center gap-2">

  <div className="rounded-xl bg-white shadow-sm dark:bg-slate-800">
    <DarkModeToggle />
  </div>

  <div className="rounded-md bg-white shadow-sm dark:bg-slate-950">
    <LanguageSelector />
  </div>

  <div className="relative">
    {/* Your Profile button */}
  </div>

</div>
      </div>
    </header>
  );
};

export default Header;