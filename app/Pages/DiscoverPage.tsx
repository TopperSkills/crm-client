import { ArrowRight, FileText, LandPlot, Sprout } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DiscoverPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#f7faf7]">

      {/* Hero Banner */}
      <section className="px-4 py-6 md:px-8 md:py-8">
        <div className="relative overflow-hidden rounded-3xl bg-emerald-900 px-6 py-10 text-white shadow-xl md:px-12 md:py-16">

          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-700/40" />
          <div className="absolute -bottom-24 right-32 h-52 w-52 rounded-full bg-emerald-800/60" />

          <div className="relative max-w-3xl">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
              <Sprout size={18} />
              शेतकऱ्यांसाठी कायदेशीर सहाय्य
            </div>

            <h1 className="text-3xl font-bold leading-tight md:text-5xl">
              तुमच्या हक्कांची माहिती,
              <br />
              आता सोप्या भाषेत.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-emerald-50 md:text-lg">
              जमीन, ७/१२, वारसा हक्क, कर्ज, फसवणूक आणि
              सरकारी योजनांशी संबंधित कायदेशीर समस्यांसाठी
              सोपे आणि विश्वासार्ह मार्गदर्शन मिळवा.
            </p>

            <button
              onClick={() => navigate("/")}
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-emerald-900 shadow-md transition hover:bg-emerald-50"
            >
              मार्गदर्शन सुरू करा
              <ArrowRight size={19} />
            </button>
          </div>

          {/* Farmer visual */}
          <div className="absolute bottom-6 right-8 hidden text-[110px] opacity-20 lg:block">
            🌾
          </div>
        </div>
      </section>

      {/* Discover heading */}
      <section className="px-4 pb-8 md:px-8">
        <div className="mb-6">
          <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
            Discover
          </p>

          <h2 className="mt-1 text-2xl font-bold text-slate-900">
            तुम्हाला कोणत्या विषयात मदत हवी आहे?
          </h2>

          <p className="mt-2 text-slate-500">
            तुमची समस्या निवडा आणि योग्य मार्गदर्शन मिळवा.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-3">

          <button
            onClick={() => navigate("/problems")}
            className="group rounded-2xl border border-emerald-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
              <LandPlot size={25} />
            </div>

            <h3 className="mt-5 font-bold text-slate-900">
              जमीन व ७/१२
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              जमीन मालकी, फेरफार, ७/१२ उतारा आणि जमीन वाद.
            </p>

            <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-emerald-700">
              अधिक जाणून घ्या
              <ArrowRight size={16} />
            </span>
          </button>

          <button
            onClick={() => navigate("/problems")}
            className="group rounded-2xl border border-emerald-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
              📜
            </div>

            <h3 className="mt-5 font-bold text-slate-900">
              वारसा हक्क
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              वारसा, मृत्यूपत्र आणि कुटुंबातील मालमत्तेचे हक्क.
            </p>

            <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-emerald-700">
              अधिक जाणून घ्या
              <ArrowRight size={16} />
            </span>
          </button>

          <button
            onClick={() => navigate("/documents")}
            className="group rounded-2xl border border-emerald-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
              <FileText size={25} />
            </div>

            <h3 className="mt-5 font-bold text-slate-900">
              आवश्यक कागदपत्रे
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              कायदेशीर प्रक्रियेसाठी आवश्यक कागदपत्रांची माहिती.
            </p>

            <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-emerald-700">
              कागदपत्रे पहा
              <ArrowRight size={16} />
            </span>
          </button>

        </div>
      </section>

      {/* Trust strip */}
      <section className="px-4 pb-10 md:px-8">
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 text-center">
          <p className="font-semibold text-emerald-900">
            🌱 सोपे • स्थानिक भाषेत • शेतकऱ्यांसाठी
          </p>

          <p className="mt-1 text-sm text-emerald-800">
            माहिती समजून घेण्यासाठी आणि पुढील योग्य पाऊल ठरवण्यासाठी सहाय्य.
          </p>
        </div>
      </section>

    </div>
  );
};

export default DiscoverPage;