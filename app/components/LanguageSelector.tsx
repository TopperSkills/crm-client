import { Globe } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

const languageNames: Record<string, string> = {
  mr: "मराठी",
  en: "English",
  hi: "हिंदी",
};

const LanguageSelector = () => {
  const { lang, setLang, languages } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe
        size={20}
        className="text-slate-600 dark:text-slate-300"
      />

      <select
        value={lang}
        onChange={(e) =>
          setLang(e.target.value as typeof lang)
        }
        className="
          rounded-xl
          border border-slate-200
          bg-white
          px-3 py-2
          text-sm font-semibold
          text-slate-700
          outline-none

          hover:border-emerald-400

          dark:border-slate-700
          dark:bg-slate-800
          dark:text-white
        "
      >
        {languages.map((language) => (
          <option key={language} value={language}>
            {languageNames[language] || language}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;