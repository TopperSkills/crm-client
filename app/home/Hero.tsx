import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-emerald-950 px-6 py-16 text-white lg:px-12 lg:py-20">

      <div className="mx-auto max-w-6xl">

        <div className="max-w-3xl">

          <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-emerald-100">
            ⚖ ग्राम-विधी साहाय्यक
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            तुमच्या कायदेशीर समस्येचे
            <span className="text-emerald-300"> सोपे मार्गदर्शन</span>
            मिळवा.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-emerald-100 sm:text-lg">
            जमीन, वारसा, बँक फसवणूक, सरकारी योजना आणि इतर
            कायदेशीर विषयांबद्दल सोप्या भाषेत माहिती मिळवा.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            <Link
              to="/problems"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-emerald-950 shadow-lg transition hover:bg-emerald-50"
            >
              समस्या शोधा →
            </Link>

            <Link
              to="/documents"
              className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              कागदपत्रे पहा
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;