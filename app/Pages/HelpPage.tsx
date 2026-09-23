const HelpPage = () => {
  return (
    <section className="px-6 py-12 lg:px-12">

      <div className="mx-auto max-w-4xl">

        <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
          Support
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Help & Support
        </h1>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">

          <a
            href="tel:15100"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="text-3xl">⚖️</div>

            <h2 className="mt-4 font-bold text-slate-900">
              Legal Assistance
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              विधी सहाय्यासाठी 15100 वर संपर्क करा.
            </p>

            <p className="mt-4 font-bold text-emerald-800">
              Call 15100 →
            </p>
          </a>

          <a
            href="tel:1930"
            className="rounded-2xl border border-red-100 bg-red-50 p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="text-3xl">🚨</div>

            <h2 className="mt-4 font-bold text-red-900">
              Cyber Fraud
            </h2>

            <p className="mt-2 text-sm text-red-700">
              डिजिटल किंवा बँक फसवणूक झाल्यास तात्काळ मदत घ्या.
            </p>

            <p className="mt-4 font-bold text-red-800">
              Call 1930 →
            </p>
          </a>

        </div>

      </div>

    </section>
  );
};

export default HelpPage;