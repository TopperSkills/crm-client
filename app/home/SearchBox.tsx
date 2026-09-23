import { useState } from "react";

const SearchBox = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="relative mx-auto -mt-7 max-w-4xl px-6">

      <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">

        <div className="flex items-center gap-3">

          <span className="hidden text-xl sm:block">
            🔍
          </span>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="उदा. ७/१२ फेरफार, कर्ज फसवणूक, वारसा हक्क..."
            className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 sm:text-base"
          />

          <button
            type="button"
            className="rounded-xl bg-emerald-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
          >
            शोधा
          </button>

        </div>

      </div>

    </div>
  );
};

export default SearchBox;