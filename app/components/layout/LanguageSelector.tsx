import { Globe, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="relative flex items-center">

      <Globe
        size={20}
        className="absolute left-3 z-10 text-emerald-700"
      />

      <select
        value={i18n.language}
        onChange={changeLanguage}
        className="
          h-11
          appearance-none
          rounded-xl
          border border-emerald-200
          bg-white
          pl-10 pr-9
          text-sm
          font-medium
          text-emerald-900
          outline-none
          transition
          hover:border-emerald-400
          focus:ring-2
          focus:ring-emerald-300
          dark:border-slate-600
          dark:bg-slate-800
          dark:text-white
        "
      >
        <option value="en">English</option>
        <option value="mr">मराठी</option>
        <option value="hi">हिन्दी</option>
      </select>

      <ChevronDown
        size={16}
        className="pointer-events-none absolute right-3 text-emerald-700"
      />

    </div>
  );
};

export default LanguageSelector;