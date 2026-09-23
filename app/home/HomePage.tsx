import Hero from "./Hero";
import SearchBox from "./SearchBox";
import CategoryCard from "./CategoryCard";
import { categories } from "../data/categories";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Hero />

      <SearchBox />

      {/* Legal Categories */}
      <section className="bg-slate-50 px-6 py-14 dark:bg-slate-950 lg:px-12">
        <div className="mx-auto max-w-6xl">

          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
              {t("home.legalCategories")}
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              {t("home.helpTitle")}
            </h2>

            <p className="mt-2 max-w-2xl text-slate-500 dark:text-slate-400">
              {t("home.helpDescription")}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Trust Section */}
      <section className="border-y border-slate-200 bg-white px-6 py-12 dark:border-slate-800 dark:bg-slate-900 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3">

          {/* Secure Information */}
          <div className="rounded-2xl bg-slate-50 p-6 dark:bg-slate-800">
            <div className="text-2xl">🔒</div>

            <h3 className="mt-3 font-bold text-slate-900 dark:text-white">
              {t("home.secureTitle")}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              {t("home.secureDescription")}
            </p>
          </div>

          {/* Simple Information */}
          <div className="rounded-2xl bg-slate-50 p-6 dark:bg-slate-800">
            <div className="text-2xl">📚</div>

            <h3 className="mt-3 font-bold text-slate-900 dark:text-white">
              {t("home.simpleTitle")}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              {t("home.simpleDescription")}
            </p>
          </div>

          {/* Proper Guidance */}
          <div className="rounded-2xl bg-slate-50 p-6 dark:bg-slate-800">
            <div className="text-2xl">🤝</div>

            <h3 className="mt-3 font-bold text-slate-900 dark:text-white">
              {t("home.guidanceTitle")}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              {t("home.guidanceDescription")}
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default HomePage;