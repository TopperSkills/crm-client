import { Link } from "react-router-dom";
import type { Category } from "../types/category";

type CategoryCardProps = {
  category: Category;
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link
      to={`/problems/${category.id}`}
      className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-50 text-3xl">
          {category.icon}
        </div>

        {category.urgent && (
          <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
            तातडीचे
          </span>
        )}
      </div>

      <div className="mt-5">
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700">
          {category.title}
        </h3>

        <p className="mt-1 text-sm font-medium text-emerald-700">
          {category.subtitle}
        </p>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          {category.description}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {category.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="text-sm font-semibold text-emerald-700">
          मार्गदर्शन पहा
        </span>

        <span className="text-lg text-emerald-700 transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;