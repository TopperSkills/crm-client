import CategoryCard from "../home/CategoryCard";
import { categories } from "../data/categories";

const ProblemsPage = () => {
  return (
    <section className="px-6 py-12 lg:px-12">

      <div className="mx-auto max-w-6xl">

        <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
          Legal Problems
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          तुमची समस्या निवडा
        </h1>

        <p className="mt-3 max-w-2xl text-slate-500">
          खालीलपैकी तुमच्या समस्येशी संबंधित विषय निवडा.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>

      </div>

    </section>
  );
};

export default ProblemsPage;