import { Search } from "lucide-react";

const ProblemSearchPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-5xl">

        <div className="rounded-3xl bg-emerald-900 p-8 text-white md:p-12">
          <p className="mb-3 text-sm font-semibold text-emerald-200">
            शेतकऱ्यांसाठी सहाय्य
          </p>

          <h1 className="text-3xl font-bold md:text-4xl">
            माझी समस्या शोधा
          </h1>

          <p className="mt-3 max-w-2xl text-emerald-100">
            तुमची कायदेशीर समस्या साध्या भाषेत लिहा आणि संबंधित मार्गदर्शन शोधा.
          </p>

          <div className="mt-7 flex overflow-hidden rounded-2xl bg-white">
            <input
              type="text"
              placeholder="उदा. ७/१२ मध्ये चुकीचा फेरफार झाला आहे..."
              className="min-w-0 flex-1 px-5 py-4 text-slate-800 outline-none"
            />

            <button className="flex items-center gap-2 bg-emerald-600 px-5 font-semibold text-white">
              <Search size={20} />
              शोधा
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProblemSearchPage;