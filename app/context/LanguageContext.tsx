import {
  createContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import copy from "../data/copy"

type LanguageCode = keyof typeof copy;

type LanguageContextType = {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  t: (typeof copy)[LanguageCode];
  languages: LanguageCode[];
};

export const LanguageContext =
  createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = "app-language";

const languages = Object.keys(copy) as LanguageCode[];

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider = ({
  children,
}: LanguageProviderProps) => {
  const [lang, setLangState] = useState<LanguageCode>(() => {
    const savedLanguage =
      localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (
      savedLanguage &&
      languages.includes(savedLanguage as LanguageCode)
    ) {
      return savedLanguage as LanguageCode;
    }

    return languages[0] || "en";
  });

  const setLang = (newLang: LanguageCode) => {
    if (!languages.includes(newLang)) {
      return;
    }

    setLangState(newLang);

    localStorage.setItem(
      LANGUAGE_STORAGE_KEY,
      newLang
    );
  };

  const t = copy[lang] || copy[languages[0]];

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t,
      languages,
    }),
    [lang, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};