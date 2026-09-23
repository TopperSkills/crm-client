import { Link } from "react-router-dom";
import CategoryCard from "../home/CategoryCard";
import { categories } from "../data/categories";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="border-b border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-green-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
              ⚖️ मोफत कायदेशीर मार्गदर्शन
            </div>

            <h1 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              ग्राम-विधी सहाय्यक
            </h1>

            <p className="mt-3 text-base font-medium text-emerald-700 sm:text-lg">
              Gram-Legal Sahayak • Legal Problem Advisory
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              तुमच्या कायदेशीर समस्येची योग्य माहिती मिळवा. विषय निवडा,
              आवश्यक कागदपत्रे जाणून घ्या आणि पुढील योग्य पाऊल समजून घ्या.
            </p>

            {/* Search */}
            <div className="mt-8 flex max-w-2xl items-center rounded-2xl border border-slate-200 bg-white p-2 shadow-md">
              <span className="px-3 text-xl">🔍</span>

              <input
                type="text"
                placeholder="उदा. ७/१२ फेरफार, कर्ज फसवणूक, वारसा हक्क..."
                className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />

              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-lg text-white transition hover:bg-emerald-700"
                aria-label="Voice search"
              >
                🎤
              </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                🔊 ऐका / Listen
              </button>

              <button
                type="button"
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                मराठी / EN
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-600">
              Step 2 of 6
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              विषय निश्चिती
            </h2>

            <p className="mt-2 text-sm text-slate-500 sm:text-base">
              तुमची कायदेशीर समस्या कोणत्या विषयाशी संबंधित आहे?
            </p>
          </div>

          <span className="text-sm font-medium text-slate-400">
            Choose Category
          </span>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-600">
              Simple Process
            </p>

            <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
              कसे काम करते?
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                icon: "📂",
                title: "विषय निवडा",
                text: "तुमच्या समस्येशी संबंधित कायदेशीर विषय निवडा.",
              },
              {
                number: "02",
                icon: "📄",
                title: "माहिती मिळवा",
                text: "आवश्यक कागदपत्रे आणि कायदेशीर माहिती समजून घ्या.",
              },
              {
                number: "03",
                icon: "🤝",
                title: "योग्य पाऊल उचला",
                text: "पुढे काय करायचे याबद्दल स्पष्ट मार्गदर्शन मिळवा.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{item.icon}</span>

                  <span className="text-sm font-bold text-emerald-600">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-5 font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency */}
      <section className="bg-emerald-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="text-white">
            <h2 className="text-xl font-bold">
              तातडीची मदत हवी आहे?
            </h2>

            <p className="mt-1 text-sm text-emerald-100">
              फसवणूक किंवा गंभीर कायदेशीर परिस्थितीत योग्य हेल्पलाइनशी संपर्क
              करा.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="tel:15100"
              className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-emerald-800 shadow-sm hover:bg-emerald-50"
            >
              ☎ 15100 Legal Help
            </a>

            <a
              href="tel:1930"
              className="rounded-xl bg-red-500 px-5 py-3 text-sm font-bold text-white hover:bg-red-600"
            >
              🚨 1930 Cyber Fraud
            </a>
          </div>
        </div>
      </section>

      {/* Bottom link */}
      <div className="bg-slate-900 px-4 py-6 text-center">
        <p className="text-sm text-slate-400">
          कागदपत्रांची माहिती हवी आहे?
          <Link
            to="/documents"
            className="ml-2 font-semibold text-emerald-400 hover:text-emerald-300"
          >
            Documents पहा →
          </Link>
        </p>
      </div>
    </main>
  );
};

export default HomePage;